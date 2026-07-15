from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.views import APIView


class HomeAPIView(APIView):
    permission_classes = []

    def get(self, request):
        return Response(
            {
                "company": "Blessed Hands General Construction, Water & Sanitation Company",
                "version": "1.0.0",
                "status": "API running",
            }
        )
