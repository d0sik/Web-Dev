from django.shortcuts import render
from django.http import JsonResponse
from .models import Product, Category

def product_list(request):
    products = Product.objects.all()
    json_products = [product.to_json() for product in products]  
    return JsonResponse(json_products, safe=False)

def single_product(request, id):
    product = Product.objects.get(id=id)
    return JsonResponse(product.to_json())

def category_list(request):
    categories = Category.objects.all()  
    json_categorise = [category.to_json() for category in categories]
    return JsonResponse(json_categorise, safe=False)

def single_category(request, id):
    category = Category.objects.get(id=id)
    return JsonResponse(category.to_json())