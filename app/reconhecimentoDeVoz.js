window.SpeechRecognition = window.SpeechRecognition || 
webkitSpeechRecognition;

const recognition = new SpeechRecognition();

recognition.lang = 'pt-Br'
recognition.start()

recognition.addEventListener('result', onSpeak)

function onSpeak(event){
  console.log(event.results[0][0].transcript)
}