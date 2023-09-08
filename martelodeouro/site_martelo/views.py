from django.shortcuts import render

def minha_view(request):
    # Outro código da visualização
    return render(request, 'index.html')
