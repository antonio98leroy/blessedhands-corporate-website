from rest_framework import serializers

from .models import ContactMessage


class ContactMessageSerializer(serializers.ModelSerializer):
    class Meta:
        model = ContactMessage
        fields = [
            "id",
            "name",
            "email",
            "phone",
            "subject",
            "message",
            "status",
            "admin_notes",
            "is_read",
            "created_at",
            "updated_at",
        ]
        read_only_fields = [
            "status",
            "admin_notes",
            "is_read",
            "created_at",
            "updated_at",
        ]