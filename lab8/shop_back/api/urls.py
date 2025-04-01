from django.urls import path
from .views import product_list, single_product, category_list, single_category
urlpatterns = [
    path('products/', product_list),
    path('products/<int:id>/', single_product),
    path('categories/', category_list),
    path('categories/<int:id>/', single_category),
]
