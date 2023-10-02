from django.shortcuts import render
from django.http import JsonResponse , HttpResponse
# Create your views here.
from base.products import products
from rest_framework.decorators  import api_view,permission_classes
from rest_framework.response import Response
from rest_framework import permissions

def getHome(request):
    message = "Home Page"

    return JsonResponse(message , safe=False)


@api_view(['GET'])
@permission_classes((permissions.AllowAny,))
def getProducts(request):
    myProducts = products
    
    return Response(myProducts )


@api_view(['GET'])
@permission_classes((permissions.AllowAny, ))
def getProduct(request , pk):
    arr =  products
    product = ''
    for i in arr:
        if i['_id']== pk:
            product=i
            break

    return Response(product)
    