document.getElementById("enviar").addEventListener("click", function(event){
    event.preventDefault();
    const nome = document.querySelector('input[name="nome"]').value;
    const altura = document.querySelector('input[name="altura"]').value;
    const largura = document.querySelector('input[name="largura"]').value;  
    const imagemInput = document.getElementById('imagem');
    const imagens = imagemInput.files;
    console.log("Nome:", nome);
    console.log("Altura:", altura);
    console.log("Largura:", largura);
    console.log("Imagens selecionadas:", imagens);
    alert("Receita criada com sucesso!");
    window.location.href = "./visualizarReceita.html";
});