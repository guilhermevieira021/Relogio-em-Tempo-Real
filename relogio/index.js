const horas = document.getElementById('horas')
const minutos = document.getElementById('minutos')
const segundos = document.getElementById('segundos')

const relogio = setInterval(function time()  {
    let date = new Date()
    let hr = date.getHours()
    let min = date.getMinutes()
    let segunds = date.getSeconds()

   horas.textContent = hr
   minutos.textContent = min
   segundos.textContent = segunds
});