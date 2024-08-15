# Desafio VFlows: Cadastro de Fornecedores e Produtos

## Visão Geral
Este repositório contém o código fonte para um aplicativo web que permite cadastrar fornecedores, seus produtos e anexos. O projeto foi desenvolvido como parte de um desafio técnico para a VFlows.

## Estrutura do Projeto
* **index.html:** Arquivo HTML principal, contendo a estrutura básica da página e as chamadas para os scripts JavaScript.
* **style.css:** Arquivo CSS responsável pelo estilo visual da aplicação.
* **src/** Pasta contendo os arquivos JavaScript:
    * **actions/** Pasta contendo ações genéricas da aplicação
	    * **pesquisaCep.js:** Realiza a consulta de CEP utilizando a API do ViaCEP e preenche automaticamente os campos de endereço.
	    * **salvarProduto.js:** Coleta os dados do formulário, valida os dados e salva as informações do fornecedor e produtos em um formato JSON (ou outro formato definido).
	 * **components/** Pasta de componentes do projeto
	    * **Anexo.js:** Cria e gerencia os elementos HTML para adicionar e remover anexos.
	    * **Produto.js:** Cria e gerencia os elementos HTML para adicionar e remover produtos.
    * **validations/** Pasta para funções de validação
	    * **validarProduto.js:** Realiza a validação dos dados do fornecedor antes de salvar.

## Funcionamento
1. **Cadastro de Fornecedor:** O usuário preenche os campos do formulário com as informações do fornecedor, incluindo razão social, CNPJ, endereço, contato, etc.
2. **Cadastro de Produtos:** O usuário clica no botão "Adicionar Produto" para adicionar novos produtos. Cada produto possui campos para descrição, unidade de medida, quantidade em estoque e valor unitário.
3. **Upload de Anexos:** O usuário pode adicionar anexos clicando no botão "Adicionar Anexo" e selecionando os arquivos desejados.
4. **Salvar:** Ao clicar no botão "Salvar Fornecedor", os dados do fornecedor, produtos e anexos são coletados e validados. Se os dados forem válidos, eles são salvos (a forma de salvar não está especificada no código fornecido).

## Tecnologias Utilizadas
* **HTML:** Estrutura da página.
* **CSS:** Estilização da página.
* **JavaScript:** Lógica da aplicação, manipulação do DOM e interação com o usuário.
* **Bootstrap:** Biblioteca de componentes CSS.

## Instruções para Execução
1. **Clonar o repositório:**
   ```bash
   git clone https://github.com/JulioMalara/Projeto-Vflows.git
2. Navegue para o diretório do projeto. 
3. Abra o projeto no arquivo `index.html` em seu navedor.
