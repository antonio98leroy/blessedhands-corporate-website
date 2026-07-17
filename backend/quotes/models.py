from django.db import models
from django.core.validators import FileExtensionValidator


class QuoteRequest(models.Model):
    STATUS_CHOICES = [
        ("new", "New"),
        ("reviewing", "Reviewing"),
        ("contacted", "Contacted"),
        ("quoted", "Quote Sent"),
        ("approved", "Approved"),
        ("declined", "Declined"),
        ("closed", "Closed"),
    ]

    PROJECT_TYPE_CHOICES = [
        ("building", "Building Construction"),
        ("road", "Road Construction"),
        ("water", "Water Supply"),
        ("sanitation", "Sanitation"),
        ("renovation", "Renovation"),
        ("engineering", "Civil Engineering"),
        ("equipment", "Equipment Rental"),
        ("other", "Other"),
    ]

    contact_person = models.CharField(max_length=200)
    company_name = models.CharField(max_length=200, blank=True)
    email = models.EmailField()
    phone = models.CharField(max_length=50)
    project_type = models.CharField(
        max_length=30,
        choices=PROJECT_TYPE_CHOICES,
    )
    project_location = models.CharField(max_length=250)
    estimated_budget = models.DecimalField(
        max_digits=15,
        decimal_places=2,
        null=True,
        blank=True,
    )
    expected_start_date = models.DateField(null=True, blank=True)
    project_description = models.TextField()
    attachment = models.FileField(
        upload_to="quotes/attachments/",
        validators=[
            FileExtensionValidator(
                allowed_extensions=[
                    "pdf",
                    "doc",
                    "docx",
                    "xls",
                    "xlsx",
                    "jpg",
                    "jpeg",
                    "png",
                ]
            )
        ],
        blank=True,
        null=True,
    )
    status = models.CharField(
        max_length=20,
        choices=STATUS_CHOICES,
        default="new",
    )
    admin_notes = models.TextField(blank=True)
    submitted_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ["-submitted_at"]

    def __str__(self):
        return f"{self.contact_person} - {self.get_project_type_display()}"
# Create your models here.
