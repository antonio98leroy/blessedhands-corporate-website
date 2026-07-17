from rest_framework import serializers

from .models import NewsArticle


class NewsArticleSerializer(serializers.ModelSerializer):
    featured_image_url = serializers.SerializerMethodField()
    author_name = serializers.SerializerMethodField()

    class Meta:
        model = NewsArticle
        fields = [
            "id",
            "title",
            "slug",
            "category",
            "summary",
            "content",
            "featured_image",
            "featured_image_url",
            "author",
            "author_name",
            "is_featured",
            "is_published",
            "published_at",
            "created_at",
            "updated_at",
        ]
        read_only_fields = [
            "slug",
            "author",
            "author_name",
            "published_at",
            "created_at",
            "updated_at",
        ]

    def get_featured_image_url(self, obj):
        request = self.context.get("request")

        if obj.featured_image and request:
            return request.build_absolute_uri(obj.featured_image.url)

        return None

    def get_author_name(self, obj):
        if obj.author:
            return obj.author.get_full_name() or obj.author.username

        return None