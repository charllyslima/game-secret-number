if ("SpeechRecognition" in window || "webkitSpeechRecognition" in window) {
  // speech recognition API supported
} else {
  // speech recognition API not supported
  alert("Speech recognition API not supported	")
}

const elementAttempt = document.getElementById("attempt")

const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition

const recognition = new SpeechRecognition()

recognition.lang = "pt-BR"
recognition.start()
recognition.addEventListener("result", onSpeak)

function onSpeak(e) {
  const speak = e.results[0][0].transcript
  console.log(speak)
  showSpeak(speak)
}

function showSpeak(speak) {
  elementAttempt.innerHTML = `
        <div>Você disse: </div>
        <span class="box">${speak}</span>
    `
}
