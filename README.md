# csv-to-sql

Uma simples aplicação CLI que gera um arquivo com query insert .sql a partir de um arquivo .csv

## Como Usar

1. Faça a instalação:
  
  ```bash
  git clone https://github.com/Luis-60/csv-to-sql.git
  ```

2. Vá até o diretório da aplicação
   
  ```bash
  cd csv-to-sql
  ```

3. Dê permissão para a execução do script
   
  ```bash
  chmod +x script.js
  ```

4. Para utilizar chame o script usando node e com os seguintes parâmetros:
   
  ```bash
  node script.js [Local do Arquivo .csv (ex.: ~/Downloads/arquivos.csv)] [nome da tabela (ex.:arquivos]
  ```

Feito isso, ele irá gerar um .csv dentro da pasta csv-to-sql com o nome [nome da tabela].csv
