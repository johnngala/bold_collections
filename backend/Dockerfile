FROM python:3.9
RUN mkdir /code
WORKDIR /code
ADD requirements.txt /code/
RUN pip install -r requirements.txt
ADD . /code/
RUN python3 manage.py makemigrations listings
RUN python3 manage.py migrate
CMD python3 manage.py runserver 0.0.0.0:$PORT