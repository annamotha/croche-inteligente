const desenharInspiracoes = document.querySelector('.inspiracaoFotos');
desenharInspiracoes.style.display = 'flex';
desenharInspiracoes.style.justifyContent = 'center';
desenharInspiracoes.style.gap = '20px'; 
desenharInspiracoes.style.padding = '0 50px'; 
desenharInspiracoes.style.flexWrap = 'wrap';

for (let i = 1; i <= 12; i++) {
    const divFoto = document.createElement('div');
    divFoto.classList.add('foto');
    const img = document.createElement('img');
    
    img.src = `/app/asset/imagem/bolsa.jpg`;
    img.alt = `Inspiração ${i}`;
    img.width = 300;
    img.style.borderRadius = '16px';

    divFoto.appendChild(img);
    desenharInspiracoes.appendChild(divFoto);
}