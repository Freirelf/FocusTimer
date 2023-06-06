
export default document.body.onload = function hour(){
  let dayHour = document.querySelector('.dayHour')
  let date = new Date()
  let hour = date.getHours()

  if(hour >= 0 && hour < 12) {
    dayHour.innerHTML = `Olá, bom diaa!`
  }
  
  else if ( hour >= 12 && hour <= 18 ) {
    dayHour.innerHTML = `Olá, boa tardee!`
    document.body.style.backgroundImage = "url('/assets/entardecer.svg')"
  }

  else {
    dayHour.innerHTML = `Olá, boa noitee!`
    document.body.style.backgroundImage = "url('/assets/anoitecer.svg')"
  }
}