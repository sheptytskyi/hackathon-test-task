from django.contrib.auth.forms import UserCreationForm
from .models import CustomUserModel


class CustomUserCreationForm(UserCreationForm):
    class Meta(UserCreationForm.Meta):
        model = CustomUserModel
        fields = ('email', 'user_type', 'first_name', 'last_name')
