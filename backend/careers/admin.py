from django.contrib import admin
from .models import Career, JobApplication


@admin.register(Career)
class CareerAdmin(admin.ModelAdmin):
    list_display = (
        "title",
        "department",
        "location",
        "employment_type",
        "closing_date",
        "is_active",
    )
    list_filter = (
        "department",
        "employment_type",
        "is_active",
    )
    search_fields = (
        "title",
        "department",
        "location",
    )


@admin.register(JobApplication)
class JobApplicationAdmin(admin.ModelAdmin):
    list_display = (
        "full_name",
        "career",
        "email",
        "phone",
        "status",
        "submitted_at",
    )
    list_filter = (
        "status",
        "career",
        "submitted_at",
    )
    search_fields = (
        "full_name",
        "email",
        "phone",
        "career__title",
    )
    readonly_fields = ("submitted_at",)
