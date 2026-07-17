from django.contrib import admin
from django.contrib import admin

from .models import Equipment


@admin.register(Equipment)
class EquipmentAdmin(admin.ModelAdmin):
    list_display = (
        "name",
        "manufacturer",
        "model",
        "category",
        "status",
        "is_featured",
        "is_active",
    )
    list_filter = (
        "status",
        "category",
        "is_featured",
        "is_active",
    )
    search_fields = (
        "name",
        "manufacturer",
        "model",
        "category",
    )
    prepopulated_fields = {
        "slug": ("name",),
    }
# Register your models here.
