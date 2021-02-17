let country = "Russia";
let date2 = 2020;
console.log(date2)


// получаем данные о лиге
const options5 = {
    method: 'GET',
    url: `https://api-football-v1.p.rapidapi.com/v2/leagues/country/${country}/${date2}`,
    headers: {
        'x-rapidapi-key': 'f570367049msh92d23c8fda1a817p1b03cfjsne8957d93c6e0',
        'x-rapidapi-host': 'api-football-v1.p.rapidapi.com'
    }
};

axios.request(options5).then(function (response) {
    console.log(response.data);


    let arrayLeague = response.data.api.leagues.filter(el => el.name == "Football National League");
    // Добавляем данные в лигу

    $('.logoLeague').append(`<div><img src = "${arrayLeague[0].logo}"/></div>`);
    $('.start_end').append(`<h5>Начало сезона:</h5> <p>${arrayLeague[0].season_start}</p> <h5>Конец сезона:</h5> <p>${arrayLeague[0].season_end}</p>`)


    arrayLeague.forEach(function (el) {
    //    получаем турнирную таблицу
        if (el.name == "Football National League") {
            getMatches(el.league_id, arrayLeague[0].season_start, arrayLeague[0].season_end);
        }
    });


}).catch(function (error) {
    console.error(error);
});