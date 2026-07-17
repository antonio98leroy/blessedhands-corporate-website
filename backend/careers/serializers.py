from rest_framework import serializers

from .models import Career, JobApplication


class CareerSerializer(serializers.ModelSerializer):
    application_count = serializers.IntegerField(
        source="applications.count",
        read_only=True,
    )

    class Meta:
        model = Career
        fields = [
            "id",
            "title",
            "department",
            "location",
            "employment_type",
            "description",
            "responsibilities",
            "qualifications",
            "closing_date",
            "is_active",
            "application_count",
            "created_at",
            "updated_at",
        ]
        read_only_fields = [
            "application_count",
            "created_at",
            "updated_at",
        ]


class JobApplicationSerializer(serializers.ModelSerializer):
    career_title = serializers.CharField(
        source="career.title",
        read_only=True,
    )

    class Meta:
        model = JobApplication
        fields = [
            "id",
            "career",
            "career_title",
            "full_name",
            "email",
            "phone",
            "address",
            "cover_letter",
            "cv",
            "supporting_document",
            "status",
            "admin_notes",
            "submitted_at",
        ]
        read_only_fields = [
            "career_title",
            "status",
            "admin_notes",
            "submitted_at",
        ]