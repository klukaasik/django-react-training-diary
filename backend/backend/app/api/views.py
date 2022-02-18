import django.db
from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import CustomUser, Exercise, Statistics, TrainingHistory
from .serializers import ExerciseSerializer, StatisticsSerializer, TrainingHistorySerializer, CustomUserSerializer
from rest_framework import status
from rest_framework import viewsets
from rest_framework.parsers import JSONParser
from django.db import connection
from django.views.decorators.csrf import csrf_exempt

from django.db import connection

# Create your views here.


# @csrf_exempt
@api_view(['GET', 'POST'])
def exercise_list(request):
    if request.method == 'GET':
        exercises = Exercise.objects.raw("SELECT * FROM api_exercise")
        print(exercises)
        serializer = ExerciseSerializer(exercises, many=True)
        print(serializer)
        return Response(serializer.data)

    elif request.method == 'POST':
        # data = JSONParser().parse(request)
        serializer = ExerciseSerializer(data=request.data)
        # serializer = ExerciseSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# @csrf_exempt
@api_view(['GET', 'PUT', 'DELETE'])
def exercise_details(request, pk):
    try:

        # exercise = Exercise.objects.raw("SELECT * FROM api_exercise WHERE id = {}".format(pk))[0]
        exercise = Exercise.objects.raw("SELECT * FROM api_exercise WHERE id = %s", [pk])[0]

    except:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = ExerciseSerializer(exercise, many=False)
        return Response(serializer.data)

    elif request.method == 'PUT':
        # data = JSONParser().parse(request)
        serializer = ExerciseSerializer(exercise, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        exercise.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

@api_view(['GET', 'POST'])
def statistics_list(request):
    # get all articles
    if request.method == 'GET':
        statistics = Statistics.objects.raw("SELECT * FROM api_statistics")
        serializer = StatisticsSerializer(statistics, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = StatisticsSerializer(data=request.data, many=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# @csrf_exempt
@api_view(['GET', 'PUT', 'DELETE'])
def statistic_details(request, pk):
    try:
        statistic = Statistics.objects.raw("SELECT * FROM api_statistics WHERE id = %s", [pk])[0]

    except:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = StatisticsSerializer(statistic)
        return Response(serializer.data)

    elif request.method == 'PUT':
        # data = JSONParser().parse(request)
        serializer = StatisticsSerializer(statistic, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        statistic.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

@api_view(['GET', 'POST'])
def history_list(request):
    # get all articles
    if request.method == 'GET':
        # history = TrainingHistory.objects.all()
        history = TrainingHistory.objects.raw("SELECT * FROM api_traininghistory")
        print(history)
        # history = TrainingHistory.objects.raw("select t.id, t.name, t.user_id, s.name from api_traininghistory t inner join api_traininghistory_statistics ts inner join api_statistics s where ts.statistics_id = s.id and t.id = ts.traininghistory_id order by t.id")
        serializer = TrainingHistorySerializer(history, many=True)
        print(serializer)
        return Response(serializer.data)


    elif request.method == 'POST':
        serializer = TrainingHistorySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# @csrf_exempt
@api_view(['GET', 'PUT', 'DELETE'])
def history_details(request, pk):
    try:
        history = TrainingHistory.objects.get(pk=pk)
        # history = TrainingHistory.objects.raw("SELECT * FROM api_traininghistory WHERE id = {}".format(pk))
        print(history)

    except:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = TrainingHistorySerializer(history)
        return Response(serializer.data)

    elif request.method == 'PUT':
        # data = JSONParser().parse(request)
        serializer = TrainingHistorySerializer(history, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        history.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

@api_view(['GET', 'POST'])
def user_list(request):
    # get all articles
    if request.method == 'GET':
        # articles = Exercise.objects.all()
        users = CustomUser.objects.raw("SELECT * FROM api_customuser")
        print(users)
        serializer = CustomUserSerializer(users, many=True)
        print(serializer)
        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = CustomUserSerializer(data=request.data)
        print(serializer)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# @csrf_exempt
@api_view(['GET', 'PUT', 'DELETE'])
def user_details(request, pk):
    try:
        user = CustomUser.objects.raw("SELECT * FROM api_customuser WHERE id = %s", [pk])[0]
    except:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = CustomUserSerializer(user, many=False)
        return Response(serializer.data)

    elif request.method == 'PUT':
        # data = JSONParser().parse(request)
        serializer = CustomUserSerializer(user, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        user.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

@api_view(['GET', 'POST'])
def upper_part(request):
    # get all articles
    if request.method == 'GET':
        # articles = Exercise.objects.all()
        exercises = Exercise.objects.raw("SELECT * FROM api_exercise WHERE type = 'upper_part'")
        # print(exercises)
        serializer = ExerciseSerializer(exercises, many=True)
        # print(serializer)
        return Response(serializer.data)

    elif request.method == 'POST':
        # data = JSONParser().parse(request)
        serializer = ExerciseSerializer(data=request.data)
        # serializer = ExerciseSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET', 'POST'])
def lower_part(request):
    # get all articles
    if request.method == 'GET':
        # articles = Exercise.objects.all()
        exercises = Exercise.objects.raw("SELECT * FROM api_exercise WHERE type = 'lower_part'")
        # print(exercises)
        serializer = ExerciseSerializer(exercises, many=True)
        # print(serializer)
        return Response(serializer.data)

    elif request.method == 'POST':
        # data = JSONParser().parse(request)
        serializer = ExerciseSerializer(data=request.data)
        # serializer = ExerciseSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET', 'POST'])
def waist_part(request):
    # get all articles
    if request.method == 'GET':
        # articles = Exercise.objects.all()
        exercises = Exercise.objects.raw("SELECT * FROM api_exercise WHERE type = 'waist'")
        # print(exercises)
        serializer = ExerciseSerializer(exercises, many=True)
        # print(serializer)
        return Response(serializer.data)

    elif request.method == 'POST':
        # data = JSONParser().parse(request)
        serializer = ExerciseSerializer(data=request.data)
        # serializer = ExerciseSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET', 'POST'])
def stretching(request):
    # get all articles
    if request.method == 'GET':
        # articles = Exercise.objects.all()
        exercises = Exercise.objects.raw("SELECT * FROM api_exercise WHERE type = 'stretching'")
        # print(exercises)
        serializer = ExerciseSerializer(exercises, many=True)
        # print(serializer)
        return Response(serializer.data)

    elif request.method == 'POST':
        # data = JSONParser().parse(request)
        serializer = ExerciseSerializer(data=request.data)
        # serializer = ExerciseSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET', 'POST'])
def aerobic(request):
    # get all articles
    if request.method == 'GET':
        # articles = Exercise.objects.all()
        exercises = Exercise.objects.raw("SELECT * FROM api_exercise WHERE type = 'aerobic'")
        # print(exercises)
        serializer = ExerciseSerializer(exercises, many=True)
        # print(serializer)
        return Response(serializer.data)

    elif request.method == 'POST':
        # data = JSONParser().parse(request)
        serializer = ExerciseSerializer(data=request.data)
        # serializer = ExerciseSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET', 'POST'])
def aerobic(request):
    # get all articles
    if request.method == 'GET':
        # articles = Exercise.objects.all()
        exercises = Exercise.objects.raw("SELECT * FROM api_exercise WHERE type = 'aerobic'")
        # print(exercises)
        serializer = ExerciseSerializer(exercises, many=True)
        # print(serializer)
        return Response(serializer.data)

    elif request.method == 'POST':
        # data = JSONParser().parse(request)
        serializer = ExerciseSerializer(data=request.data)
        # serializer = ExerciseSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET', 'POST'])
def newest_history(request):
    # get all articles
    if request.method == 'GET':
        # history = TrainingHistory.objects.all()
        history = TrainingHistory.objects.raw("SELECT * FROM api_traininghistory order by id desc limit 1")
        print(history)
        # history = TrainingHistory.objects.raw("select t.id, t.name, t.user_id, s.name from api_traininghistory t inner join api_traininghistory_statistics ts inner join api_statistics s where ts.statistics_id = s.id and t.id = ts.traininghistory_id order by t.id")
        serializer = TrainingHistorySerializer(history, many=True)
        print(serializer)
        return Response(serializer.data)


    elif request.method == 'POST':
        serializer = TrainingHistorySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)