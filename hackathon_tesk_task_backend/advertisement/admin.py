from django.contrib import admin

from .models import Advertisement, Category, Picture


class PictureInline(admin.TabularInline):
    model = Picture
    extra = 1


@admin.register(Advertisement)
class AdvertisementAdmin(admin.ModelAdmin):
    inlines = [PictureInline]


admin.site.register(Category)

admin.site.register(Picture)
