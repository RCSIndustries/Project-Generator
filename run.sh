docker build -f Dockerfile -t john4064/code-catalyst-server . 
docker build -f Dockerfile.frontend -t john4064/code-catalyst-client .
docker run -p 4000:4000  -d john4064/code-catalyst-server
docker run -p 80:3000  -d john4064/code-catalyst-client