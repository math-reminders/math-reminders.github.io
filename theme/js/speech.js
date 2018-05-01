$(function() {
    var utterance = new SpeechSynthesisUtterance();
utterance.text = "Добро пожаловать на проект 'Математические заметки'";
window.speechSynthesis.speak(utterance);
}
    );