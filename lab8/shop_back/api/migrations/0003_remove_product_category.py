# Generated by Django 5.1.7 on 2025-03-24 18:49

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0002_product_category'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='product',
            name='category',
        ),
    ]
