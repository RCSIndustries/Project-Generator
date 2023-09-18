docker build -f Dockerfile -t john4064/code-catalyst-server . 
docker build -f Dockerfile.frontend -t john4064/code-catalyst-client .
docker run -p 4000:4000  -d john4064/code-catalyst-server
docker run -p 80:3000  -d john4064/code-catalyst-client


#EXAMPLE DOCKER PUSH
docker tag be51b01f7fef23242f39eaf7edd2c348b890800a6713d13696e895f49bfedc4d john4064/project-gen:backend
docker push john4064/project-gen:backend