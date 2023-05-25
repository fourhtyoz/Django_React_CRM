from django.contrib import admin
from django.urls import path
from customers import views
from django.conf.urls import url


urlpatterns = [
    path('admin/', admin.site.urls),
    url(r'ˆapi/customers/$', views.customers_list),
    url(r'ˆapi/customers/(?P<pk>[0-9]+)$)', views.customer_detail)
]
