from django.db import models
from django.core.validators import FileExtensionValidator
from django.db import models


class Career(models.Model):
    EMPLOYMENT_TYPE_CHOICES = [
        ("full_time", "Full Time"),
        ("part_time", "Part Time"),
        ("contract", "Contract"),
        ("internship", "Internship"),
        ("temporary", "Temporary"),
    ]

    title = models.CharField(max_length=200)
    department = models.CharField(max_length=150)
    location = models.CharField(max_length=200)
    employment_type = models.CharField(
        max_length=20,
        choices=EMPLOYMENT_TYPE_CHOICES,
        default="full_time",
    )
    description = models.TextField()
    responsibilities = models.TextField()
    qualifications = models.TextField()
    closing_date = models.DateField()
    is_active = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ["closing_date"]

    def __str__(self):
        return self.title


class JobApplication(models.Model):
    STATUS_CHOICES = [
        ("received", "Received"),
        ("reviewing", "Reviewing"),
        ("shortlisted", "Shortlisted"),
        ("interviewed", "Interviewed"),
        ("selected", "Selected"),
        ("rejected", "Rejected"),
    ]

    career = models.ForeignKey(
        Career,
        on_delete=models.CASCADE,
        related_name="applications",
    )
    full_name = models.CharField(max_length=200)
    email = models.EmailField()
    phone = models.CharField(max_length=50)
    address = models.CharField(max_length=255, blank=True)
    cover_letter = models.TextField()
    cv = models.FileField(
        upload_to="applications/cvs/",
        validators=[
            FileExtensionValidator(
                allowed_extensions=["pdf", "doc", "docx"]
            )
        ],
    )
    supporting_document = models.FileField(
        upload_to="applications/supporting_documents/",
        validators=[
            FileExtensionValidator(
                allowed_extensions=["pdf", "doc", "docx", "jpg", "jpeg", "png"]
            )
        ],
        blank=True,
        null=True,
    )
    status = models.CharField(
        max_length=20,
        choices=STATUS_CHOICES,
        default="received",
    )
    admin_notes = models.TextField(blank=True)
    submitted_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ["-submitted_at"]

    def __str__(self):
        return f"{self.full_name} - {self.career.title}"