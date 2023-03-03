FROM python:3.9.13

#NÃO UTILIZAR ARQUIVOS .PYC
ENV PYTHONDONTWRITEBYTECODE 1

#LOGS DE ERROS
ENV PYTHONUNBUFFERED 1

WORKDIR  /bloxs

COPY . /bloxs/

RUN pip install -U pip
RUN pip install -r requirements.txt

CMD [ "python","manage.py","migrate" ]

# CMD ["python","manage.py","runserver","0.0.0.0:8000"]
