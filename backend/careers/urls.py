from rest_framework.routers import DefaultRouter

from .views import CareerViewSet, JobApplicationViewSet

router = DefaultRouter()
router.register("careers", CareerViewSet, basename="career")
router.register(
    "job-applications",
    JobApplicationViewSet,
    basename="job-application",
)

urlpatterns = router.urls