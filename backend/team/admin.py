from django.contrib import admin

from .models import TeamMember


@admin.register(TeamMember)
class TeamMemberAdmin(admin.ModelAdmin):
    list_display = (
        "full_name",
        "position",
        "department",
        "is_management",
        "is_active",
        "display_order",
    )
    list_filter = (
        "department",
        "is_management",
        "is_active",
    )
    search_fields = (
        "full_name",
        "position",
        "department",
        "email",
    )
    list_editable = (
        "display_order",
        "is_active",
    )
# Register your models here.
