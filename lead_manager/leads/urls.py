from .api import LeadViewset
from rest_framework.routers import DefaultRouter 

router = DefaultRouter()
router.register('api/lead', LeadViewset, basename='lead')

urlpatterns = router.urls

