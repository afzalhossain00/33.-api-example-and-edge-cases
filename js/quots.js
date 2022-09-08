const loadQuate = () => {
    fetch('https://api.kanye.rest/')
        .then(res => res.json())
        .then(data => displayQuates(data))
}

const displayQuates = quote => {
    const blockquote = document.getElementById('quote');
    blockquote.innerText = quote.quote
}
