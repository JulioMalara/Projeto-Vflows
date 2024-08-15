/*
  Requisitos

  Razão Social: obrigatório
  Nome Fantasia: obrigatório
  CNPJ: obrigatório
  Inscrição Estadual: opcional
  Inscrição Municipal: opcional
  Endereço: obrigatório (deve ser preenchido automaticamente usando a API via CEP)
  Nome da pessoa de contato: obrigatório
  Telefone: obrigatório
  E-mail: obrigatório
*/
const validarProduto = (fornecedorEProdutosJSON) => {
    return (
      fornecedorEProdutosJSON.razaoSocial != '' &&
      fornecedorEProdutosJSON.nomeFantasia != '' &&
      fornecedorEProdutosJSON.cnpj != '' &&
      fornecedorEProdutosJSON.endereco != '' &&
      fornecedorEProdutosJSON.telefoneContato != '' &&
      fornecedorEProdutosJSON.nomeContato != '' &&
      fornecedorEProdutosJSON.emailContato != ''
    )
}
