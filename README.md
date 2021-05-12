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

## Deploy

```
$ aws ecr get-login-password --region us-east-1 | docker login --username AWS --password-stdin <account-id>.dkr.ecr.us-east-1.amazonaws.com
$ docker tag warren-frontend:latest <account-id>.dkr.ecr.us-east-1.amazonaws.com/rdi-frontend-ecs:latest
$ docker push <account-id>.dkr.ecr.us-east-1.amazonaws.com/rdi-frontend-ecs:latest
```
