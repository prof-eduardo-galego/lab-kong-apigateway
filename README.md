# LAb Kong e Konga API Gateway

Laboratório para criação de ambiente do Kong (API Gateway) e Konga (UI).

Para rodar este lab:

1. Instale o Docker Compose na sua máquina

2. Execute os comandos:

```sh
docker compose build
docker compose up
``` 

3. Abra o navegador no seguinte endereço: http://localhost:1337/

4. Configure um usuário admin e uma conexão para `http://kong:8001/`

5. Cadastre um novo service chamado `ms-example` apontando para `http://ms-example:3000/`

6. Dentro do servidor `ms-example`, cadastre uma nova rota com o path `/example`

7. Abra o navegador no seguinte endereço: http://localhost:8000/example

Para encerrar o lab, finalize o prompt de comandos.
