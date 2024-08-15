const Anexo = (nomeAnexo, url) => `
  <div class="paragrafo">
      <div class="botao-reset">
          <button type="reset" class="reset" onclick="removerAnexo(event)"></button>
      </div>

      <button class="visualizar" type="button" data-name="${ nomeAnexo }" data-url="${ url }" onclick="openPreviewWindow('${ url }')"></button>

      ${ nomeAnexo }
  </div>
`;

function processFileInput(fileInput) {
    const file = fileInput.files[0];

    if (file) {
        const fileName = file.name;
        const fileUrl = URL.createObjectURL(file);

        return {
            name: fileName,
            previewUrl: fileUrl
        };
    } else {
        return {
            name: null,
            previewUrl: null
        };
    }
}

function openPreviewWindow(url) {
    const windowFeatures = "menubar=no,toolbar=no,location=no,status=no,resizable=yes,scrollbars=yes,width=800,height=600";
    window.open(url, '_blank', windowFeatures);
}

function adicionarAnexo() {
  const inputElement = document.querySelector('input[type="file"]');

  const parent = document.querySelector('.anexos__list')
  inputElement.addEventListener('change', () => {
      const fileData = processFileInput(inputElement);
      if (!fileData.name || !fileData.previewUrl) return

      parent.insertAdjacentHTML('beforeend', Anexo(fileData.name, fileData.previewUrl))
  }, { once: true });

 inputElement.click()
}

function removerAnexo(evt) {
  evt.target.closest('.paragrafo').remove()
}

