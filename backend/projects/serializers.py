from rest_framework import serializers
from .models import Project



class ProjectSerializer(serializers.ModelSerializer):
    
    image_url = serializers.SerializerMethodField()

    class Meta:
        model = Project
        fields = [
            "id",
            "title",
            "slug",
            "client",
            "location",
            "category",
            "status",
            "description",
            "completion_date",
            "image",
            "image_url",
            "is_featured",
            "is_active",
            "created_at",
            "updated_at",
        ]
        read_only_fields = ["slug", "created_at", "updated_at"]

    def get_image_url(self, obj):
        request = self.context.get("request")

        if obj.image and request:
            return request.build_absolute_uri(obj.image.url)

        return None