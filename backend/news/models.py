from django.db import models
from django.conf import settings
from django.db import models
from django.utils import timezone
from django.utils.text import slugify


class NewsArticle(models.Model):
    CATEGORY_CHOICES = [
        ("company", "Company News"),
        ("project", "Project Updates"),
        ("safety", "Safety"),
        ("community", "Community"),
        ("press_release", "Press Release"),
        ("announcement", "Announcement"),
    ]

    title = models.CharField(max_length=250)
    slug = models.SlugField(max_length=270, unique=True, blank=True)
    category = models.CharField(
        max_length=30,
        choices=CATEGORY_CHOICES,
        default="company",
    )
    summary = models.CharField(max_length=350)
    content = models.TextField()
    featured_image = models.ImageField(
        upload_to="news/",
        blank=True,
        null=True,
    )
    author = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.SET_NULL,
        null=True,
        blank=True,
        related_name="news_articles",
    )
    is_featured = models.BooleanField(default=False)
    is_published = models.BooleanField(default=False)
    published_at = models.DateTimeField(null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ["-published_at", "-created_at"]

    def save(self, *args, **kwargs):
        if not self.slug:
            base_slug = slugify(self.title)
            slug = base_slug
            counter = 1

            while NewsArticle.objects.filter(slug=slug).exclude(pk=self.pk).exists():
                slug = f"{base_slug}-{counter}"
                counter += 1

            self.slug = slug

        if self.is_published and not self.published_at:
            self.published_at = timezone.now()

        super().save(*args, **kwargs)

    def __str__(self):
        return self.title
# Create your models here.
