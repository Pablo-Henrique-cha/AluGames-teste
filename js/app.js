function alterarStatus(tag) {
 let botao = document.getElementById('game-' + tag);
 let imagen = botao.querySelector('div');
 let botaoTexo = botao.querySelector('a');
 if (imagen.classList.contains('dashboard__item__img--rented')) {
    //negativo
    console.log('negativo' + tag);
    imagen.classList.remove('dashboard__item__img--rented');
    botaoTexo.classList.remove('dashboard__item__button--return');
    botaoTexo.textContent = 'Alugar';
 } else {
    //positivo
    console.log('positivo' + tag);
   imagen.classList.add('dashboard__item__img--rented');
   botaoTexo.classList.add('dashboard__item__button--return');
   botaoTexo.textContent = 'Devolver';
 }
}