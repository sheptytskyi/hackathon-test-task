from rest_framework import serializers
from .models import CustomUserModel, UserTypeChoices


class UserSerializer(serializers.Serializer):
    email = serializers.CharField()
    first_name = serializers.CharField()
    last_name = serializers.CharField()
    user_type = serializers.ChoiceField(choices=UserTypeChoices)
    password = serializers.CharField(write_only=True)
    password_2 = serializers.CharField(write_only=True)

    def validate(self, data):
        password = data.get('password')
        password_confirm = data.pop('password_2', None)

        if password != password_confirm:
            raise serializers.ValidationError("Passwords do not match")

        return data

    def create(self, validated_data):
        return CustomUserModel.objects.create_user(**validated_data)
