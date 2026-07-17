from django.conf import settings
from django.conf.urls.static import static
from django.contrib import admin
from django.urls import include, path

urlpatterns = [
    path("admin/", admin.site.urls),

    path("api/", include("website.urls")),
    path("api/", include("services.urls")),
    path("api/", include("projects.urls")),
    path("api/", include("equipment.urls")),
    path("api/", include("team.urls")),
    path("api/", include("news.urls")),
    path("api/", include("gallery.urls")),
    path("api/", include("careers.urls")),
    path("api/", include("contact.urls")),
    path("api/", include("quotes.urls")),
]

if settings.DEBUG:
    urlpatterns += static(
        settings.MEDIA_URL,
        document_root=settings.MEDIA_ROOT,
    )