from rest_framework import serializers
from .models import APIs

class APIsSerializer(serializers.ModelSerializer):
    class Meta:
        model=APIs
        fields='__all__'

