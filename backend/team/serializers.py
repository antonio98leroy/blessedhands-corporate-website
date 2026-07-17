from rest_framework import serializers

from .models import TeamMember


class TeamMemberSerializer(serializers.ModelSerializer):
    photo_url = serializers.SerializerMethodField()

    class Meta:
        model = TeamMember
        fields = [
            "id",
            "full_name",
            "position",
            "department",
            "biography",
            "qualifications",
            "email",
            "phone",
            "linkedin_url",
            "photo",
            "photo_url",
            "display_order",
            "is_management",
            "is_active",
            "created_at",
            "updated_at",
        ]
        read_only_fields = [
            "created_at",
            "updated_at",
        ]

    def get_photo_url(self, obj):
        request = self.context.get("request")

        if obj.photo and request:
            return request.build_absolute_uri(obj.photo.url)

        return None