from django.urls import path
from . import views as v

urlpatterns=[
    path('products/' , v.getProducts, name="get_products"),
    path('products/<str:pk>/' , v.getProduct, name="get_product"),
    
]