
from django.urls import path
from . import views

urlpatterns = [
    # path('', views.getRoutes, name="routes"),
    # path('exercises/', views.getExercises, name="exercises"),
    # path('exercises/<str:pk>', views.getExercise, name="exercise"),
    # path('exercises/create/', views.createExercise, name="exercise"),
    # path('exercises/update/<str:pk>', views.updateExercise, name="exercise"),
    # path('exercises/delete/<str:pk>', views.deleteExercise, name="exercise"),
    path('api/exercises/', views.exercise_list),
    path('api/exercises/<str:pk>/', views.exercise_details),
    path('api/statistics/', views.statistics_list),
    path('api/statistics/<str:pk>/', views.statistic_details),
    path('api/history/', views.history_list),
    path('api/history/<str:pk>/', views.history_details),
    path('api/users/', views.user_list),
    path('api/users/<str:pk>/', views.user_details),

    path('api/upper_part/', views.upper_part),
    path('api/lower_part/', views.lower_part),
    path('api/waist_part/', views.waist_part),
    path('api/stretching/', views.stretching),
    path('api/aerobic/', views.aerobic),
    path('api/newest_history/', views.newest_history),
]