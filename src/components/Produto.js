const Produto = `
  <div class="paragrafo">
      <div class="botao-reset">
          <button type="reset" class="reset" onclick="removerProduto(event)"></button>
      </div>
      <div class="products1">
        <label class="col-12">
          Produto
          <input type="text" name="produto" />
        </label>

        <label class="col-4">
          UND. Medida
          <select class="currency-select" name="unidade-medida">
              <option type="text" value="metros">2m²</option>
              <option type="text" value="metros">4m²</option>
          </select>
        </label>

        <label class="col-4">
          Quantidade em Estoque
          <input type="number" name="quantidade-em-estoque" />
        </label>

        <label class="col-4">
          Valor Unitário
          <input type="number" name="valor-unitario" />
        </label>
    </div>
  </div>
`;

function adicionarProduto() {
  document.querySelector('.products__list').insertAdjacentHTML('beforeend', Produto)
}

function removerProduto(evt) {
  evt.target.closest('.paragrafo').remove()
}

