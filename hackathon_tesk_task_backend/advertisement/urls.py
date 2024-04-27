from django.urls import path

from .views import AdvertisementAPIView

urlpatterns = [
    path('create_help_advert/', AdvertisementAPIView.as_view(), name='create_advert'),
    path('get_profile_advert/', AdvertisementAPIView.as_view(), name='get_profile_advert'),
    path('delete_help_advert/', AdvertisementAPIView.as_view(), name='delete_advert'),
]
