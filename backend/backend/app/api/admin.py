from django.contrib import admin
from .models import CustomUser, Exercise, Statistics, TrainingHistory
# Register your models here.

admin.site.register(CustomUser)
admin.site.register(Exercise)
admin.site.register(Statistics)
admin.site.register(TrainingHistory)