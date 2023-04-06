# A script to package the distro
# don't forget to run ng-build to build the angular project and for it to produce the distro files into the ./dist folder
# Run the command on the cmd shell:
# powershell -executionpolicy bypass -File .\package-app.ps1

# delete the output folder if it exists
if (Test-Path .\tmp) {
    Remove-Item -Recurse -Force .\tmp
  }

# create folder
New-Item -ItemType Directory -path ./tmp -Force
# copy dist/{app-name} into folder
Copy-Item -Path .\dist\* -Destination .\tmp\dist\tivo-download-service-web -recurse -Force
# copy the server.js file into folder
Copy-Item -Path .\server.js -Destination .\tmp
# copy the node runtime into folder
Copy-Item -Path C:\Users\rm_82\Documents\runtime\node\node-15.0.1-server -Destination .\tmp\runtime -recurse -Force
# copy executable script
Copy-Item -Path .\resources\scripts\run.bat -Destination .\tmp
# create release folder
New-Item -ItemType Directory -path ./release -Force
# zip the contents
Compress-Archive -Path .\tmp\* -DestinationPath ./release/tivo-download-service-web.zip -Force