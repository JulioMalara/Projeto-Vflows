function preencherProdutos() {
  const produtos = []

  document
    .querySelectorAll('.products .paragrafo')
    .forEach((paragrafo, index) => {
      const produto = {
        indice: index + 1,
        descricaoProduto: paragrafo.querySelector('[name="produto"]').value,
        unidadeMedida: paragrafo.querySelector('[name="unidade-medida"]').value,
        qtdeEstoque: paragrafo.querySelector('[name="quantidade-em-estoque"]').value,
        valorUnitario: paragrafo.querySelector('[name="valor-unitario"]').value,
      }

      produto.valorTotal = produto.valorUnitario * produto.qtdeEstoque

      produtos.push(produto)
    })

  return produtos
}

function preencherAnexos() {
  const anexos = []

  document
    .querySelectorAll('.anexos .paragrafo')
    .forEach((paragrafo, index) => {
      const anexo = {
        indice: index + 1,
        nomeArquivo: paragrafo.querySelector('[data-name]').dataset.name,
        blobArquivo: paragrafo.querySelector('[data-url]').dataset.url,
      }

      anexos.push(anexo)
    })

  return anexos
}

/*
  Requisitos
  (Exemplo de como deve ser o objeto)

  razaoSocial: 'Razao social',
  nomeFantasia: 'Nome Fantasia',
  cnpj: '123456',
  inscricaoEstadual: '123456',
  inscricaoMunicipal: '123456',
  nomeContato: 'Nome contato',
  telefoneContato: '+5562999999999999',
  emailContato: 'email@email.com',
  produtos: [
    {
      indice: 1,
      descricaoProduto: 'Descrição produto',
      unidadeMedida: 'unidadeMedida',
      qtdeEstoque: '123',
      valorUnitario: '1554.00',
      valorTotal: '2555.00'
    },
    {
      indice: 2,
      descricaoProduto: 'Descrição produto',
      unidadeMedida: 'unidadeMedida',
      qtdeEstoque: '123',
      valorUnitario: '1554.00',
      valorTotal: '2555.00'
    },
  ],
  anexos: [
    {
      indice: 1,
      nomeArquivo: 'iouahsiuahusihausihiahiuah',
      blobArquivo: 'iouahsiuahusihausihiahiuah'
    },
    {
      indice: 2,
      nomeArquivo: 'iouahsiuahusihausihiahiuah',
      blobArquivo: 'iouahsiuahusihausihiahiuah'
    },
  ]
*/


function salvarProdutosFornecedor() {
  const fornecedorEProdutosJSON = {
  }
  fornecedorEProdutosJSON.razaoSocial = document.getElementById('razao-social').value
  fornecedorEProdutosJSON.nomeFantasia = document.getElementById('nome-fantasia').value
  fornecedorEProdutosJSON.cnpj = document.getElementById('cnpj').value
  fornecedorEProdutosJSON.endereco = document.getElementById('endereco').value
  fornecedorEProdutosJSON.inscricaoEstadual = document.getElementById('inscricao-estadual').value
  fornecedorEProdutosJSON.inscricaoMunicipal = document.getElementById('inscricao-municipal').value
  fornecedorEProdutosJSON.nomeContato = document.getElementById('nome-contato').value
  fornecedorEProdutosJSON.telefoneContato = document.getElementById('telefone').value
  fornecedorEProdutosJSON.emailContato = document.getElementById('email').value

  fornecedorEProdutosJSON.produtos = preencherProdutos()
  fornecedorEProdutosJSON.anexos = preencherAnexos()

  console.log(fornecedorEProdutosJSON)

  if (!validarProduto(fornecedorEProdutosJSON)) return alert('Dados invalidos')

  alert('Dados validos')
}
