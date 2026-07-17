from django.db import models

class GalleryItem(models.Model):
    CATEGORY_CHOICES = [
        ("construction", "Construction"),
        ("water", "Water"),
        ("sanitation", "Sanitation"),
        ("equipment", "Equipment"),
        ("community", "Community Activities"),
        ("team", "Team"),
        ("other", "Other"),
    ]

    title = models.CharField(max_length=200)
    category = models.CharField(
        max_length=30,
        choices=CATEGORY_CHOICES,
        default="other",
    )
    description = models.TextField(blank=True)
    image = models.ImageField(upload_to="gallery/")
    display_order = models.PositiveIntegerField(default=0)
    is_featured = models.BooleanField(default=False)
    is_active = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ["display_order", "-created_at"]

    def __str__(self):
        return self.title