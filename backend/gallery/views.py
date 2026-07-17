from django.shortcuts import render
from rest_framework import permissions, viewsets

from .models import GalleryItem
from .serializers import GalleryItemSerializer


class GalleryItemViewSet(viewsets.ModelViewSet):
    serializer_class = GalleryItemSerializer

    def get_queryset(self):
        queryset = GalleryItem.objects.all()

        if self.request.user.is_staff:
            return queryset

        return queryset.filter(is_active=True)

    def get_permissions(self):
        if self.action in ["list", "retrieve"]:
            return [permissions.AllowAny()]

        return [permissions.IsAdminUser()]