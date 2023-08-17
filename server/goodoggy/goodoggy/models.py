from django.db import models

class Feedback(models.Model):
    good = models.CharField(max_length=500)
    bad = models.CharField(max_length=500)
