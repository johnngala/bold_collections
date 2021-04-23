# Generated by Django 3.2 on 2021-04-23 08:01

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Listing',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('slug', models.CharField(max_length=200, unique=True)),
                ('title', models.CharField(max_length=150)),
                ('description', models.TextField(blank=True)),
                ('category', models.CharField(choices=[('shoes', 'Shoes'), ('shirts', 'Shirts'), ('dresses', 'Dresses'), ('skirts', 'Skirts'), ('bags', 'Bags'), ('caps', 'Caps'), ('trousers', 'Trousers')], default='dresses', max_length=50)),
                ('price', models.IntegerField()),
                ('photo_main', models.ImageField(upload_to='photos/%Y/%m/%d/')),
                ('photo_1', models.ImageField(blank=True, upload_to='photos/%Y/%m/%d/')),
                ('photo_2', models.ImageField(blank=True, upload_to='photos/%Y/%m/%d/')),
                ('photo_3', models.ImageField(blank=True, upload_to='photos/%Y/%m/%d/')),
                ('photo_4', models.ImageField(blank=True, upload_to='photos/%Y/%m/%d/')),
                ('photo_5', models.ImageField(blank=True, upload_to='photos/%Y/%m/%d/')),
                ('list_date', models.DateTimeField(blank=True, default=django.utils.timezone.now)),
            ],
        ),
    ]
