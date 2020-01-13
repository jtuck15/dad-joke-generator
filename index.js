const jokeEl = document.getElementById('joke');
const get_joke = 
document.getElementById('get_joke');

get_joke.addEventListener('click', generateJoke);

generateJoke();

async function generateJoke() {
    // call the API
    const jokeRes = await fetch('https://icanhazdadjoke.com/', {
        headers: {
            'Accept': 'application/json'
        }
    });

    const joke = await jokeRes.json();

    console.log(joke);

    // add the new joke
    jokeEl.innerHTML = joke.joke;
}

// SOCIAL PANEL JS
var floating_btn = document.querySelector('.floating-btn');
var close_btn = document.querySelector('.close-btn');
var social_panel_container = document.querySelector('.social-panel-container');

floating_btn.addEventListener('click', function () {
    social_panel_container.classList.toggle('visible')
});

close_btn.addEventListener('click', function () {
    social_panel_container.classList.remove('visible')
});