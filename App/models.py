from tkinter.tix import NoteBook
from unicodedata import name
from django.db import models

class Patient(models.Model):
    
    GENDER =(
        ('M', 'M'),
        ('F', 'F'),
    )
    
    id = models.IntegerField(primary_key=True)
    name=models.CharField(max_length=40)
    phone=models.CharField(max_length=20)
    email=models.CharField(max_length=20)
    age=models.CharField(max_length=3)
    gender=models.CharField(max_length=1,null=True,choices=GENDER)
    note=models.TextField
    created_at=models.DateTimeField(auto_now_add=True)
    
    def __str__(self):
        return self.name



