let date1 = 2020;



const options = {
    method: 'GET',
    url: 'https://api-football-v1.p.rapidapi.com/v2/countries',
    headers: {
        'x-rapidapi-key': 'f570367049msh92d23c8fda1a817p1b03cfjsne8957d93c6e0',
        'x-rapidapi-host': 'api-football-v1.p.rapidapi.com'
    }
};

axios.request(options).then(function (response) {
    console.log(response.data);
    let arrayCountries = response.data.api.countries.filter(el =>
        el.country == "England" || el.country == "France" || el.country == "Spain" ||
        el.country == "Austria" || el.country == "Belarus" || el.country == "Belgium" ||
        el.country == "Croatia" || el.country == "Czech-Republic" || el.country == "Denmark" ||
        el.country == "Germany" || el.country == "Greece" || el.country == "Italy" ||
        el.country == "Poland" || el.country == "Portugal" || el.country == "Russia" ||
        el.country == "Serbia" || el.country == "Sweden" || el.country == "Netherlands"
        || el.country == "Bulgaria" || el.country == "Hungary" || el.country == "Israel"
        || el.country == "Norway" || el.country == "Switzerland" || el.country == "Turkey"
        || el.country == "Ukraine" || el.country == "World"
    )

    arrayCountries.forEach(function (el) {
        getCountries(el.country, el.flag, el.code);
        // getLeague(el.country);
    })
}).catch(function (error) {
    console.error(error);
});

function getCountries(nameCountry, flag, code) {
    let card = null;
    let buttonChevron = `<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-play" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" d="M10.804 8L5 4.633v6.734L10.804 8zm.792-.696a.802.802 0 0 1 0 1.392l-6.363 3.692C4.713 12.69 4 12.345 4 11.692V4.308c0-.653.713-.998 1.233-.696l6.363 3.692z"/>
  </svg>`
    let nameRus;
    if (nameCountry == "Israel") {
        card = "Israel";
        nameRus = "Израиль"
    }
    if (nameCountry == "Serbia") {
        card = "Serbia";
        nameRus = "Сербия"
    }
    if (nameCountry == "Sweden") {
        card = "Sweden";
        nameRus = "Швеция"
    }

    if (nameCountry == "Switzerland") {
        card = "Switzerland";
        nameRus = "Швейцария"
    }
    if (nameCountry == "Turkey") {
        card = "Turkey";
        nameRus = "Турция"
    }
    if (nameCountry == "Spain") {
        card = "Spain";
        nameRus = "Испания"
    }
    if (nameCountry == "Bulgaria") {
        card = "Bulgaria";
        nameRus = "Болгария"
    }
    if (nameCountry == "Austria") {
        card = "Austria";
        nameRus = "Австрия"
    }
    if (nameCountry == "Belarus") {
        card = "Belarus";
        nameRus = "Беларусь"
    }
    if (nameCountry == "Belgium") {
        card = "Belgium";
        nameRus = "Бельгия"
    }
    if (nameCountry == "Croatia") {
        card = "Croatia";
        nameRus = "Хорватия"
    }
    if (nameCountry == "Czech-Republic") {
        card = "Czech-Republic";
        nameRus = "Чехия"
    }
    if (nameCountry == "Denmark") {
        card = "Denmark";
        nameRus = "Дания"
    }
    if (nameCountry == "England") {
        card = "England";
        nameRus = "Англия"
    }
    if (nameCountry == "Finland") {
        card = "Finland";
        nameRus = "Финляндия"
    }
    if (nameCountry == "France") {
        card = "France";
        nameRus = "Франция"
    }
    if (nameCountry == "Germany") {
        card = "Germany";
        nameRus = "Германия"
    }
    if (nameCountry == "Greece") {
        card = "Greece";
        nameRus = "Греция"
    }
    if (nameCountry == "Hungary") {
        card = "Hungary";
        nameRus = "Венгрия"
    }
    if (nameCountry == "Italy") {
        card = "Italy";
        nameRus = "Италия"
    }
    if (nameCountry == "Netherlands") {
        card = "Netherlands";
        nameRus = "Нидерланды"
    }
    if (nameCountry == "Norway") {
        card = "Norway";
        nameRus = "Норвегия"
    }
    if (nameCountry == "Poland") {
        card = "Poland";
        nameRus = "Польша"
    }
    if (nameCountry == "Portugal") {
        card = "Portugal";
        nameRus = "Португалия"
    }
    if (nameCountry == "Russia") {
        card = "Russia";
        nameRus = "Россия"
    }
    if (nameCountry == "Ukraine") {
        card = "Ukraine";
        nameRus = "Украина"
    }
    if (nameCountry == "World") {
        card = "World";
        nameRus = "Мир"
    }

    $('.countries').append(`<div class = "countries_item"><p>
<div class = "countries_item"><img class = "flag" src = "${flag}"/><h5>${nameRus}</h5></div>
  <button class="btn btn_country btn-light" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample${code}" aria-expanded="false" aria-controls="collapseExample${code}">
  <div class = "chevron" >${buttonChevron}</div>
  </button>
  </div>
</p>
<div class="collapse" id="collapseExample${code}">
  <div class="card card-body ${card}">
  
  </div>
</div>`)
    $('.Austria').html(`<div class = "league"><img class = "logoLeague" src ="https://media.api-sports.io/football/leagues/484.png"/><a href = "./austriaFrauenliga.html">Frauenliga</a></div>`);
    $('.Belarus').html(`<div class = "league"><img class = "logoLeague" src ="https://media.api-sports.io/football/leagues/116.png"/><a href = "./belarusLeague.html">Высшая лига</a></div>`);
    $('.Belgium').html(`<div class = "league"><img class = "logoLeague" src ="https://media.api-sports.io/football/leagues/144.png"/><a href = "./belgiumJupiler.html">Jupiler Pro League</a></div>`);
    $('.Bulgaria').html(`<div class = "league"><img class = "logoLeague" src ="https://media.api-sports.io/football/leagues/172.png"/><a href = "./bulgariaAPFG.html">A PFG</a></div>`);
    $('.Croatia').html(`<div class = "league"><img class = "logoLeague" src ="https://media.api-sports.io/football/leagues/210.png"/><a href = "./croatiaPRVA.html">Prva HNL</a></div>`);
    $('.Czech-Republic').html(`<div class = "league"><img class = "logoLeague" src ="https://media.api-sports.io/football/leagues/345.png"/><a href = "./czechLiga.html">Czech Liga</a></div>`);
    $('.Denmark').html(`<div class = "league"><img class = "logoLeague" src ="https://media.api-sports.io/football/leagues/119.png"/><a href = "./denmarkSuperligian.html">Superligaen</a></div>`);
    $('.France').html(`<div class = "league"><img class = "logoLeague" src ="https://media.api-sports.io/football/leagues/61.png"/><a href = "./ligue1France.html">Ligue 1</a></div>
<div class = "league"><img class = "logoLeague" src ="https://media.api-sports.io/football/leagues/62.png"/><a href = "./ligue2_france.html">Ligue 2</a></div>`);
    $('.England').html(`<div class = "league"><img class = "logoLeague" src ="https://media.api-sports.io/football/leagues/39.png"/><a href = "./premierLeagueEngland.html">Premier League</a></div>
<div class = "league"><img class = "logoLeague" src ="https://media.api-sports.io/football/leagues/40.png"/><a href = "./championship.html">Championship</a></div>
<div class = "league"><img class = "logoLeague" src ="https://media.api-sports.io/football/leagues/41.png"/><a href = "./leagueOneEng.html">League One</a></div>`);
    $('.Hungary').html(`<div class = "league"><img class = "logoLeague" src ="https://media.api-sports.io/football/leagues/271.png"/><a href = "./hungaryNB.html">NB I</a></div>`);
    $('.Germany').html(`<div class = "league"><img class = "logoLeague" src ="https://media.api-sports.io/football/leagues/78.png"/><a href = "./bundesligaGermany.html">Bundesliga 1</a></div>
<div class = "league"><img class = "logoLeague" src ="https://media.api-sports.io/football/leagues/79.png"/><a href = "./bundesliga2.html">Bundesliga 2</a></div>`);
    $('.Greece').html(`<div class = "league"><img class = "logoLeague" src ="https://media.api-sports.io/football/leagues/197.png"/><a href = "./greeceSuperLeague.html">Super League</a></div>`);
    $('.Italy').html(`<div class = "league"><img class = "logoLeague" src ="https://media.api-sports.io/football/leagues/135.png"/><a href = "./seriaAItaly.html">Serie A</a></div>
<div class = "league"><img class = "logoLeague" src ="https://media.api-sports.io/football/leagues/136.png"/><a href = "./serieBitaly.html">Serie B</a></div>`);
    $('.Norway').html(`<div class = "league"><img class = "logoLeague" src ="https://media.api-sports.io/football/leagues/103.png"/><a href = "./norwayLegue.html">Eliteserien</a></div>`);
    $('.Netherlands').html(`<div class = "league"><img class = "logoLeague" src ="https://media.api-sports.io/football/leagues/88.png"/><a href = "./eredivisie.html">Eredivisie</a></div>
<div class = "league"><img class = "logoLeague" src ="https://media.api-sports.io/football/leagues/89.png"/><a href = "./eersteDivisie.html">Eerste Divisie</a></div>`);
    $('.Poland').html(`<div class = "league"><img class = "logoLeague" src ="https://media.api-sports.io/football/leagues/106.png"/><a href = "./ekstraklasa.html">Ekstraklasa</a></div>`);
    $('.Portugal').html(`<div class = "league"><img class = "logoLeague" src ="https://media.api-sports.io/football/leagues/94.png"/><a href = "./primeiraPortugal.html">Primeira Liga</a></div>`);
    $('.Russia').html(`<div class = "league"><img class = "logoLeague" src ="https://media.api-sports.io/football/leagues/235.png"/><a href = "./russiaPremierLeague.html">Premier League</a></div>
<div class = "league"><img class = "logoLeague" src ="https://media.api-sports.io/football/leagues/236.png"/><a href = "./FNL.html">Football National League</a></div>`);
    $('.Serbia').html(`<div class = "league"><img class = "logoLeague" src ="https://media.api-sports.io/football/leagues/287.png"/><a href = "./serbiaLiga.html">Prva Liga</a></div>`);
    $('.Sweden').html(`<div class = "league"><img class = "logoLeague" src ="https://media.api-sports.io/football/leagues/113.png"/><a href = "./swedenLiga.html">Allsvenskan</a></div>`);
    $('.Switzerland').html(`<div class = "league"><img class = "logoLeague" src ="https://media.api-sports.io/football/leagues/207.png"/><a href = "./switzerlandLeague.html">Super League</a></div>`);
    $('.World').html(`<div class = "league"><img class = "logoLeague" src ="https://media.api-sports.io/football/leagues/2.png"/><a href = "./premierLeagueEngland.html">Лига чемпионов UEFA</a></div>
<div class = "league"><img class = "logoLeague" src ="https://media.api-sports.io/football/leagues/3.png"/><a href = "./premierLeagueEngland.html">Лига европы UEFA</a></div>`);
    $('.Ukraine').html(`<div class = "league"><img class = "logoLeague" src ="https://media.api-sports.io/football/leagues/333.png"/><a href = "./ukraineLeague.html">Premier League</a></div>`);
    $('.Spain').html(`<div class = "league"><img class = "logoLeague" src ="https://media.api-sports.io/football/leagues/140.png"/><a href = "./primeraLigaSpain.html">Ла-лига</a></div>
<div class = "league"><img class = "logoLeague" src ="https://media.api-sports.io/football/leagues/141.png"/><a href = "./segundaSpain.html">Segunda Division</a></div>`);
    $('.Turkey').html(`<div class = "league"><img class = "logoLeague" src ="https://media.api-sports.io/football/leagues/203.png"/><a href = "./turkeyLig.html">"Super Lig"</a></div>`);



}


// function getLeague(country) {
//     const options = {
//         method: 'GET',
//         url: `https://api-football-v1.p.rapidapi.com/v2/leagues/country/${country}/${date1}`,
//         headers: {
//           'x-rapidapi-key': 'f570367049msh92d23c8fda1a817p1b03cfjsne8957d93c6e0',
//           'x-rapidapi-host': 'api-football-v1.p.rapidapi.com'
//         }
//       };

//       axios.request(options).then(function (response) {
//           console.log(response.data);
//         let arrayLeagueAusria = response.data.api.leagues.filter(el => el.name == "Frauenliga" && el.country == "Austria")
//         let arrayLeagueBelgium = response.data.api.leagues.filter(el => el.name == "Jupiler Pro League" && el.country == "Belgium")
//         let arrayLeagueBelarus = response.data.api.leagues.filter(el => el.name == "Vysshaya Liga" && el.country == "Belarus") 
//         let arrayLeagueBulgaria = response.data.api.leagues.filter(el => el.name == "A PFG" && el.country == "Bulgaria") 
//         let arrayLeagueCzech_Republic = response.data.api.leagues.filter(el => el.name == "Czech Liga" && el.country == "Czech-Republic") 
//         let arrayLeagueCroatia = response.data.api.leagues.filter(el => el.name == "Prva HNL" && el.country == "Croatia") 
//         let arrayLeagueDenmark = response.data.api.leagues.filter(el => el.name == "Superligaen" && el.country == "Denmark") 
//         let arrayLeagueGermany = response.data.api.leagues.filter(el => el.name == "Bundesliga 1" && el.country == "Germany" || el.name == "Bundesliga 2" && el.country == "Germany")
//         let arrayLeagueGreece = response.data.api.leagues.filter(el => el.name == "Super League" && el.country == "Greece") 
//         let arrayLeagueItaly = response.data.api.leagues.filter(el => el.name == "Serie A" && el.country == "Italy" || el.name == "Serie B" && el.country == "Italy" || el.name == "Serie C" && el.country == "Italy"  ) 
//         let arrayLeagueFrance = response.data.api.leagues.filter(el => el.name == "Ligue 1" && el.country == "France" || el.name == "Ligue 2" && el.country == "France");
//          let arrayLeagueEngland = response.data.api.leagues.filter(el => el.name == "Premier League" && el.country == "England" || el.name == "Championship" && el.country == "England" || el.name == "League One" && el.country == "England" || el.name == "National League" && el.country == "England");
//          let arrayLeagueIsrael = response.data.api.leagues.filter(el => el.name == "Ligat ha'Al" && el.country == "Israel") 
//          let arrayLeagueNetherland = response.data.api.leagues.filter(el => el.name == "Eredivisie" && el.country == "Netherlands" || el.name == "Eerste Divisie" && el.country == "Netherlands") 
//          let arrayLeagueNorway = response.data.api.leagues.filter(el => el.name == "Eliteserien" && el.country == "Norway") 
//          let arrayLeagueHungary = response.data.api.leagues.filter(el => el.name == "NB I" && el.country == "Hungary")
//          let arrayLeaguePortugal = response.data.api.leagues.filter(el => el.name == "Primeira Liga" && el.country == "Portugal" ||  el.name == "Liga de Honra" && el.country == "Portugal")
//          let arrayLeaguePoland = response.data.api.leagues.filter(el => el.name == "Ekstraklasa" && el.country == "Poland")
//          let arrayLeagueTurkey = response.data.api.leagues.filter(el => el.name == "Super Lig" && el.country == "Turkey")
//          let arrayLeagueSerbia = response.data.api.leagues.filter(el => el.name == "Super Liga" && el.country == "Serbia")
//          let arrayLeagueSwitzerland = response.data.api.leagues.filter(el => el.name == "Super League" && el.country == "Switzerland")
//          let arrayLeagueSpain = response.data.api.leagues.filter(el => el.name == "Primera Division" && el.country == "Spain" || el.name == "Segunda Division" && el.country == "Spain")
//          let arrayLeagueSweden = response.data.api.leagues.filter(el => el.name == "Allsvenskan" && el.country == "Sweden")
//          let arrayLeagueRussia = response.data.api.leagues.filter(el => el.name == "Premier League" && el.country == "Russia" || el.name == "Football National League" && el.country == "Russia")
//          let arrayLeagueUkraine = response.data.api.leagues.filter(el => el.name == "Premier League" && el.country == "Ukraine")
//          let arrayLeagueWorld = response.data.api.leagues.filter(el => el.name == "UEFA Europa League" && el.country == "World" || el.name == "UEFA Champions League" && el.country == "World" || el.name == "Euro Championship" && el.country == "World" ||  el.name == "UEFA Nations League" && el.country == "World")

//          function postLeagues() {

//             arrayLeagueWorld.forEach(function(el) {
//                 let leagueWorldName = el.name;
//                 let leagueWorldLogo = el.logo;
//                 $('.World').append(`<div class = "league"><img class = "logoLeague" src ="${leagueWorldLogo}"/><a href = "./premierLeagueEngland.html">${leagueWorldName}</a></div>`);                                                                                                                             
//                });

//             arrayLeagueUkraine.forEach(function(el) {
//                 let leagueUkraineName = el.name;
//                 let leagueUkraineLogo = el.logo;
//                 $('.Ukraine').append(`<div class = "league"><img class = "logoLeague" src ="${leagueUkraineLogo}"/><a href = "./premierLeagueEngland.html">${leagueUkraineName}</a></div>`);                                                                                                                             
//                });

//             arrayLeagueRussia.forEach(function(el) {
//                 let leagueRussiaName = el.name;
//                 let leagueRussiaLogo = el.logo;
//                 $('.Russia').append(`<div class = "league"><img class = "logoLeague" src ="${leagueRussiaLogo}"/><a href = "./premierLeagueEngland.html">${leagueRussiaName}</a></div>`);                                                                                                                             
//                });

//             arrayLeagueSweden.forEach(function(el) {
//                 let leagueSwedenName = el.name;
//                 let leagueSwedenLogo = el.logo;
//                 $('.Sweden').append(`<div class = "league"><img class = "logoLeague" src ="${leagueSwedenLogo}"/><a href = "./premierLeagueEngland.html">${leagueSwedenName}</a></div>`);                                                                                                                             
//                });

//             arrayLeagueSpain.forEach(function(el) {
//                 let leagueSpainName = el.name;
//                 let leagueSpainLogo = el.logo;
//                 $('.Spain').append(`<div class = "league"><img class = "logoLeague" src ="${leagueSpainLogo}"/><a href = "./primeraLigaSpain.html">${leagueSpainName}</a></div>`);                                                                                                                             
//                });

//             arrayLeagueSwitzerland.forEach(function(el) {
//                 let leagueSwitzerlandName = el.name;
//                 let leagueSwitzerlandLogo = el.logo;
//                 $('.Switzerland').append(`<div class = "league"><img class = "logoLeague" src ="${leagueSwitzerlandLogo}"/><a href = "./premierLeagueEngland.html">${leagueSwitzerlandName}</a></div>`);                                                                                                                             
//                });

//             arrayLeagueSerbia.forEach(function(el) {
//                 let leagueSerbiaName = el.name;
//                 let leagueSerbiaLogo = el.logo;
//                 $('.Serbia').append(`<div class = "league"><img class = "logoLeague" src ="${leagueSerbiaLogo}"/><a href = "./premierLeagueEngland.html">${leagueSerbiaName}</a></div>`);                                                                                                                             
//                });

//             arrayLeagueTurkey.forEach(function(el) {
//                 let leagueTurkeyName = el.name;
//                 let leagueTurkeyLogo = el.logo;
//                 $('.Turkey').append(`<div class = "league"><img class = "logoLeague" src ="${leagueTurkeyLogo}"/><a href = "./premierLeagueEngland.html">${leagueTurkeyName}</a></div>`);                                                                                                                             
//                });

//             arrayLeaguePoland.forEach(function(el) {
//                 let leaguePolandlName = el.name;
//                 let leaguePolandLogo = el.logo;
//                 $('.Poland').append(`<div class = "league"><img class = "logoLeague" src ="${leaguePolandLogo}"/><a href = "./premierLeagueEngland.html">${leaguePolandlName}</a></div>`);                                                                                                                             
//                });

//             arrayLeaguePortugal.forEach(function(el) {
//                 let leaguePortugalName = el.name;
//                 let leaguePortugalLogo = el.logo;
//                 $('.Portugal').append(`<div class = "league"><img class = "logoLeague" src ="${leaguePortugalLogo}"/><a href = "./premierLeagueEngland.html">${leaguePortugalName}</a></div>`);                                                                                                                             
//                });

//             arrayLeagueHungary.forEach(function(el) {
//                 let leagueHungaryName = el.name;
//                 let leagueHungaryLogo = el.logo;
//                 $('.Hungary').append(`<div class = "league"><img class = "logoLeague" src ="${leagueHungaryLogo}"/><a href = "./premierLeagueEngland.html">${leagueHungaryName}</a></div>`);                                                                                                                             
//                });

//             arrayLeagueNorway.forEach(function(el) {
//                 let leagueNorwayName = el.name;
//                 let leagueNorwayLogo = el.logo;
//                 $('.Norway').append(`<div class = "league"><img class = "logoLeague" src ="${leagueNorwayLogo}"/><a href = "./premierLeagueEngland.html">${leagueNorwayName}</a></div>`);                                                                                                                             
//                });

//             arrayLeagueNetherland.forEach(function(el) {
//                 let leagueNetherlandName = el.name;
//                 let leagueNetherlandLogo = el.logo;
//                 $('.Netherlands').append(`<div class = "league"><img class = "logoLeague" src ="${leagueNetherlandLogo}"/><a href = "./premierLeagueEngland.html">${leagueNetherlandName}</a></div>`);                                                                                                                             
//                });

//             arrayLeagueIsrael.forEach(function(el) {
//                 let leagueIsraelName = el.name;
//                 let leagueIsraelLogo = el.logo;
//                 $('.Israel').append(`<div class = "league"><img class = "logoLeague" src ="${leagueIsraelLogo}"/><a href = "./premierLeagueEngland.html">${leagueIsraelName}</a></div>`);                                                                                                                             
//                });

//             arrayLeagueItaly.forEach(function(el) {
//                 let leagueItalyName = el.name;
//                 let leagueItalyLogo = el.logo;
//                 $('.Italy').append(`<div class = "league"><img class = "logoLeague" src ="${leagueItalyLogo}"/><a href = "./seriaAItaly.html">${leagueItalyName}</a></div>`);                                                                                                                             
//                });

//             arrayLeagueGreece.forEach(function(el) {
//                 let leagueGreeceName = el.name;
//                 let leagueGreeceLogo = el.logo;
//                 $('.Greece').append(`<div class = "league"><img class = "logoLeague" src ="${leagueGreeceLogo}"/><a href = "./premierLeagueEngland.html">${leagueGreeceName}</a></div>`);                                                                                                                             
//                });

//             arrayLeagueGermany.forEach(function(el) {
//                 let leagueGermanyName = el.name;
//                 let leagueGermanyLogo = el.logo;
//                 $('.Germany').append(`<div class = "league"><img class = "logoLeague" src ="${leagueGermanyLogo}"/><a href = "./bundesligaGermany.html">${leagueGermanyName}</a></div>`);                                                                                                                             
//                });

//             arrayLeagueDenmark.forEach(function(el) {
//                 let leagueDenmarkName = el.name;
//                 let leagueDenmarkLogo = el.logo;
//                 $('.Denmark').append(`<div class = "league"><img class = "logoLeague" src ="${leagueDenmarkLogo}"/><a href = "./premierLeagueEngland.html">${leagueDenmarkName}</a></div>`);                                                                                                                             
//                });

//             arrayLeagueCroatia.forEach(function(el) {
//                 let leagueCroatiaName = el.name;
//                 let leagueCroatiaLogo = el.logo;
//                 $('.Croatia').append(`<div class = "league"><img class = "logoLeague" src ="${leagueCroatiaLogo}"/><a href = "./premierLeagueEngland.html">${leagueCroatiaName}</a></div>`);                                                                                                                             
//                });

//             arrayLeagueCzech_Republic.forEach(function(el) {
//                 let leagueCzechiaName = el.name;
//                 let leagueCzechiaLogo = el.logo;
//                 $('.Czech-Republic').append(`<div class = "league"><img class = "logoLeague" src ="${leagueCzechiaLogo}"/><a href = "./premierLeagueEngland.html">${leagueCzechiaName}</a></div>`);                                                                                                                             
//                });

//             arrayLeagueBulgaria.forEach(function(el) {
//                 let leagueBulgariaName = el.name;
//                 let leagueBulgariaLogo = el.logo;
//                 $('.Bulgaria').append(`<div class = "league"><img class = "logoLeague" src ="${leagueBulgariaLogo}"/><a href = "./premierLeagueEngland.html">${leagueBulgariaName}</a></div>`);                                                                                                                             
//                });

//             arrayLeagueBelarus.forEach(function(el) {
//                 let leagueBelarusName = el.name;
//                 let leagueBelarusLogo = el.logo;
//                 $('.Belarus').append(`<div class = "league"><img class = "logoLeague" src ="${leagueBelarusLogo}"/><a href = "./premierLeagueEngland.html">${leagueBelarusName}</a></div>`);                                                                                                                             
//                });

//             arrayLeagueBelgium.forEach(function(el) {
//                 let leagueBelgiumName = el.name;
//                 let leagueBelgiumLogo = el.logo;
//                 $('.Belgium').append(`<div class = "league"><img class = "logoLeague" src ="${leagueBelgiumLogo}"/><a href = "./premierLeagueEngland.html">${leagueBelgiumName}</a></div>`);                                                                                                                             
//                });

//             arrayLeagueAusria.forEach(function(el) {
//                 let leagueAvstraliaName = el.name;
//                 let leagueAvstraliaLogo = el.logo;
//                 $('.Austria').append(`<div class = "league"><img class = "logoLeague" src ="${leagueAvstraliaLogo}"/><a href = "./premierLeagueEngland.html">${leagueAvstraliaName}</a></div>`);                                                                                                                             
//                });

//              arrayLeagueEngland.forEach(function(el) {
//                  let leagueEngName = el.name;
//                  let leagueEngLogo = el.logo;
//                  $('.England').append(`<div class = "league"><img class = "logoLeague" src ="${leagueEngLogo}"/><a href = "./premierLeagueEngland.html">${leagueEngName}</a></div>`);                                                                                                                             
//                 });
//              arrayLeagueFrance.forEach(function(el) {
//                 let leagueFranceName = el.name;
//                 let leagueFranceLogo = el.logo;
//                 $('.France').append(`<div class = "league"><img class = "logoLeague" src ="${leagueFranceLogo}"/><a href = "./ligue1France.html">${leagueFranceName}</a></div>`);                                                                                                                             
//             })
//          }
//          postLeagues()
//       }).catch(function (error) {
//           console.error(error);
//       });
// }

