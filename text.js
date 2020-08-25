const textarea = document.querySelector('[name="text"]')
const result = document.querySelector('.result')
const filterInputs = Array.from(document.querySelectorAll('[name="filter]'))

// filters

const filters = {
    sarcastic(letter, index) {
        if (index % 2) {
            return letter.toUpperCase()
        } else {
            return letter.toLowerCase()
        }
    },
    funky() {
        
    },
    unable() {
        
    },
};

function transformText(text){
    const filter = filterInputs).find(input => input.checked).value
    //take text and loop over each letter
    const mod = Array.from(text).map(filters.sarcastic);
    console.log(mod)
    result.textContent = mod.join('')
}




textarea.addEventListener('input',e => transformText(e.target.value))
