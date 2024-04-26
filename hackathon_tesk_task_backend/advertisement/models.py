from datetime import datetime

from django.db import models
from ..users.models import CustomUserModel
from datetime import timedelta
from django.utils import timezone


def tomorrow():
    return timezone.now() + timedelta(days=1)


class StatusChoices(models.TextChoices):
    active = 'active', 'Активне'
    closed = 'closed', "Закрите"
    completed = 'completed', 'Виконане'


class PriorityChoices(models.TextChoices):
    moderate = 'moderate', 'Помірний'
    high = 'high', 'Високий'


class Category(models.Model):
    name = models.CharField(verbose_name="Назва категорії", unique=True, max_length=100)

    class Meta:
        ordering = ["name"]

    def __str__(self) -> str:
        return str(self.name)


class Advertisement(models.Model):
    id = models.AutoField(primary_key=True)
    author = models.OneToOneField(CustomUserModel, on_delete=models.CASCADE)
    title = models.CharField(verbose_name="Заголовок", max_length=99)
    description = models.CharField(verbose_name="Опис")
    categories = models.ManyToManyField(Category)
    location = models.CharField(verbose_name="Місцезнаходження", max_length=99)
    picture = models.ImageField(upload_to=f'advertisement_pictures/{datetime.today()}/{id}', null=True)
    status = models.CharField(verbose_name="Статус", choices=StatusChoices.choices, max_length=99)
    time_validity = models.DateTimeField(verbose_name="Виконати до", default=tomorrow)
    priority = models.CharField(verbose_name="Статус", choices=PriorityChoices.choices, max_length=99)

    class Meta:
        db_table = 'advertisements'
        verbose_name = 'Оголошення'
        verbose_name_plural = 'Оголошення'

    def __str__(self) -> str:
        return str(self.id)
