from rest_framework import permissions, viewsets

from .models import Career, JobApplication
from .serializers import CareerSerializer, JobApplicationSerializer


class CareerViewSet(viewsets.ModelViewSet):
    serializer_class = CareerSerializer

    def get_queryset(self):
        queryset = Career.objects.all()

        if self.request.user.is_staff:
            return queryset

        return queryset.filter(is_active=True)

    def get_permissions(self):
        if self.action in ["list", "retrieve"]:
            return [permissions.AllowAny()]

        return [permissions.IsAdminUser()]


class JobApplicationViewSet(viewsets.ModelViewSet):
    queryset = JobApplication.objects.select_related("career").all()
    serializer_class = JobApplicationSerializer

    def get_permissions(self):
        if self.action == "create":
            return [permissions.AllowAny()]

        return [permissions.IsAdminUser()]