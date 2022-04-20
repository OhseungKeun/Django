from django.db import models

# Create your models here.
class sBoard(models.Model):
    제목 = models.CharField(max_length=255, blank=False, null=False)
    작성자 = models.CharField(max_length=255, null=False)
    내용 = models.TextField(null=False)
    작성일 = models.DateTimeField(null=False)


    def __str__(self):
        return self.제목