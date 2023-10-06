from django.shortcuts import render
from django.http import JsonResponse , HttpResponse
# Create your views here.
from base.products import products
from rest_framework.decorators  import api_view,permission_classes
from rest_framework.response import Response
from rest_framework import permissions
from . import models as m
from . import serializer as seri

def getHome(request):
    message = "Home Page"

    return JsonResponse(message , safe=False)


@api_view(['GET'])
@permission_classes((permissions.AllowAny,))
def getProducts(request):
    products  = m.Product.objects.all()
    products = seri.ProductSerializer(products , many = True)
    
    return Response(products.data)


@api_view(['GET'])
@permission_classes((permissions.AllowAny, ))
def getProduct(request , pk):
    product =  m.Product.objects.get(_id=pk)
    product = seri.ProductSerializer(product,many=False)

    return Response(product.data)
    