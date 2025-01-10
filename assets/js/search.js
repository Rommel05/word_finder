window.onload = () => {
    let text = document.getElementById("text");
    let form = document.getElementById("form");
    let inputWord = document.getElementById("inputWord");

    inputWord.addEventListener("keypress", (e) => {
        let value = inputWord.value;

        if (value && value.trim() != '' && e.key == 'Enter') {  
            e.preventDefault(); 
            let regex = new RegExp(value, 'gi');
            text.innerHTML = text.textContent.replace(regex, '<span class="highlight">$&</span>')
        }
    })
}