from django.urls import path

from . import views

urlpatterns = [
    path('create_help_advert/', views.AdvertisementCreateAPIView.as_view(), name='create_advert'),
    path('get_profile_advert/', views.AdvertisementProfileAPIView.as_view(), name='get_profile_advert'),
    path('delete_help_advert/', views.AdvertisementDeleteAPIView.as_view(), name='delete_advert'),
    path('get_all_advert/', views.AdvertisementListView.as_view(), name='get_all_advert'),
    path('get_all_advert/<pk>/contacts/', views.AdvertisementDetailView.as_view(), name='get_all_advert_contacts'),
]
