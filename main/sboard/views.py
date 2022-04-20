from django.shortcuts import render, redirect, HttpResponse
from sboard.models import sBoard
from datetime import datetime
from django.core.paginator import Paginator, EmptyPage

# Create your views here.
def sindex(request, page):
    if (request.method=='GET'):
        if(str(request.user) != 'AnonymousUser'):
            sboardTable = sBoard.objects.all()

            paging = Paginator(sboardTable, 2)
            try:
                context = {
                    "sboardTable" : paging.page(page),
                }
            except EmptyPage:
                context = {
                    'sboardEmpty': paging.page(paging.num_pages)
                }
            return render(request, 'sboard/index.html', context)
        else:
            return redirect('login')

def sdetail(request, sboardId):
    if (request.method=='GET'):
        if(str(request.user) != 'AnonymousUser'):
            sboardInfo = sBoard.objects.get(id = sboardId)
            sboardInfo.save()
            try:
                context = {
                    "sboardInfo": sboardInfo,
                }
            except:
                context = {
                    "sboardInfo": sboardInfo
                }
            return render(request, 'sboard/detail.html', context)
        else:
            return redirect('login')

def supdate(request, sboardId):
    sboardInfo = sBoard.objects.get(id = sboardId)

    if(request.user.username == ''):
        return redirect('login')
    elif(request.user.username != sboardInfo.작성자):        
        message = '''
            <script>
                alert('접근할 수 없는 URL 입니다.');
                document.location.href="/sboard/page/1";
            </scrip>
        '''
        return HttpResponse(message)
    if(request.method == 'GET'):
        try:
            
            context = {
                "sboardInfo":sboardInfo,
            }
        except:
            context = {
                "sboardInfo":sboardInfo,
            }
        return render(request, 'sboard/update.html', context)
    else :
        sboardInfo.제목 = request.POST.get('title')
        sboardInfo.내용 = request.POST.get('context')
        sboardInfo.save()

        return redirect('SB:SD', sboardId)

def sdelete(request, sboardId):
    sBoard.objects.get(id=sboardId).delete()

    message = '<script> alert("' + sboardId + '번 글을 삭제 했습니다."); document.location.href="/sboard/page/1"; </script>'
    return HttpResponse(message)

def sadd(request):
    if(request.method == 'POST'):
        if(request.user.username == ""):
            return redirect('login')
        
        sboardTable = sBoard()
        sboardTable.제목 = request.POST.get('title')
        sboardTable.내용 = request.POST.get('context')
        sboardTable.작성자 = request.user.username
        sboardTable.작성일 = datetime.now()
        sboardTable.save()

        return redirect('SB:SD', sboardTable.id)
    else :
        if(request.user.username == ''):
            return redirect('login')

        return render(request, 'sboard/add.html')


def boardDel(request, sboardId, filename):
    return redirect('SB:SU', sboardId)