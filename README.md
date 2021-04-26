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
