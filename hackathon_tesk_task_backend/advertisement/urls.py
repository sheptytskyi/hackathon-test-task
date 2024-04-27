from django.urls import path

from .views import AdvertisementAPIView

urlpatterns = [
    path('create_help_advert/', AdvertisementAPIView.as_view(), name='create_advert'),
    path('get_profile_advert/', AdvertisementAPIView.as_view(), name='get_profile_advert'),
    path('delete_help_advert/', AdvertisementAPIView.as_view(), name='delete_advert'),
    # path('get_all_advert/', TokenRefreshView.as_view(), name='token_refresh'),
    # path('get_advert/<slug:id>/', AdvertisementView.as_view(), name='get_advertisement'),
]
