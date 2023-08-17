from django import forms
from . import models
from django.forms import ModelForm

class FdbForm(forms.Form):
    good = forms.CharField(max_length=500)
    bad = forms.CharField(max_length=500)

class BoardForm(ModelForm):
    class Meta:
        model = models.Board
        fields = ['title', 'content', 'writer']