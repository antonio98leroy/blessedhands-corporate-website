from django.db import models


class TeamMember(models.Model):
    full_name = models.CharField(max_length=200)
    position = models.CharField(max_length=200)
    department = models.CharField(max_length=150, blank=True)
    biography = models.TextField(blank=True)
    qualifications = models.TextField(blank=True)
    email = models.EmailField(blank=True)
    phone = models.CharField(max_length=50, blank=True)
    linkedin_url = models.URLField(blank=True)
    photo = models.ImageField(
        upload_to="team/",
        blank=True,
        null=True,
    )
    display_order = models.PositiveIntegerField(default=0)
    is_management = models.BooleanField(default=False)
    is_active = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ["display_order", "full_name"]

    def __str__(self):
        return f"{self.full_name} - {self.position}"
# Create your models here.
