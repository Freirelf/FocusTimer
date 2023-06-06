import { 
  buttonPlay, 
  buttonPause,
  buttonSet,
  buttonStop,
  minutesDisplay,
  secondsDisplay
} from "./elements.js";
import  Timer from "./timer.js";
import Controls from "./controls.js";
import Events from "./events.js"
import Sound from "./sounds.js"
import hour from "./hour.js";


const controls = Controls({
  buttonPause, 
  buttonPlay, 
  buttonSet,
  buttonStop
}) 

const timer = Timer({
  minutesDisplay,
  secondsDisplay,
  resetControls: controls.reset
})

hour()

const sound = Sound()

Events({controls, timer, sound})
