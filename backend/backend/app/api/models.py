from django.db import models
from django.contrib.auth.models import AbstractUser
from django.core.validators import MinValueValidator, MaxValueValidator

# Create your models here.

class CustomUser(AbstractUser):
    weight = models.DecimalField(null=True, blank=True, decimal_places=1, max_digits=4, validators=[MinValueValidator(5.0), MaxValueValidator(500.0)])
    height = models.DecimalField(null=True, blank=True, decimal_places=1, max_digits=4, validators=[MinValueValidator(10.0), MaxValueValidator(300.0)])

class Exercise(models.Model):
    name = models.CharField(max_length=200)
    description = models.TextField()
    type = models.CharField(max_length=100, blank=True)  # typ cwiczenia - stretching, aerobic, strength?
    body_part = models.CharField(max_length=100, blank=True)  # upper,lower,waist
    imagepath = models.TextField(blank=True)

    def __str__(self):
        return self.name


class TrainingHistory(models.Model):
    name = models.CharField(max_length=200)
    user = models.ForeignKey(CustomUser, on_delete=models.DO_NOTHING, null=False)
    # statistics = models.ManyToManyField(Statistics, related_name='statistics', on_delete=models.CASCADE)
    # statistics = models.ForeignKey(Statistics, related_name='stat_name', blank=False, null=True, on_delete=models.DO_NOTHING)
    # statistics = models.ForeignKey(Statistics, on_delete=models.SET_NULL, null=False)
    date = models.DateField()
    start_time = models.TimeField()
    end_time = models.TimeField()

    def __str__(self):
        return self.name
    #
    # @property
    # def category_name(self):
    #     return self.statistics.name


class Statistics(models.Model):
    name = models.CharField(max_length=200, null=True)
    exercises = models.ForeignKey(Exercise, on_delete=models.DO_NOTHING, null=True)
    history = models.ForeignKey(TrainingHistory, on_delete=models.CASCADE, null=True)
    # exercises = models.ManyToManyField(Exercise, related_name='exercises', blank=True)
    sets = models.IntegerField(null=True, blank=True, validators=[MinValueValidator(0)])
    reps = models.IntegerField(null=True, blank=True, validators=[MinValueValidator(0)])
    weight = models.DecimalField(null=True, blank=True, decimal_places=2, max_digits=5, validators=[MinValueValidator(0.25)])
    record = models.DecimalField(null=True, blank=True, decimal_places=2, max_digits=5)


    def __str__(self):
        return self.name



