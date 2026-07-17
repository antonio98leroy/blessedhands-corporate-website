from rest_framework import serializers

from .models import QuoteRequest


class QuoteRequestSerializer(serializers.ModelSerializer):
    project_type_display = serializers.CharField(
        source="get_project_type_display",
        read_only=True,
    )

    class Meta:
        model = QuoteRequest
        fields = [
            "id",
            "contact_person",
            "company_name",
            "email",
            "phone",
            "project_type",
            "project_type_display",
            "project_location",
            "estimated_budget",
            "expected_start_date",
            "project_description",
            "attachment",
            "status",
            "admin_notes",
            "submitted_at",
            "updated_at",
        ]
        read_only_fields = [
            "project_type_display",
            "status",
            "admin_notes",
            "submitted_at",
            "updated_at",
        ]