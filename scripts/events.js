import { 
  buttonPlay,
  buttonPause,
  buttonSet,
  buttonStop,
  buttonSoundOn,
  buttonSoundOff
 } from "./elements.js"

export default function ({controls, timer, sound}) {
 
  buttonPlay.addEventListener('click', function(){
    controls.play()
    timer.countDown()
    sound.buttonPress()
  })

  buttonPause.addEventListener('click', function(){
    controls.pause()
    timer.hold()
    sound.buttonPress()
  })

  buttonStop.addEventListener('click', function () {
    controls.reset()
    timer.reset()
    sound.buttonPress()
  })

  buttonSet.addEventListener('click', function (){
    let newMinutes = controls.getMinutes()

    if (!newMinutes) {
      timer.reset()
      return
    }

    timer.updateDisplay(newMinutes, 0)
    timer.updateMinutes(newMinutes)
    sound.buttonPress()
  })

  buttonSoundOff.addEventListener('click', function() {
    buttonSoundOn.classList.remove('hide')
    buttonSoundOff.classList.add('hide')
    sound.bgAudio.play()
  })
  
  buttonSoundOn.addEventListener('click', function() {
    buttonSoundOn.classList.add('hide')
    buttonSoundOff.classList.remove('hide')
    sound.bgAudio.pause()
  })


}