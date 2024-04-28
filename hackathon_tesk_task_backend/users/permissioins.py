from rest_framework import permissions

from users.models import UserTypeChoices


class IsNeedsUser(permissions.IsAuthenticated):

    def has_permission(self, request, view):
        return request.user.user_type == UserTypeChoices.needs
