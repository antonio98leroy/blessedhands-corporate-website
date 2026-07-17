from django.shortcuts import render
from rest_framework import permissions, viewsets

from .models import Equipment
from .serializers import EquipmentSerializer


class EquipmentViewSet(viewsets.ModelViewSet):
    serializer_class = EquipmentSerializer
    lookup_field = "slug"

    def get_queryset(self):
        queryset = Equipment.objects.all()

        if self.request.user.is_staff:
            return queryset

        return queryset.filter(is_active=True)

    def get_permissions(self):
        if self.action in ["list", "retrieve"]:
            return [permissions.AllowAny()]

        return [permissions.IsAdminUser()]

# Create your views here.
