let speech = new SpeechSynthesisUtterance();
let voices = [];
let voiceselect = document.querySelector("select");

window.speechSynthesis.onvoiceschanged = () => {
    voices = speechSynthesis.getVoices();

    for (let i = 0; i < voices.length; i++) {
        const element = voices[i];
        const option = new Option(element.name, i);
        voiceselect.appendChild(option);
    }
};

voiceselect.addEventListener("change", () => {
    speech.voice = voices[voiceselect.options.selectedIndex];
});

document.querySelector("button").addEventListener("click", () => {
    speech.text = document.querySelector("#textInput").value;
    window.speechSynthesis.speak(speech);
});

document.querySelector("#textInput").addEventListener("keydown", (event) => {
    if (event.key == "Enter") {
        speech.text = document.querySelector("#textInput").value;
        window.speechSynthesis.speak(speech);
    }
});
