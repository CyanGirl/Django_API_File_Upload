from django.shortcuts import render

# Create your views here.
from .serializers import APIsSerializer
from .models import APIs
from rest_framework.views import APIView
from rest_framework.parsers import MultiPartParser, FormParser
from rest_framework.response import Response
from rest_framework import status

class APIViews(APIView):
    parser_class=(MultiPartParser,FormParser)

    def get(self,request,*args,**kwargs):
        apis= APIs.objects.all()
        serializer=APIsSerializer(apis,many=True)
        return Response(serializer.data)

    def post(self,request,*args,**kwargs):
        api_serializer=APIsSerializer(data=request.data)

        if api_serializer.is_valid():
            api_serializer.save()
            return Response(api_serializer.data,status=status.HTTP_201_CREATED)

        else:
            print('error',api_serializer.errors)
            return Response(api_serializer.errors,status=status.HTTP_400_BAD_REQUEST)
