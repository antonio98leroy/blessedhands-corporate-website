from django.shortcuts import render
from rest_framework import permissions, viewsets

from .models import NewsArticle
from .serializers import NewsArticleSerializer


class NewsArticleViewSet(viewsets.ModelViewSet):
    serializer_class = NewsArticleSerializer
    lookup_field = "slug"

    def get_queryset(self):
        queryset = NewsArticle.objects.select_related("author").all()

        if self.request.user.is_staff:
            return queryset

        return queryset.filter(is_published=True)

    def perform_create(self, serializer):
        serializer.save(author=self.request.user)

    def get_permissions(self):
        if self.action in ["list", "retrieve"]:
            return [permissions.AllowAny()]

        return [permissions.IsAdminUser()]
# Create your views here.
