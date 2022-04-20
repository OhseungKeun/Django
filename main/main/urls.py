"""main URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include, re_path
from . import views

app_name = 'A'
urlpatterns = [
    path('admin/', admin.site.urls),
    path("main/", views.index, name="N"),
    path('board/', include('board.urls')),
    path('account/', include('django.contrib.auth.urls')),
    path("account/register/", views.createAccount, name="createAccount"),
    path("account/myinfo/", views.myinfo),
    path('account/deleteuser', views.deleteuser),
    path('', views.intro, name='intro'),
    path('login/',views.login),
    path('sboard/', include('sboard.urls')), 
]
