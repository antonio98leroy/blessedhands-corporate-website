from rest_framework.routers import DefaultRouter

from .views import QuoteRequestViewSet

router = DefaultRouter()
router.register(
    "quote-requests",
    QuoteRequestViewSet,
    basename="quote-request",
)

urlpatterns = router.urls