from rest_framework import serializers

from .models import GalleryItem


class GalleryItemSerializer(serializers.ModelSerializer):
    image_url = serializers.SerializerMethodField()

    class Meta:
        model = GalleryItem
        fields = [
            "id",
            "title",
            "category",
            "description",
            "image",
            "image_url",
            "display_order",
            "is_featured",
            "is_active",
            "created_at",
        ]
        read_only_fields = ["created_at"]

    def get_image_url(self, obj):
        request = self.context.get("request")

        if obj.image and request:
            return request.build_absolute_uri(obj.image.url)

        return None