from django.contrib import admin
from .models import Project


@admin.register(Project)
class ProjectAdmin(admin.ModelAdmin):
    list_display = (
        "title",
        "category",
        "location",
        "status",
        "is_featured",
        "is_active",
        "created_at",
    )
    list_filter = (
        "status",
        "category",
        "is_featured",
        "is_active",
    )
    search_fields = (
        "title",
        "client",
        "location",
        "category",
    )
    prepopulated_fields = {
        "slug": ("title",),
    }