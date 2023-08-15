from django.db import models

class Email(models.Model):
    sender = models.EmailField()
    subject = models.CharField(max_length=255)
    content = models.TextField()
    date_received = models.DateTimeField()
