from rest_framework import serializers

from .models import Equipment


class EquipmentSerializer(serializers.ModelSerializer):
    image_url = serializers.SerializerMethodField()

    class Meta:
        model = Equipment
        fields = [
            "id",
            "name",
            "slug",
            "model",
            "manufacturer",
            "category",
            "capacity",
            "description",
            "image",
            "image_url",
            "status",
            "is_featured",
            "is_active",
            "created_at",
            "updated_at",
        ]
        read_only_fields = [
            "slug",
            "created_at",
            "updated_at",
        ]

    def get_image_url(self, obj):
        request = self.context.get("request")

        if obj.image and request:
            return request.build_absolute_uri(obj.image.url)

        return None