from rest_framework import status
from rest_framework.generics import GenericAPIView
from rest_framework.response import Response

from users.permissioins import IsNeedsUser

from .models import Advertisement, StatusChoices
from .serializers import AdvertisementSerializer, GetAdvertisementSerializer


class AdvertisementAPIView(GenericAPIView):
    serializer_class = AdvertisementSerializer
    permission_classes = [IsNeedsUser]

    def __get_advertisement(self, request):
        advertisement = Advertisement.objects.filter(author=request.user,
                                                     status=StatusChoices.active).first()
        if not advertisement:
            return None, Response({"error": "No active advertisements found for this user."},
                                  status=status.HTTP_404_NOT_FOUND)
        return advertisement, None

    def post(self, request):
        serializer = self.get_serializer(data=request.data, context={'request': request})
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def get(self, request):
        advertisement, response = self.__get_advertisement(request)
        if response:
            return response

        serializer = GetAdvertisementSerializer(advertisement)
        return Response(serializer.data)

    def delete(self, request):
        advertisement, response = self.__get_advertisement(request)
        if response:
            return response

        advertisement.status = StatusChoices.closed
        advertisement.save()
        return Response(advertisement.id, status=status.HTTP_200_OK)
