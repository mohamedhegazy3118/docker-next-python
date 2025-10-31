FROM python:3.12-slim

# Avoid .pyc files and ensure output flushes immediately
ENV PYTHONDONTWRITEBYTECODE=1 \
    PYTHONUNBUFFERED=1

WORKDIR /app
COPY app.py .

CMD ["python", "app.py"]
