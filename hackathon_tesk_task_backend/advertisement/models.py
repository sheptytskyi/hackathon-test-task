from datetime import date, timedelta

from django.db import models
from django.utils import timezone

from users.models import CustomUserModel


def tomorrow():
    return timezone.now() + timedelta(days=1)


def img_path(instance, filename=None):
    return f'advertisement_pictures/{date.today()}/{instance.advertisement.id}/{filename}'


class StatusChoices(models.TextChoices):
    active = 'active', 'Активне'
    closed = 'closed', "Закрите"


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
    author = models.ForeignKey(CustomUserModel, on_delete=models.CASCADE)
    title = models.CharField(verbose_name="Заголовок", max_length=99)
    description = models.TextField(verbose_name="Опис")
    categories = models.ManyToManyField(Category)
    location = models.CharField(verbose_name="Місцезнаходження", max_length=99)
    status = models.CharField(verbose_name="Статус", choices=StatusChoices.choices,
                              default=StatusChoices.active, max_length=99)
    time_validity = models.DateTimeField(verbose_name="Виконати до", default=tomorrow)
    priority = models.CharField(verbose_name="Пріоритет", choices=PriorityChoices.choices, max_length=99)
    contact_email = models.EmailField(verbose_name='Контактна пошта')
    contact_phone = models.TextField(verbose_name='Контактний телефон')

    @property
    def user_name(self):
        return f'{self.author.first_name} {self.author.last_name}'

    class Meta:
        db_table = 'advertisements'
        verbose_name = 'Оголошення'
        verbose_name_plural = 'Оголошення'

    def __str__(self) -> str:
        return str(self.id) + " " + str(self.title)


class Picture(models.Model):
    picture = models.ImageField(verbose_name='Фотографія', upload_to=img_path, null=True, blank=True)
    advertisement = models.ForeignKey(
        Advertisement,
        related_name='pictures',
        on_delete=models.SET_NULL,
        null=True, blank=True)

    class Meta:
        db_table = 'Picture'
        verbose_name = 'Картинка'
        verbose_name_plural = 'Картинки'

    def __str__(self) -> str:
        return str(self.id) + " " + str(self.advertisement)
