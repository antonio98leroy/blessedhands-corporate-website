from django.db import models
from django.utils.text import slugify


class Equipment(models.Model):
    STATUS_CHOICES = [
        ("available", "Available"),
        ("in_use", "In Use"),
        ("maintenance", "Under Maintenance"),
        ("unavailable", "Unavailable"),
    ]

    name = models.CharField(max_length=200)
    slug = models.SlugField(max_length=220, unique=True, blank=True)
    model = models.CharField(max_length=150, blank=True)
    manufacturer = models.CharField(max_length=150, blank=True)
    category = models.CharField(max_length=150)
    capacity = models.CharField(max_length=150, blank=True)
    description = models.TextField()
    image = models.ImageField(
        upload_to="equipment/",
        blank=True,
        null=True,
    )
    status = models.CharField(
        max_length=30,
        choices=STATUS_CHOICES,
        default="available",
    )
    is_featured = models.BooleanField(default=False)
    is_active = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ["name"]
        verbose_name = "Equipment"
        verbose_name_plural = "Equipment"

    def save(self, *args, **kwargs):
        if not self.slug:
            base_slug = slugify(self.name)
            slug = base_slug
            counter = 1

            while Equipment.objects.filter(slug=slug).exclude(pk=self.pk).exists():
                slug = f"{base_slug}-{counter}"
                counter += 1

            self.slug = slug

        super().save(*args, **kwargs)

    def __str__(self):
        return self.name