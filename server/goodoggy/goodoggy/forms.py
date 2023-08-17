from django import forms


class FdbForm(forms.Form):
    good = forms.CharField(max_length=500)
    bad = forms.CharField(max_length=500)