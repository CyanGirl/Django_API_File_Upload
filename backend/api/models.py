from django.db import models

# Create your models here.
class APIs(models.Model):
    title=models.CharField(max_length=100)
    content=models.TextField()
    image=models.ImageField(upload_to='Posted_Images')

    def __str__(self):
        return self.title