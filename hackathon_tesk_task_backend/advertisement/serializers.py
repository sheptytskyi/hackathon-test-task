from django.db import transaction
from rest_framework import serializers

from .models import (Advertisement, Category, Picture, PriorityChoices,
                     StatusChoices)


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ['name']


class PictureSerializer(serializers.ModelSerializer):
    picture = serializers.ImageField(
        max_length=None, use_url=True
    )

    class Meta:
        model = Picture
        fields = ['picture']


class ContactSerializer(serializers.Serializer):
    email = serializers.EmailField()
    phone = serializers.CharField()


class AdvertisementSerializer(serializers.Serializer):
    author = serializers.CurrentUserDefault()
    categories = serializers.PrimaryKeyRelatedField(queryset=Category.objects.all(), many=True)
    pictures = serializers.ListField(child=serializers.ImageField(), required=False)
    contacts = ContactSerializer()
    title = serializers.CharField(max_length=99)
    description = serializers.CharField(max_length=256)
    location = serializers.CharField(max_length=99)
    status = serializers.ChoiceField(choices=StatusChoices)
    time_validity = serializers.DateTimeField(required=False)
    priority = serializers.ChoiceField(choices=PriorityChoices)

    def validate(self, data):
        if self.instance:
            return data
        curr_user = self.context['request'].user
        if Advertisement.objects.filter(author=curr_user, status='active').exists():
            raise serializers.ValidationError("You already have an active advertisement.")
        return data

    def create(self, validated_data):
        categories_data = validated_data.pop('categories', None)
        pictures_data = validated_data.pop('pictures', None)
        contacts_data = validated_data.pop('contacts', None)

        author = self.context['request'].user

        with transaction.atomic():
            advertisement = Advertisement.objects.create(author=author, contacts=contacts_data, **validated_data)

            for category_data in categories_data:
                advertisement.categories.add(category_data)

            if pictures_data:
                for picture_data in pictures_data:
                    Picture.objects.create(advertisement=advertisement, picture=picture_data)

        return advertisement


class GetAdvertisementSerializer(serializers.ModelSerializer):
    user_name = serializers.ReadOnlyField()

    class Meta:
        model = Advertisement
        fields = ['id', 'title', 'description', 'user_name']


class AdvertisementListSerializer(serializers.ModelSerializer):
    pictures = PictureSerializer(many=True, read_only=True)

    class Meta:
        model = Advertisement
        fields = ['id', 'title', 'description', 'categories', 'location',
                  'pictures', 'status', 'time_validity', 'priority']
