from django.shortcuts import render
from rest_framework import permissions, viewsets

from .models import TeamMember
from .serializers import TeamMemberSerializer


class TeamMemberViewSet(viewsets.ModelViewSet):
    serializer_class = TeamMemberSerializer

    def get_queryset(self):
        queryset = TeamMember.objects.all()

        if self.request.user.is_staff:
            return queryset

        return queryset.filter(is_active=True)

    def get_permissions(self):
        if self.action in ["list", "retrieve"]:
            return [permissions.AllowAny()]

        return [permissions.IsAdminUser()]
# Create your views here.
