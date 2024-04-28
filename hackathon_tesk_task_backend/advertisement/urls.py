from django.urls import path

from .views import AdvertisementAPIView, AdvertisementListView, AdvertisementDetailView

urlpatterns = [
    path('create_help_advert/', AdvertisementAPIView.as_view(), name='create_advert'),
    path('get_profile_advert/', AdvertisementAPIView.as_view(), name='get_profile_advert'),
    path('delete_help_advert/', AdvertisementAPIView.as_view(), name='delete_advert'),
    path('get_all_advert/', AdvertisementListView.as_view(), name='get_all_advert'),
    path('get_all_advert/<pk>/contacts/', AdvertisementDetailView.as_view(), name='get_all_advert_contacts'),
]
