# Generated by Django 4.0.2 on 2022-02-12 14:31

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0004_remove_traininghistory_statistics_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='exercise',
            name='body_part',
            field=models.CharField(blank=True, max_length=100),
        ),
        migrations.AlterField(
            model_name='exercise',
            name='imagepath',
            field=models.TextField(blank=True),
        ),
        migrations.AlterField(
            model_name='exercise',
            name='type',
            field=models.CharField(blank=True, max_length=100),
        ),
    ]
