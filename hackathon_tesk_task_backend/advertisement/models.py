from datetime import date

from django.db import models
from users.models import CustomUserModel
from datetime import timedelta
from django.utils import timezone


def tomorrow():
    return timezone.now() + timedelta(days=1)


def img_path(instance, filename=None):
    return f'advertisement_pictures/{date.today()}/{instance.author.id}/{filename}'


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
        verbose_name = 'Категорія'
        verbose_name_plural = 'Категорії'

    def __str__(self) -> str:
        return str(self.name)


class Advertisement(models.Model):
    id = models.AutoField(primary_key=True)
    author = models.OneToOneField(CustomUserModel, on_delete=models.CASCADE)
    title = models.CharField(verbose_name="Заголовок", max_length=99)
    description = models.TextField(verbose_name="Опис")
    categories = models.ManyToManyField(Category)
    location = models.CharField(verbose_name="Місцезнаходження", max_length=99)
    picture = models.ImageField(upload_to=img_path, null=True)
    status = models.CharField(verbose_name="Статус", choices=StatusChoices.choices,
                              default=StatusChoices.active, max_length=99)
    time_validity = models.DateTimeField(verbose_name="Виконати до", default=tomorrow)
    priority = models.CharField(verbose_name="Статус", choices=PriorityChoices.choices, max_length=99)

    class Meta:
        db_table = 'advertisements'
        verbose_name = 'Оголошення'
        verbose_name_plural = 'Оголошення'

    def __str__(self) -> str:
        return str(self.id) + " " + str(self.title)
