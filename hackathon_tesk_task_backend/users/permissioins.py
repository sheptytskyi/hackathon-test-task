from rest_framework import permissions

from users.models import UserTypeChoices


class IsNeedsUser(permissions.BasePermission):

    def has_permission(self, request, view):
        if not request.user.is_authenticated:
            return False

        return request.user.user_type == UserTypeChoices.needs
