@echo off
echo "Running Tivo"
START /MIN java -jar resources\tivo-download-service-0.0.1-SNAPSHOT.jar
START /MIN ng serve --optimization --prod
