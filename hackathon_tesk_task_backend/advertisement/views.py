from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import viewsets, status

from .models import Advertisement, StatusChoices
from .serializers import AdvertisementSerializer, GetAdvertisementSerializer
from users.permissioins import IsNeedsUser


class AdvertisementAPIView(APIView):
    permission_classes = [IsNeedsUser]

    def post(self, request, format=None):
        serializer = AdvertisementSerializer(data=request.data, context={'request': request})
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def get(self, request, format=None):
        advertisement = Advertisement.objects.filter(author=request.user,
                                                     status=StatusChoices.active).first()

        if not advertisement:
            return Response({"error": "No advertisements found for this user."},
                            status=status.HTTP_404_NOT_FOUND)

        serializer = GetAdvertisementSerializer(advertisement)
        return Response(serializer.data)

    def delete(self, request, format=None):
        advertisement = Advertisement.objects.filter(author=request.user,
                                                     status=StatusChoices.active).first()

        if not advertisement:
            return Response({"error": "No active advertisements found for this user."},
                            status=status.HTTP_404_NOT_FOUND)

        advertisement.status = StatusChoices.closed
        advertisement.save()
        return Response(advertisement.id, status=status.HTTP_200_OK)
