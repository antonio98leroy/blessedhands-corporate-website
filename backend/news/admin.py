from django.contrib import admin

from .models import NewsArticle


@admin.register(NewsArticle)
class NewsArticleAdmin(admin.ModelAdmin):
    list_display = (
        "title",
        "category",
        "is_featured",
        "is_published",
        "published_at",
    )
    list_filter = (
        "category",
        "is_featured",
        "is_published",
    )
    search_fields = (
        "title",
        "summary",
        "content",
    )
    prepopulated_fields = {
        "slug": ("title",),
    }
    date_hierarchy = "published_at"