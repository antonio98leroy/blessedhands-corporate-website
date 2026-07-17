from django.contrib import admin
from django.contrib import admin
from .models import GalleryItem

@admin.register(GalleryItem)
class GalleryItemAdmin(admin.ModelAdmin):
    list_display = (
        "title",
        "category",
        "is_featured",
        "is_active",
        "display_order",
        "created_at",
    )
    list_filter = (
        "category",
        "is_featured",
        "is_active",
    )
    search_fields = (
        "title",
        "description",
    )
    list_editable = (
        "display_order",
        "is_active",
    )
