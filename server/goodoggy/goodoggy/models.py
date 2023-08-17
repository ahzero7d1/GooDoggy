from django.db import models

class Feedback(models.Model):
    good = models.CharField(max_length=500)
    bad = models.CharField(max_length=500)

class Board(models.Model):
    title = models.CharField(max_length=20, null=True)
    content = models.TextField()
    writer = models.CharField(max_length=20, null=True)
