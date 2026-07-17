from django.shortcuts import render
from rest_framework import permissions, viewsets

from .models import QuoteRequest
from .serializers import QuoteRequestSerializer


class QuoteRequestViewSet(viewsets.ModelViewSet):
    queryset = QuoteRequest.objects.all()
    serializer_class = QuoteRequestSerializer

    def get_permissions(self):
        if self.action == "create":
            return [permissions.AllowAny()]

        return [permissions.IsAdminUser()]
