# Generated by Django 4.0.2 on 2022-02-13 18:37

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0006_remove_traininghistory_statistics_and_more'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='traininghistory',
            name='statistics',
        ),
        migrations.AddField(
            model_name='statistics',
            name='history',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.DO_NOTHING, to='api.traininghistory'),
        ),
    ]
