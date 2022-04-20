from django.urls import path,re_path
from . import views

app_name = "SB"

urlpatterns=[
    re_path(r"^page/(\d+)/$", views.sindex, name="SI"),
    re_path(r'^(\d+)/$', views.sdetail, name="SD"),
    re_path(r'^(\d+)/update/$', views.supdate, name="SU"),
    re_path(r'^(\d+)/delete/$', views.sdelete, name="SL"),
    path('add/', views.sadd, name="SA"),
]