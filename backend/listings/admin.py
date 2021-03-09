from django.contrib import admin
from .models import Listing


class ListingAdmin(admin.ModelAdmin):
    list_display = ('id', 'title', 'price', 'list_date')
    list_display_links = ('id', 'title')
    search_fields = ('title', 'description',  'price')
    list_per_page = 25


admin.site.register(Listing, ListingAdmin)
