# Como rodar o projeto

O projeto está organizado em containers. Para rodar o projeto em ambiente de desenvolvimento:

1. Clonar o projeto:
```
git clone http://tools.ages.pucrs.br/radar-do-investidor/radardoinvestidor-frontend.git
```
2. Entrar no diretório do projeto:
```
$ cd radardoinvestidor-frontend
$ docker build -t warren-frontend .
$ docker run --name warren-frontend -p 3000:3000 warren-frontend

```
3. Arquivo .env.local:
```
Adicionar um arquivo na raiz do projeto com o nome ".env.local".
O arquivo deve ter como conteúdo:
$ NEXT_PUBLIC_API_URL=https://api.radar.warren.com.br/api

```

## Deploy

```
Build image:
    $ docker build -t warren-frontend .

Configure credentials:
    $ aws configure

Register the image in ECR (trocar <account-id> pelo id da conta AWS):
    $ aws ecr get-login-password --region us-east-1 | docker login --username AWS --password-stdin <account-id>.dkr.ecr.us-east-1.amazonaws.com
    $ docker tag warren-frontend:latest <account-id>.dkr.ecr.us-east-1.amazonaws.com/rdi-frontend-ecs:latest
    $ docker push <account-id>.dkr.ecr.us-east-1.amazonaws.com/rdi-frontend-ecs:latest

Stop ECS task to generate a new one with the latest version:
    - Acesse o serviço ECS
    - Acesse o cluster: rdi-frontend-cluster
    - Vá para tab > tasks
    - Puase (stop) as tasks relacionadas a task definition "rdi-frontend-task"    
```
