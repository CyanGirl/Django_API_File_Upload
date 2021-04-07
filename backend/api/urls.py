from django.urls import path
from . import views


urlpatterns=[
    path('posts/',views.APIViews.as_view(),name='posts_list'),
]