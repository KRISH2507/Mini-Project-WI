# fullstack-docker-app

Simple demo: React frontend + Express backend + Postgres database in Docker.

## Structure
- backend/ - Node/Express code
- frontend/ - React app
- db-data/ - mounted DB data (contains .gitkeep)
- docker-compose.yml
- .env

## Run
1. docker-compose up -d --build
2. Visit http://localhost:3000 to see the frontend
3. Backend API: http://localhost:5000/api

## Stop
docker-compose down -v
