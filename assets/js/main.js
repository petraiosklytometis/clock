// Bellow, a Senior's code:
setInterval(function(){
const h1 = document.querySelector('.container h1'); 
const date = new Date();
const option = {
  dateStyle: 'full',
  timeStyle: 'medium'
};

h1.innerHTML = date.toLocaleString('pt-BR', option);
}, 1000)