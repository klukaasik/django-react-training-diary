from rest_framework.serializers import ModelSerializer
from rest_framework import serializers
from .models import Exercise, Statistics, TrainingHistory, CustomUser
from django.contrib.auth.models import User
from rest_framework.authtoken.views import Token


class ExerciseSerializer(ModelSerializer):
    class Meta:
        model = Exercise
        fields = '__all__'

class StatisticsSerializer(ModelSerializer):
    history_name = serializers.PrimaryKeyRelatedField(read_only=True, source='history.name')
    exercise_name = serializers.PrimaryKeyRelatedField(read_only=True, source='exercises.name')
    exercise_type = serializers.PrimaryKeyRelatedField(read_only=True, source='exercises.type')
    class Meta:
        model = Statistics
        fields = '__all__'

class TrainingHistorySerializer(ModelSerializer):
    # statistics_name = serializers.PrimaryKeyRelatedField(read_only=True, source='statistics.name')
    # statistics_name = serializers.ManyRelatedField(read_only=True, source='statistics.name')
    # statistics_name = serializers.Field(source='statistics.name')
    username = serializers.PrimaryKeyRelatedField(read_only=True, source='user.username')
    class Meta:
        model = TrainingHistory
        fields = '__all__'


    # def to_representation(self, instance):
    #     rep = super(TrainingHistorySerializer, self).to_representation(instance)
    #     rep['statistics'] = instance.statistics.name
    #     return rep

    # def to_representation(self, instance):
    #     rep = serializers.RelatedField.to_representation(self, instance)
    #     rep['statistics'] = instance.statistics.name
    #     return rep


class CustomUserSerializer(ModelSerializer):
    class Meta:
        model = CustomUser
        fields = ['id', 'username', 'password', 'height', 'weight', 'is_superuser']
        # fields = '__all__'

        extra_kwargs = {'password':{
            'write_only':True,
            'required':True
        }}

    def create(self, validated_data):
        user = CustomUser.objects.create_user(**validated_data)
        Token.objects.create(user=user)
        return user