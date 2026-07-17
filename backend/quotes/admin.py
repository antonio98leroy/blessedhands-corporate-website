from django.contrib import admin
from .models import QuoteRequest


@admin.register(QuoteRequest)
class QuoteRequestAdmin(admin.ModelAdmin):
    list_display = (
        "contact_person",
        "company_name",
        "project_type",
        "project_location",
        "status",
        "submitted_at",
    )
    list_filter = (
        "status",
        "project_type",
        "submitted_at",
    )
    search_fields = (
        "contact_person",
        "company_name",
        "email",
        "phone",
        "project_location",
    )
    readonly_fields = (
        "submitted_at",
        "updated_at",
    )