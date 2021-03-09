from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.generics import ListAPIView, RetrieveAPIView
from rest_framework import permissions
from .models import Listing
from .serializers import Listing, ListingDetailSerializer, ListingSerializer
from datetime import datetime, timezone, timedelta


class ListingsView(ListAPIView):
    queryset = Listing.objects.order_by('-list_date')
    permission_classes = (permissions.AllowAny, )
    serializer_class = ListingSerializer
    lookup_field = 'slug'


class ListingView(RetrieveAPIView):
    #added
    permission_classes = (permissions.AllowAny, )
    queryset = Listing.objects.order_by('-list_date')
    serializer_class = ListingDetailSerializer
    lookup_field = 'slug'


class SearchView(APIView):
    permission_classes = (permissions.AllowAny, )
    serializer_class = ListingSerializer

    def post(self, request, format=None):
        queryset = Listing.objects.order_by('-list_date')
        data = self.request.data

        category = data['category']
        queryset = queryset.filter(category__iexact=category)

        serializer = ListingSerializer(queryset, many=True)

        return Response(serializer.data)
