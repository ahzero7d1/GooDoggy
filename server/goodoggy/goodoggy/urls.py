from django.contrib import admin
from django.urls import path, include
from . import views #주석

urlpatterns = [
    path('admin/', admin.site.urls),
    path('accounts/', include('allauth.urls')),
    path('accounts/profile/', views.profile, name='profile'),  # 추가된 부분
    path('gmail-quickstart/', views.gmail_quickstart, name='gmail-quickstart'),
]
