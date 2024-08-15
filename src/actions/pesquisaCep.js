async function pesquisaCEP(cep) {
    const apiUrl = `https://viacep.com.br/ws/${cep}/json/`;

    try {
        const response = await fetch(apiUrl);

        if (!response.ok) {
            throw new Error(`Error: ${response.statusText}`);
        }

        const data = await response.json();

        if (data.erro) {
            throw new Error('CEP nao encontrado.');
        }

        console.log(`Endereco: ${data.logradouro}, ${data.bairro}, ${data.localidade} - ${data.uf}`);
        return data;
    } catch (error) {
        console.error(error.message);
    }
}

