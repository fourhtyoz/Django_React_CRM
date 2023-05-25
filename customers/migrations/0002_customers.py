# Generated by Django 4.2.1 on 2023-05-25 21:11

from django.db import migrations

def create_data(apps, schema_editor):
    Customer = apps.get_model('customers', 'Customer')
    Customer(first_name='Customer 001',
            last_name='Customer 001',
            email='customer001@gmail.com',
            phone='000000',
            address='Customer 001 address',
            description='Customer 001 description').save()

class Migration(migrations.Migration):
    dependencies = [
        ('customers', '0001_initial'),
    ]
    operations = [
        migrations.RunPython(create_data),
    ]

   
        