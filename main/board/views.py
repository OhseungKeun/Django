from django.shortcuts import render, redirect, HttpResponse
from board.models import Board
from datetime import datetime
from django.core.paginator import Paginator, EmptyPage

# Create your views here.
def index(request, page):
    if (request.method=='GET'):
        if(str(request.user) != 'AnonymousUser'):
            boardTable = Board.objects.all()
            paging = Paginator(boardTable, 2)
            try:
                context = {
                "boardTable" : paging.page(page),
                }
            except EmptyPage:
                context = {
                    'boardEmpty': paging.page(paging.num_pages)
                }
            return render(request, 'board/index.html', context)
        else:
            return redirect('login')

def detail(request, boardId):
    if(request.method=='GET'):
        if(str(request.user) != 'AnonymousUser'):
            boardInfo = Board.objects.get(id = boardId)
            boardInfo.save()
            try:
                context = {
                    "boardInfo": boardInfo,
                }
            except:
                context = {
                    "boardInfo": boardInfo
                }
            return render(request, 'board/detail.html', context)
        else:
            return redirect('login')

def update(request, boardId):
    boardInfo = Board.objects.get(id = boardId)

    if(request.user.username == ''):
        return redirect('login')
    elif(request.user.username != boardInfo.작성자):        
        message = '''
            <script>
                alert('접근할 수 없는 URL 입니다.');
                document.location.href="/board/page/1";
            </scrip>
        '''
        return HttpResponse(message)
    if(request.method == 'GET'):
        try:
            context = {
                "boardInfo":boardInfo,
            }
        except:
            context = {
                "boardInfo":boardInfo,
            }
        return render(request, 'board/update.html', context)
    else :
        boardInfo.제목 = request.POST.get('title')
        boardInfo.내용 = request.POST.get('context')
        boardInfo.save()

        return redirect('BD:D', boardId)

def delete(request, boardId):
    Board.objects.get(id=boardId).delete()

    message = '<script> alert("' + boardId + '번 글을 삭제 했습니다."); document.location.href="/board/page/1"; </script>'
    return HttpResponse(message)

def add(request):
    if(request.method == 'POST'):
        if(request.user.username == ""):
            return redirect('login')
        
        boardTable = Board()
        boardTable.제목 = request.POST.get('title')
        boardTable.내용 = request.POST.get('context')
        boardTable.작성자 = request.user.username
        boardTable.작성일 = datetime.now()
        boardTable.save()

        return redirect('BD:D', boardTable.id)
    else :
        if(request.user.username == ''):
            return redirect('login')

        return render(request, 'board/add.html')


def boardDel(request, boardId, filename):
    return redirect('BD:U', boardId)