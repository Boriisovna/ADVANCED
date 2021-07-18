const buttonGetInfoCharacter = document.querySelector('#info_button');
const charactersContainer = document.querySelector('.characters_container');
const buttonShowPlanets = document.querySelector('#show_planets');
const planetsContainer = document.querySelector('.planets_container');
const nextPage = document.getElementById('next');
const previousPage = document.getElementById('previous');



async function getInfoAboutFilmCharacter(url) {

    return fetch(url)
        .then(response => response.json())
        .then(data => {
            return data.characters;
        })
        .then(character => {
            charactersContainer.innerHTML = '';
            planetsContainer.innerHTML = '';
            return character.map(person => getCharacterInfo(person));
        });
}


async function getCharacterInfo(url) {
    return fetch(url)
        .then(response => response.json())
        .then(info => {
            return (charactersContainer.innerHTML += `<div class="character"><p> ${info.name}</p><img src="images/${info.name}.jpg"/> 
			<p>Born: ${info.birth_year}</p>
			<p>${info.gender} gender</p></div>`);
        });
}


async function getAllPlanets(url) {
    return fetch(url)
        .then(response => response.json())
        .then(data => {
            return data.results
        })
        .then(results => {
            charactersContainer.innerHTML = '';
            planetsContainer.innerHTML = '';
            return results.map(planet => planetsContainer.innerHTML += `<p>${planet.name}</p>`)
        })
}


buttonGetInfoCharacter.addEventListener('click', () => {
    getInfoAboutFilmCharacter(`https://swapi.dev/api/films/2`);
});

buttonShowPlanets.addEventListener('click', () => {
    getAllPlanets('https://swapi.dev/api/planets/')
})


let page = 1;
nextPage.addEventListener('click', e => {
	page += 1;
    if(page > 6) page = 6;
	getAllPlanets(`https://swapi.dev/api/planets/?page=${page}`);
	
});

previousPage.addEventListener('click', () => {
	page -= 1;
    if(page < 1) page = 1;
	getAllPlanets(`https://swapi.dev/api/planets/?page=${page}`);
});