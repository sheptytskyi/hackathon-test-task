from django.db import models
from django.utils import timezone
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin, BaseUserManager
from django.utils.translation import gettext_lazy as _


class UserTypeChoices(models.TextChoices):
    needs = 'needs', 'Потребує допомоги'
    helper = 'helper', 'Надає допомогу'


class CustomUserManager(BaseUserManager):
    def create_user(self, email, password, **extra_fields):
        if not email:
            raise ValueError(_("The Email must be set"))
        email = self.normalize_email(email)
        user = self.model(email=email, **extra_fields)
        user.set_password(password)
        user.save()
        return user

    def create_superuser(self, email, password, **extra_fields):
        extra_fields.setdefault("is_staff", True)
        extra_fields.setdefault("is_superuser", True)
        extra_fields.setdefault("is_active", True)

        if extra_fields.get("is_staff") is not True:
            raise ValueError(_("Superuser must have is_staff=True."))
        if extra_fields.get("is_superuser") is not True:
            raise ValueError(_("Superuser must have is_superuser=True."))
        return self.create_user(email, password, **extra_fields)


class CustomUserModel(AbstractBaseUser, PermissionsMixin):
    USERNAME_FIELD = "email"

    email = models.EmailField(verbose_name='Електрона пошта', unique=True, db_index=True)
    first_name = models.CharField(verbose_name='Імʼя')
    last_name = models.CharField(verbose_name='Прізвище')
    user_type = models.CharField(verbose_name='Тип користувача', choices=UserTypeChoices.choices, max_length=99)
    is_staff = models.BooleanField(verbose_name='Персонал', default=False)
    is_active = models.BooleanField(verbose_name='Активний', default=True)
    date_joined = models.DateTimeField(verbose_name='Дата приєднання', default=timezone.now)

    objects = CustomUserManager()

    class Meta:
        db_table = 'users'
        verbose_name = 'Користувач'
        verbose_name_plural = 'Користувачі'

    def __str__(self) -> str:
        return self.email
