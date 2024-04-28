from rest_framework import status, generics
from rest_framework.generics import GenericAPIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from django.shortcuts import get_object_or_404

from users.permissioins import IsNeedsUser

from .models import Advertisement, StatusChoices
from .serializers import (AdvertisementSerializer, GetAdvertisementSerializer,
                          AdvertisementListSerializer, AdvertisementDetailSerializer)


# class AdvertisementAPIView(GenericAPIView):
#     serializer_class = AdvertisementSerializer
#     permission_classes = [IsNeedsUser]
#
#     def post(self, request):
#         serializer = self.get_serializer(data=request.data, context={'request': request})
#         if serializer.is_valid():
#             serializer.save()
#             return Response(status=status.HTTP_201_CREATED)
#         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
#
#     def get(self, request):
#         advertisements = Advertisement.objects.filter(author=request.user)
#         serializer = GetAdvertisementSerializer(advertisements, many=True)
#         return Response(serializer.data)
#
#     def delete(self, request):
#         advertisement = get_object_or_404(Advertisement, author=request.user, status=StatusChoices.active)
#         advertisement.status = StatusChoices.closed
#         advertisement.save()
#         return Response({'advertisement_id': advertisement.id}, status=status.HTTP_200_OK)


class AdvertisementCreateAPIView(GenericAPIView):
    serializer_class = AdvertisementSerializer
    permission_classes = [IsNeedsUser]

    def post(self, request):
        serializer = self.get_serializer(data=request.data, context={'request': request})
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class AdvertisementProfileAPIView(GenericAPIView):
    serializer_class = GetAdvertisementSerializer

    def get(self, request):
        advertisements = Advertisement.objects.filter(author=request.user)
        serializer = GetAdvertisementSerializer(advertisements, many=True)
        return Response(serializer.data)


class AdvertisementDeleteAPIView(GenericAPIView):
    def delete(self, request):
        advertisement = get_object_or_404(Advertisement, author=request.user, status=StatusChoices.active)
        advertisement.status = StatusChoices.closed
        advertisement.save()
        return Response({'advertisement_id': advertisement.id}, status=status.HTTP_200_OK)


class AdvertisementListView(generics.ListAPIView):
    permission_classes = [AllowAny]
    queryset = Advertisement.objects.filter(status=StatusChoices.active)
    serializer_class = AdvertisementListSerializer
    filterset_fields = ['categories', 'priority']


class AdvertisementDetailView(generics.RetrieveAPIView):
    permission_classes = [IsAuthenticated]
    serializer_class = AdvertisementDetailSerializer
    queryset = Advertisement.objects.filter(status=StatusChoices.active)
