#Cd into client and server for each build and tag
docker build -f Dockerfile -t john4064/project-gen:backend . 
docker build -f Dockerfile.prod -t john4064/project-gen:frontend .                            
#RUN IMAGE to test
docker run -p 4000:4000  -d john4064/project-gen:backend
docker run -p 80:80 -d john4064/project-gen:frontend

#EXAMPLE DOCKER PUSH
docker tag be51b01f7fef23242f39eaf7edd2c348b890800a6713d13696e895f49bfedc4d john4064/project-gen:backend
docker push john4064/project-gen:backend 

#Then Just pull and run with the follow run commands
--platform linux/amd64