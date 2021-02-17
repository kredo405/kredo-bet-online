$('.matches').hide();

let matchestUrl = document.querySelector('.matchesUrl');
let homeUrl = document.querySelector('.homeUrl');

function HomeShow() {
    $('.home').show();
    $('.homeUrl').attr('class', 'nav-link active homeUrl');
    $('.matchesUrl').attr('class', 'nav-link matchesUrl');
    $('.matches').hide();

}
homeUrl.addEventListener('click', HomeShow);

function matchesShow() {
    $('.matches').show();
    $('.matchesUrl').attr('class', 'nav-link active matchesUrl');
    $('.homeUrl').attr('class', 'nav-link homeUrl');
    $('.home').hide();
}
matchestUrl.addEventListener('click', matchesShow);

let date = new Date().toISOString().slice(0, 10);


function getMatches(league_id, seasonStart, seassonEnd) {
    const options = {
        method: 'GET',
        url: `https://api-football-v1.p.rapidapi.com/v2/fixtures/date/${date}`,
        params: { timezone: 'Europe/Minsk' },
        headers: {
            'x-rapidapi-key': 'f570367049msh92d23c8fda1a817p1b03cfjsne8957d93c6e0',
            'x-rapidapi-host': 'api-football-v1.p.rapidapi.com'
        }
    };

    axios.request(options).then(function (response) {
        console.log(response.data);

        let matchesOfData = response.data.api.fixtures.filter(el =>
            el.league.name == "Premier League" && el.league.country == "Ukraine"
        )
        matchesOfData.forEach(function (el) {
            addMatches(el.fixture_id, el.awayTeam.logo, el.homeTeam.logo,
                el.awayTeam.team_name, el.homeTeam.team_name);
        })
    }).catch(function (error) {
        console.error(error);
    });
}

function addMatches(el, awayLogo, homeLogo, awayName, homeName) {

    $('.matches').append(` <div class = 'matchesTeams'>
    <img class = "logo_team" src="${homeLogo}"/><p class = "team_name">${homeName}</p> - <p class = "team_name">${awayName}</p><img class = "logo_team" src="${awayLogo}"/>
  <button class="btn btn_matches" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample${el}" aria-expanded="false" aria-controls="collapseExample${el}">
  <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-play" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M10.804 8L5 4.633v6.734L10.804 8zm.792-.696a.802.802 0 0 1 0 1.392l-6.363 3.692C4.713 12.69 4 12.345 4 11.692V4.308c0-.653.713-.998 1.233-.696l6.363 3.692z"/>
</svg>
  </button>

</div>
<div class="collapse" id="collapseExample${el}">
<div class="card card-body colapse${el}">
<div class = "bets_page${el}">
<ul class="nav nav-tabs">
<li class="nav-item">
<a class="nav-link statisticUrl${el} active" href="#">Статистика</a>
</li>
<li class="nav-item">
<a class="nav-link calculationUrl${el}" href="#">Расчет</a>
</li>
</ul>
<div class = "statistic${el}">

</div>
<div class = "calculation${el}">
<ul class="nav nav-tabs">
<li class="nav-item">
<a class="nav-link xgUrl${el} active" href="#">По XG</a>
</li>
<li class="nav-item">
<a class="nav-link goalUrl${el}" href="#">По голам</a>
</li>
</ul>
<div class = "xg${el}">
<div class="row">

<h3>Расчет по XG</h3>
<h4>XG</h4>
<div class = "col-6">
<div class="calc_item">
    <p>1 команда</p>
    <input type="number" class="XGTeamHome_input${el}" type="text">
</div>  
</div>
<div class = "col-6">
<div class="calc_item">
    <p>2 команда</p>
    <input type="number" class="XGTeamAway_input${el}" type="text">
</div>
</div>

<h4>XGa</h4>
<div class = "col-6">
<div class="calc_item">
    <p>1 команда</p>
    <input type="number" type="number" class="XGATeamHome_input${el}" type="text">
</div>
</div>
<div class ="col-6">
<div class="calc_item">
    <p>2 командa</p>
    <input type="number" class="XGATeamAway_input${el}" type="text">
</div>
</div>

<h4>Владение мячем Poss</h4>
<div class="col-6">  
<div class="calc_item">
    <p>1 командa</p>
    <input type="number" class="possessionTeamHome_input${el}" type="text">
</div>
</div> 
<div class="col-6">  
<div class="calc_item">
    <p>2 командa</p>
    <input type="number" class="possessionTeamAway_input${el}" type="text">
</div>
</div> 
<h4>Владение мячем соперников</h4>
<div class="col-6">  
<div class="calc_item">
    <p>1 команда</p>
    <input type="number" class="possessionAgainstTeamHome_input${el}" type="text">
</div>
</div>
<div class="col-6">  
<div class="calc_item">
    <p>2 команда</p>
    <input type="number" class="possessionAgainstTeamAway_input${el}" type="text">
</div>
</div>

<h4>gls90</h4>
<div class="col-6">  
<div class="calc_item">
    <p>1 командa</p>
    <input type="number" class="gls90TeamHome_input${el}" type="text">
</div>
</div> 
<div class="col-6">  
<div class="calc_item">
    <p>2 командa</p>
    <input type="number" class="gls90TeamAway_input${el}" type="text">
</div>
</div> 
<h4>gls90 соперников</h4>
<div class="col-6">  
<div class="calc_item">
    <p>1 команда</p>
    <input type="number" class="gls90AgainstTeamHome_input${el}" type="text">
</div>
</div>
<div class="col-6">  
<div class="calc_item">
    <p>2 команда</p>
    <input type="number" class="gls90AgainstTeamAway_input${el}" type="text">
</div>
</div>

    <h4>Удары(Все) Sh</h4>
    <div class="col-6">     
        <div class="calc_item">
            <p>1 команда(удары)</p>
            <input type="number" class="shotsTeamHome_input${el}" type="text">
        </div>
    </div>  
    <div class="col-6">     
        <div class="calc_item">
            <p>2 команда(удары)</p>
            <input type="number" class="shotsTeamAway_input${el}" type="text">
        </div>
    </div>  
    <h4>Удары соперников(Все) Sh</h4>
    <div class="col-6">     
        <div class="calc_item">
            <p>1 команда</p>
            <input type="number" type="number" class="shotsAgainstTeamHome_input${el}" type="text">
        </div>
    </div> 
    <div class="col-6">  
        <div class="calc_item">
            <p>2 командa</p>
            <input type="number" class="shotsAgainstTeamAway_input${el}" type="text">
        </div>
    </div> 

    <h4>Удары(ср.) SH/90</h4>
    <div class="col-6">     
        <div class="calc_item">
            <p>1 команда(удары)</p>
            <input type="number" class="shotsAvgTeamHome_input${el}" type="text">
        </div>
    </div>  
    <div class="col-6">     
        <div class="calc_item">
            <p>2 команда(удары)</p>
            <input type="number" class="shotsAvgTeamAway_input${el}" type="text">
        </div>
    </div>  
    <h4>Удары соперников(ср.) SH/90</h4>
    <div class="col-6">     
        <div class="calc_item">
            <p>1 команда</p>
            <input type="number" type="number" class="shotsAvgAgainstTeamHome_input${el}" type="text">
        </div>
    </div> 
    <div class="col-6">  
        <div class="calc_item">
            <p>2 командa</p>
            <input type="number" class="shotsAvgAgainstTeamAway_input${el}" type="text">
        </div>
    </div> 

    <h4>Удары в створ sot/90</h4>
    <div class="col-6">     
        <div class="calc_item">
            <p>1 команда(удары)</p>
            <input type="number" class="sotAvgTeamHome_input${el}" type="text">
        </div>
    </div>  
    <div class="col-6">     
        <div class="calc_item">
            <p>2 команда(удары)</p>
            <input type="number" class="sotAvgTeamAway_input${el}" type="text">
        </div>
    </div>  
    <h4>Удары в створ соперников Sot/90</h4>
    <div class="col-6">     
        <div class="calc_item">
            <p>1 команда</p>
            <input type="number" type="number" class="sotAvgAgainstTeamHome_input${el}" type="text">
        </div>
    </div> 
    <div class="col-6">  
        <div class="calc_item">
            <p>2 командa</p>
            <input type="number" class="sotAvgAgainstTeamAway_input${el}" type="text">
        </div>
    </div> 

    <h4>G/sh</h4>
    <div class="col-6">     
        <div class="calc_item">
            <p>1 команда</p>
            <input type="number" class="g_sh_Home_input${el}" type="text">
        </div>
    </div> 
    <div class="col-6">  
        <div class="calc_item">
            <p>2 командa</p>
            <input type="number" class="g_sh_Away_input${el}" type="text">
        </div>
    </div> 
    <h4>G/sh соперников</h4>
    <div class="col-6">     
        <div class="calc_item">
            <p>1 команда</p>
            <input type="number" class="g_sh_AgHome_input${el}" type="text">
        </div>
    </div> 
    <div class="col-6">  
        <div class="calc_item">
            <p>2 командa</p>
            <input type="number" class="g_sh_AgAway_input${el}" type="text">
        </div>
    </div> 

    <h4>G/sot</h4>
    <div class="col-6">     
        <div class="calc_item">
            <p>1 команда</p>
            <input type="number" class="g_sot_Home_input${el}" type="text">
        </div>
    </div> 
    <div class="col-6">  
        <div class="calc_item">
            <p>2 командa</p>
            <input type="number" class="g_sot_Away_input${el}" type="text">
        </div>
    </div> 
    <h4>G/sot соперников</h4>
    <div class="col-6">     
        <div class="calc_item">
            <p>1 команда</p>
            <input type="number" class="g_sot_AgHome_input${el}" type="text">
        </div>
    </div> 
    <div class="col-6">  
        <div class="calc_item">
            <p>2 командa</p>
            <input type="number" class="g_sot_AgAway_input${el}" type="text">
        </div>
    </div> 
    <div class = "centerBtn">
    <button class = "btn btn-info btnCalcOfXg${el}">Рассчитать</button>
    </div>
    <div class = "result1${el}"></div>
</div>
</div>   
<div class = "goals${el}">
<div class="row">
<h3>Рассчет по голам</h3>
    <h4>Poss</h4>
    <div class="col-6">     
        <div class="calc_item">
            <p>1 команда</p>
            <input type="number" class="poss1_Home_input${el}" type="text">
        </div>
    </div> 
    <div class="col-6">  
        <div class="calc_item">
            <p>2 командa</p>
            <input type="number" class="poss1_Away_input${el}" type="text">
        </div>
    </div> 
    <h4>Poss соперников</h4>
    <div class="col-6">     
        <div class="calc_item">
            <p>1 команда</p>
            <input type="number" class="poss1_AgHome_input${el}" type="text">
        </div>
    </div> 
    <div class="col-6">  
        <div class="calc_item">
            <p>2 командa</p>
            <input type="number" class="poss1_AgAway_input${el}" type="text">
        </div>
    </div> 

    <h4>gls90</h4>
<div class="col-6">  
<div class="calc_item">
    <p>1 командa</p>
    <input type="number" class="glsTeamHome_input${el}" type="text">
</div>
</div> 
<div class="col-6">  
<div class="calc_item">
    <p>2 командa</p>
    <input type="number" class="glsTeamAway_input${el}" type="text">
</div>
</div> 
<h4>gls90 соперников</h4>
<div class="col-6">  
<div class="calc_item">
    <p>1 команда</p>
    <input type="number" class="glsAgainstTeamHome_input${el}" type="text">
</div>
</div>
<div class="col-6">  
<div class="calc_item">
    <p>2 команда</p>
    <input type="number" class="glsAgainstTeamAway_input${el}" type="text">
</div>
</div>

    <h4>sh90</h4>
    <div class="col-6">     
        <div class="calc_item">
            <p>1 команда</p>
            <input type="number" class="sh1_Home_input${el}" type="text">
        </div>
    </div> 
    <div class="col-6">  
        <div class="calc_item">
            <p>2 командa</p>
            <input type="number" class="sh1_Away_input${el}" type="text">
        </div>
    </div> 
    <h4>sh90 соперников</h4>
    <div class="col-6">     
        <div class="calc_item">
            <p>1 команда</p>
            <input type="number" class="sh1_AgHome_input${el}" type="text">
        </div>
    </div> 
    <div class="col-6">  
        <div class="calc_item">
            <p>2 командa</p>
            <input type="number" class="sh1_AgAway_input${el}" type="text">
        </div>
    </div> 

    <h4>Sot90</h4>
    <div class="col-6">     
        <div class="calc_item">
            <p>1 команда</p>
            <input type="number" class="sot1_Home_input${el}" type="text">
        </div>
    </div> 
    <div class="col-6">  
        <div class="calc_item">
            <p>2 командa</p>
            <input type="number" class="sot1_Away_input${el}" type="text">
        </div>
    </div> 
    <h4>Sot90 соперников</h4>
    <div class="col-6">     
        <div class="calc_item">
            <p>1 команда</p>
            <input type="number" class="sot1_AgHome_input${el}" type="text">
        </div>
    </div> 
    <div class="col-6">  
        <div class="calc_item">
            <p>2 командa</p>
            <input type="number" class="sot1_AgAway_input${el}" type="text">
        </div>
    </div> 

    <h4>G/Sh</h4>
    <div class="col-6">     
        <div class="calc_item">
            <p>1 команда</p>
            <input type="number" class="g_sh1_Home_input${el}" type="text">
        </div>
    </div> 
    <div class="col-6">  
        <div class="calc_item">
            <p>2 командa</p>
            <input type="number" class="g_sh1_Away_input${el}" type="text">
        </div>
    </div> 
    <h4>G/Sh соперников</h4>
    <div class="col-6">     
        <div class="calc_item">
            <p>1 команда</p>
            <input type="number" class="g_sh1_AgHome_input${el}" type="text">
        </div>
    </div> 
    <div class="col-6">  
        <div class="calc_item">
            <p>2 командa</p>
            <input type="number" class="g_sh1_AgAway_input${el}" type="text">
        </div>
    </div> 

    <h4>G/Sot</h4>
    <div class="col-6">     
        <div class="calc_item">
            <p>1 команда</p>
            <input type="number" class="g_sot1_Home_input${el}" type="text">
        </div>
    </div> 
    <div class="col-6">  
        <div class="calc_item">
            <p>2 командa</p>
            <input type="number" class="g_sot1_Away_input${el}" type="text">
        </div>
    </div> 
    <h4>G/Sot соперников</h4>
    <div class="col-6">     
        <div class="calc_item">
            <p>1 команда</p>
            <input type="number" class="g_sot1_AgHome_input${el}" type="text">
        </div>
    </div> 
    <div class="col-6">  
        <div class="calc_item">
            <p>2 командa</p>
            <input type="number" class="g_sot1_AgAway_input${el}" type="text">
        </div>
    </div> 
    <div class = "centerBtn">
    <button class = "btn btn-info btnCalcPoison${el}">Рассчитать</button>
    </div>
    <div class = "result2${el}"></div>
   
</div>
</div>
</div>

</div>
</div>
</div>

  `)

    $(`.calculation${el}`).hide();

    let calcUrl = document.querySelector(`.calculationUrl${el}`);
    let statisticsUrl = document.querySelector(`.statisticUrl${el}`);



    function calcShow() {
        $(`.calculation${el}`).show();
        $(`.calculationUrl${el}`).attr('class', `nav-link calculationUrl${el} active`);
        $(`.statisticUrl${el}`).attr('class', `nav-link statisticUrl${el}`);
        $(`.statistic${el}`).hide();

    }
    calcUrl.addEventListener('click', calcShow);

    function statisticShow() {
        $(`.statistic${el}`).show();
        $(`.statisticUrl${el}`).attr('class', `nav-link statisticUrl${el} active`);
        $(`.calculationUrl${el}`).attr('class', `nav-link calculationUrl${el}`);
        $(`.calculation${el}`).hide();
    }
    statisticsUrl.addEventListener('click', statisticShow);



    // для голов и xg

    $(`.goals${el}`).hide();

    let xgUrl = document.querySelector(`.xgUrl${el}`);
    let goalUrl = document.querySelector(`.goalUrl${el}`);



    function xgShow() {
        $(`.xg${el}`).show();
        $(`.xgUrl${el}`).attr('class', `nav-link xgUrl${el} active`);
        $(`.goalUrl${el}`).attr('class', `nav-link goalUrl${el}`);
        $(`.goals${el}`).hide();

    }
    xgUrl.addEventListener('click', xgShow);

    function goalShow() {
        $(`.goals${el}`).show();
        $(`.goalUrl${el}`).attr('class', `nav-link goalUrl${el} active`);
        $(`.xgUrl${el}`).attr('class', `nav-link xgUrl${el}`);
        $(`.xg${el}`).hide();
    }
    goalUrl.addEventListener('click', goalShow);


    getPredictionAndCalcPoison(el)
}



function getPredictionAndCalcPoison(el) {

    // Получаем прогноз на матч
    const options = {
        method: 'GET',
        url: `https://api-football-v1.p.rapidapi.com/v2/predictions/${el}`,
        headers: {
            'x-rapidapi-key': 'f570367049msh92d23c8fda1a817p1b03cfjsne8957d93c6e0',
            'x-rapidapi-host': 'api-football-v1.p.rapidapi.com'
        }
    };

    axios.request(options).then(function (response) {
        console.log(response.data);

        //   переменные голов за все матчи для домашней команды
        let homeGoalsAgainistAllMatches = response.data.api.predictions[0].teams.home.all_last_matches.goals.goalsAgainst.total;
        let homeGoalsAgainistAllMatchesHome = response.data.api.predictions[0].teams.home.all_last_matches.goals.goalsAgainst.home;
        let homeGoalsAgainistAllMatchesAway = response.data.api.predictions[0].teams.home.all_last_matches.goals.goalsAgainst.away;
        let homeGoalsForAllMatches = response.data.api.predictions[0].teams.home.all_last_matches.goals.goalsFor.total;
        let homeGoalsForAllMatchesHome = response.data.api.predictions[0].teams.home.all_last_matches.goals.goalsFor.home;
        let homeGoalsForAllMatchesAway = response.data.api.predictions[0].teams.home.all_last_matches.goals.goalsFor.away;
        let homeGoalsForAvgAllMatches = response.data.api.predictions[0].teams.home.all_last_matches.goalsAvg.goalsFor.total;
        let homeGoalsForAvgAllMatchesHome = response.data.api.predictions[0].teams.home.all_last_matches.goalsAvg.goalsFor.home;
        let homeGoalsForAvgAllMatchesAway = response.data.api.predictions[0].teams.home.all_last_matches.goalsAvg.goalsFor.away;
        let homeGoalsAgainistAvgAllMatches = response.data.api.predictions[0].teams.home.all_last_matches.goalsAvg.goalsAgainst.total;
        let homeGoalsAgainistAvgAllMatchesHome = response.data.api.predictions[0].teams.home.all_last_matches.goalsAvg.goalsAgainst.home;
        let homeGoalsAgainistAvgAllMatchesAway = response.data.api.predictions[0].teams.home.all_last_matches.goalsAvg.goalsAgainst.away;
        // переменные побед ничьих и выигрышей дома для домашней команды
        let homeDrawsAllMatches = response.data.api.predictions[0].teams.home.all_last_matches.matchs.draws.total;
        let homeDrawsAllMatchesHome = response.data.api.predictions[0].teams.home.all_last_matches.matchs.draws.home;
        let homeWinsAllMatches = response.data.api.predictions[0].teams.home.all_last_matches.matchs.wins.total;
        let homeWinsAllMatchesHome = response.data.api.predictions[0].teams.home.all_last_matches.matchs.wins.home;
        let homeLosesAllMatches = response.data.api.predictions[0].teams.home.all_last_matches.matchs.loses.total;
        let homeLosesAllMatchesHome = response.data.api.predictions[0].teams.home.all_last_matches.matchs.loses.home;
        let homeAllmatches = response.data.api.predictions[0].teams.home.all_last_matches.matchs.matchsPlayed.total;
        let homeAllmatchesHome = response.data.api.predictions[0].teams.home.all_last_matches.matchs.matchsPlayed.home;
        // переменные для домашней команды за 5 матчей
        let homeGoalsAgainist5Matches = response.data.api.predictions[0].teams.home.last_5_matches.goals_against;
        let homeGoalsFor5Matches = response.data.api.predictions[0].teams.home.last_5_matches.goals;
        let homeGoalsForAvg5Matches = response.data.api.predictions[0].teams.home.last_5_matches.goals_avg;
        let homeGoalsAgainistAvg5Matches = response.data.api.predictions[0].teams.home.last_5_matches.goals_against_avg;
        let homeAtt5matches = response.data.api.predictions[0].teams.home.last_5_matches.att;
        let homeDef5matches = response.data.api.predictions[0].teams.home.last_5_matches.def;
        let homeForme5matches = response.data.api.predictions[0].teams.home.last_5_matches.forme;


        //   переменные голов за все матчи для гостевой команды
        let awayGoalsAgainistAllMatches = response.data.api.predictions[0].teams.away.all_last_matches.goals.goalsAgainst.total;
        let awayGoalsAgainistAllMatchesHome = response.data.api.predictions[0].teams.away.all_last_matches.goals.goalsAgainst.home;
        let awayGoalsAgainistAllMatchesAway = response.data.api.predictions[0].teams.away.all_last_matches.goals.goalsAgainst.away;
        let awayGoalsForAllMatches = response.data.api.predictions[0].teams.away.all_last_matches.goals.goalsFor.total;
        let awayGoalsForAllMatchesHome = response.data.api.predictions[0].teams.away.all_last_matches.goals.goalsFor.home;
        let awayGoalsForAllMatchesAway = response.data.api.predictions[0].teams.away.all_last_matches.goals.goalsFor.away;
        let awayGoalsForAvgAllMatches = response.data.api.predictions[0].teams.away.all_last_matches.goalsAvg.goalsFor.total;
        let awayGoalsForAvgAllMatchesHome = response.data.api.predictions[0].teams.away.all_last_matches.goalsAvg.goalsFor.home;
        let awayGoalsForAvgAllMatchesAway = response.data.api.predictions[0].teams.away.all_last_matches.goalsAvg.goalsFor.away;
        let awayGoalsAgainistAvgAllMatches = response.data.api.predictions[0].teams.away.all_last_matches.goalsAvg.goalsAgainst.total;
        let awayGoalsAgainistAvgAllMatchesHome = response.data.api.predictions[0].teams.away.all_last_matches.goalsAvg.goalsAgainst.home;
        let awayGoalsAgainistAvgAllMatchesAway = response.data.api.predictions[0].teams.away.all_last_matches.goalsAvg.goalsAgainst.away;

        // переменные для гостевой команды за 5 матчей
        let awayGoalsAgainist5Matches = response.data.api.predictions[0].teams.away.last_5_matches.goals_against;
        let awayGoalsFor5Matches = response.data.api.predictions[0].teams.away.last_5_matches.goals;
        let awayGoalsForAvg5Matches = response.data.api.predictions[0].teams.away.last_5_matches.goals_avg;
        let awayGoalsAgainistAvg5Matches = response.data.api.predictions[0].teams.away.last_5_matches.goals_against_avg;
        let awayAtt5matches = response.data.api.predictions[0].teams.away.last_5_matches.att;
        let awayDef5matches = response.data.api.predictions[0].teams.away.last_5_matches.def;
        let awayForme5matches = response.data.api.predictions[0].teams.away.last_5_matches.forme;


        // сравнение команд 
        let attHome = response.data.api.predictions[0].comparison.att.home;
        let attAway = response.data.api.predictions[0].comparison.att.away;
        let defHome = response.data.api.predictions[0].comparison.def.home;
        let defAway = response.data.api.predictions[0].comparison.def.away;
        let fish_lawHome = response.data.api.predictions[0].comparison.fish_law.home;
        let fish_lawAway = response.data.api.predictions[0].comparison.fish_law.away;
        let formeHome = response.data.api.predictions[0].comparison.forme.home;
        let formeAway = response.data.api.predictions[0].comparison.forme.away;
        let goals_h2hHome = response.data.api.predictions[0].comparison.goals_h2h.home;
        let goals_h2hAway = response.data.api.predictions[0].comparison.goals_h2h.away;
        let h2hHome = response.data.api.predictions[0].comparison.h2h.home;
        let h2hAway = response.data.api.predictions[0].comparison.h2h.away;
        let match_winner = response.data.api.predictions[0].match_winner;
        let under_over = response.data.api.predictions[0].under_over
        let goals_home = response.data.api.predictions[0].goals_home
        let goals_away = response.data.api.predictions[0].goals_away
        let advice =  response.data.api.predictions[0].advice

        $(`.statistic${el}`).append(`<div class = "comparison">
<h4>Сравнение команд</h4>
<h5>Атака</h5>
<div class="progress">
  <div class="progress-bar" role="progressbar" style="width: ${attHome}" aria-valuenow="${attHome.slice(0, 1)}" aria-valuemin="0" aria-valuemax="100">${attHome}</div>
  <div class="progress-bar bg-success" role="progressbar" style="width: ${attAway}" aria-valuenow="${attAway.slice(0, 1)}" aria-valuemin="0" aria-valuemax="100">${attAway}</div>
</div>
<h5>Защита</h5>
<div class="progress">
  <div class="progress-bar" role="progressbar" style="width: ${defHome}" aria-valuenow="${defHome.slice(0, 1)}" aria-valuemin="0" aria-valuemax="100">${defHome}</div>
  <div class="progress-bar bg-success" role="progressbar" style="width: ${defAway}" aria-valuenow="${defAway.slice(0, 1)}" aria-valuemin="0" aria-valuemax="100">${defAway}</div>
</div>
<h5>Форма</h5>
<div class="progress">
  <div class="progress-bar" role="progressbar" style="width: ${formeHome}" aria-valuenow="${formeHome.slice(0, 1)}" aria-valuemin="0" aria-valuemax="100">${formeHome}</div>
  <div class="progress-bar bg-success" role="progressbar" style="width: ${formeAway}" aria-valuenow="${formeAway.slice(0, 1)}" aria-valuemin="0" aria-valuemax="100">${formeAway}</div>
</div>
<h5>Голы H2H</h5>
<div class="progress">
  <div class="progress-bar" role="progressbar" style="width: ${goals_h2hHome}" aria-valuenow="${goals_h2hHome.slice(0, 1)}" aria-valuemin="0" aria-valuemax="100">${goals_h2hHome}</div>
  <div class="progress-bar bg-success" role="progressbar" style="width: ${goals_h2hAway}" aria-valuenow="${goals_h2hAway.slice(0, 1)}" aria-valuemin="0" aria-valuemax="100">${goals_h2hAway}</div>
</div>
<h5>H2H</h5>
<div class="progress">
  <div class="progress-bar" role="progressbar" style="width: ${h2hHome}" aria-valuenow="${h2hHome.slice(0, 1)}" aria-valuemin="0" aria-valuemax="100">${h2hHome}</div>
  <div class="progress-bar bg-success" role="progressbar" style="width: ${h2hAway}" aria-valuenow="${h2hAway.slice(0, 1)}" aria-valuemin="0" aria-valuemax="100">${h2hAway}</div>
</div>
<h4>Сравнение команд за 5 матчей</h4>
<h5>Атака</h5>
<div class="progress">
  <div class="progress-bar" role="progressbar" style="width: ${homeAtt5matches}" aria-valuenow="${homeAtt5matches.slice(0, 2)}" aria-valuemin="0" aria-valuemax="100">${homeAtt5matches}</div>
  <div class="progress-bar bg-success" role="progressbar" style="width: ${awayAtt5matches}" aria-valuenow="${awayAtt5matches.slice(0, 2)}" aria-valuemin="0" aria-valuemax="100">${awayAtt5matches}</div>
</div>
<h5>Защита</h5>
<div class="progress">
  <div class="progress-bar" role="progressbar" style="width: ${homeDef5matches}" aria-valuenow="${homeDef5matches.slice(0, 1)}" aria-valuemin="0" aria-valuemax="100">${homeDef5matches}</div>
  <div class="progress-bar bg-success" role="progressbar" style="width: ${awayDef5matches}" aria-valuenow="${awayDef5matches.slice(0, 1)}" aria-valuemin="0" aria-valuemax="100">${awayDef5matches}</div>
</div>
<h5>Форма</h5>
<div class="progress">
  <div class="progress-bar" role="progressbar" style="width: ${homeForme5matches}" aria-valuenow="${homeForme5matches.slice(0, 1)}" aria-valuemin="0" aria-valuemax="100">${homeForme5matches}</div>
  <div class="progress-bar bg-success" role="progressbar" style="width: ${awayForme5matches}" aria-valuenow="${awayForme5matches.slice(0, 1)}" aria-valuemin="0" aria-valuemax="100">${awayForme5matches}</div>
</div>
</div>
<div class ="forecastApi">
<h4>Прогноз</h4>
<p>Прогноз: ${advice}</p>
<p>Средний тотал 1 команды: ${goals_home}</p>
<p>Средний тотал 2 команды: ${goals_away}</p>
</div>`)



        // переменные для рассчета вероятностей по xg
        let shotsTeamHomeAll = document.querySelector(`.shotsTeamHome_input${el}`)
        let shotsTeamAwayAll = document.querySelector(`.shotsTeamAway_input${el}`)
        let shotsAgainstTeamHomeAll = document.querySelector(`.shotsAgainstTeamHome_input${el}`)
        let shotsAgainstTeamAwayAll = document.querySelector(`.shotsAgainstTeamAway_input${el}`)

        let possTeamHome = document.querySelector(`.possessionTeamHome_input${el}`)
        let possTeamAway = document.querySelector(`.possessionTeamAway_input${el}`)
        let possAgainstTeamHome = document.querySelector(`.possessionAgainstTeamHome_input${el}`)
        let possAgainstTeamAway = document.querySelector(`.possessionAgainstTeamAway_input${el}`)

        let gls90TeamHome = document.querySelector(`.gls90TeamHome_input${el}`)
        let gls90TeamAway = document.querySelector(`.gls90TeamAway_input${el}`)
        let gls90AgainstTeamHome = document.querySelector(`.gls90AgainstTeamHome_input${el}`)
        let gls90AgainstTeamAway = document.querySelector(`.gls90AgainstTeamAway_input${el}`)

        let XGHome = document.querySelector(`.XGTeamHome_input${el}`)
        let XGAHome = document.querySelector(`.XGATeamHome_input${el}`)
        let XGAway = document.querySelector(`.XGTeamAway_input${el}`)
        let XGAAway = document.querySelector(`.XGATeamAway_input${el}`)

        let ShotsAvgHome = document.querySelector(`.shotsAvgTeamHome_input${el}`)
        let ShotsAvgAway = document.querySelector(`.shotsAvgTeamAway_input${el}`)
        let ShotsAvgAgHome = document.querySelector(`.shotsAvgAgainstTeamHome_input${el}`)
        let ShotsAvgAgAway = document.querySelector(`.shotsAvgAgainstTeamAway_input${el}`)

        let sotAvgHome = document.querySelector(`.sotAvgTeamHome_input${el}`)
        let sotAvgAway = document.querySelector(`.sotAvgTeamAway_input${el}`)
        let sotAvgAgHome = document.querySelector(`.sotAvgAgainstTeamHome_input${el}`)
        let sotAvgAgAway = document.querySelector(`.sotAvgAgainstTeamAway_input${el}`)

        let g_shotHome = document.querySelector(`.g_sh_Home_input${el}`)
        let g_shotAway = document.querySelector(`.g_sh_Away_input${el}`)
        let g_shotAgHome = document.querySelector(`.g_sh_AgHome_input${el}`)
        let g_shotAgAway = document.querySelector(`.g_sh_AgAway_input${el}`)

        let g_shotsOnTargetHome = document.querySelector(`.g_sot_Home_input${el}`)
        let g_shotsOnTargetAway = document.querySelector(`.g_sot_Away_input${el}`)
        let g_shotsOnTargetAgHome = document.querySelector(`.g_sot_AgHome_input${el}`)
        let g_shotsOnTargetAgAway = document.querySelector(`.g_sot_AgAway_input${el}`)


        let btnCalcOfXg = document.querySelector(`.btnCalcOfXg${el}`)

        btnCalcOfXg.addEventListener('click', () => {
            calcPoisonDistributionOnXg(el)
        })

        function calcPoisonDistributionOnXg() {

            // Среднее владение мячем
            let possessionHome = (Number(possTeamHome.value) + Number(possAgainstTeamAway.value)) / 2
            let possessionAway = (Number(possTeamAway.value) + Number(possAgainstTeamHome.value)) / 2
            //    ожидаемое владение мячем
            let maxNumberPossesion = Math.max(possessionHome, possessionAway)
            let differencePossession = 0;
            let expectedPossessionHome = 0;
            let expectedPossessionAway = 0;
            if (possessionHome == maxNumberPossesion) {
                differencePossession = (possessionHome - possessionAway) / 2
                expectedPossessionHome = 50 + differencePossession
                expectedPossessionAway = 50 - differencePossession
            }
            if (possessionAway == maxNumberPossesion) {
                differencePossession = (possessionAway - possessionHome) / 2
                expectedPossessionHome = 50 - differencePossession
                expectedPossessionAway = 50 + differencePossession
            }

            // Ожидаемое количество голов за удар в створ
            let expectedGls90Home = (Number(gls90TeamHome.value) + Number(gls90AgainstTeamAway.value)) / 2
            let expectedGls90Away = (Number(gls90TeamAway.value) + Number(gls90AgainstTeamHome.value)) / 2
            // Ожидаемое количество голов за удар в створ
            let expectedG_sotHome = (Number(g_shotsOnTargetHome.value) + Number(g_shotsOnTargetAgAway.value)) / 2
            let expectedG_sotAway = (Number(g_shotsOnTargetAway.value) + Number(g_shotsOnTargetAgHome.value)) / 2
            // Ожидаемое количество голов за удар
            let expectedG_shHome = (Number(g_shotHome.value) + Number(g_shotAgAway.value)) / 2
            let expectedG_shAway = (Number(g_shotAway.value) + Number(g_shotAgHome.value)) / 2
            // Ожидаемое количество ударов в створ
            let expectedSot90Home = (Number(sotAvgHome.value) + Number(sotAvgAgAway.value)) / 2
            let expectedSot90Away = (Number(sotAvgAway.value) + Number(sotAvgAgHome.value)) / 2

            // ожидаемое количество ударов 
            let expectedShHome = (Number(ShotsAvgHome.value) + Number(ShotsAvgAgAway.value)) / 2
            let expectedShAway = (Number(ShotsAvgAway.value) + Number(ShotsAvgAgHome.value)) / 2

            // Ожидаемое количество ударов по владению
            let colShotsForHome2 = expectedPossessionHome * Number(ShotsAvgHome.value) / Number(possTeamHome.value)
            let colShotsAgainstAway2 = expectedPossessionHome * Number(ShotsAvgAgAway.value) / Number(possTeamAway.value)
            let expectedShotsHome2 = (colShotsForHome2 + colShotsAgainstAway2) / 2;

            let colShotsForAway2 = expectedPossessionAway * Number(ShotsAvgAway.value) / Number(possTeamAway.value)
            let colShotsAgainstHome2 = expectedPossessionAway * Number(ShotsAvgAgHome.value) / Number(possTeamHome.value)
            let expectedShotsAway2 = (colShotsForAway2 + colShotsAgainstHome2) / 2

            console.log(`владение удары1 ${expectedShotsHome2}`)
            console.log(`владение удары2 ${expectedShotsAway2}`)

            // Ожидаемое количество ударов
            let expectedShotsHome = (expectedShotsHome2 + expectedShHome) / 2
            let expectedShotsAway = (expectedShotsAway2 + expectedShAway) / 2
            console.log(`удары ожидаемые1 ${expectedShotsHome}`)
            console.log(`удары ожидаемые2 ${expectedShotsAway}`)

            // ожидаемые голы
            let goals1Home = expectedShotsHome * expectedG_shHome;
            let goals1Away = expectedShotsAway * expectedG_shAway;

            let goals2Home = expectedSot90Home * expectedG_sotHome;
            let goals2Away = expectedSot90Away * expectedG_sotAway;

            // Ожидаемое количество голов по статистике
            let expectedGoalsHomeStatistics = (goals1Home + goals2Home + expectedGls90Home) / 3
            let expectedGoalsAwayStatistics = (goals1Away + goals2Away + expectedGls90Away) / 3

            // показатель xg/удар 
            let xGForShotsHome = Number(XGHome.value) / Number(shotsTeamHomeAll.value)
            let xGAAgainstAway = Number(XGAAway.value) / Number(shotsAgainstTeamAwayAll.value)
            let xGShotsHome = (xGForShotsHome + xGAAgainstAway) / 2
            let xGForShotsAway = Number(XGAway.value) / Number(shotsTeamAwayAll.value)
            let xGAAgainstHome = Number(XGAHome.value) / Number(shotsAgainstTeamHomeAll.value)
            let xGShotsAway = (xGForShotsAway + xGAAgainstHome) / 2
            // ожидаемое количество голов xg
            let expectedGoalsHomeXg = expectedShotsHome * xGShotsHome
            let expectedGoalsAwayXg = expectedShotsAway * xGShotsAway
            console.log(`голы ожидаеемые хг ${expectedGoalsHomeXg}`)
            console.log(`голы ожидаемые хг ${expectedGoalsAwayXg}`)
            let expectedGoalsHome = (expectedGoalsHomeXg + expectedGoalsHomeStatistics) / 2
            let expectedGoalsAway = (expectedGoalsAwayXg + expectedGoalsAwayStatistics) / 2

            // рассчиываем распределение паусона все матчи
            let poisonGoals0Home = expectedGoalsHome ** 0 * 2.71828 ** -expectedGoalsHome / 1 * 100;
            let poisonGoals0Away = expectedGoalsAway ** 0 * 2.71828 ** -expectedGoalsAway / 1 * 100;

            let poisonGoals1Home = expectedGoalsHome ** 1 * 2.71828 ** -expectedGoalsHome / 1 * 100;
            let poisonGoals1Away = expectedGoalsAway ** 1 * 2.71828 ** -expectedGoalsAway / 1 * 100;

            let poisonGoals2Home = expectedGoalsHome ** 2 * 2.71828 ** -expectedGoalsHome / 2 * 100;
            let poisonGoals2Away = expectedGoalsAway ** 2 * 2.71828 ** -expectedGoalsAway / 2 * 100;

            let poisonGoals3Home = expectedGoalsHome ** 3 * 2.71828 ** -expectedGoalsHome / 6 * 100;
            let poisonGoals3Away = expectedGoalsAway ** 3 * 2.71828 ** -expectedGoalsAway / 6 * 100;

            let poisonGoals4Home = expectedGoalsHome ** 4 * 2.71828 ** -expectedGoalsHome / 24 * 100;
            let poisonGoals4Away = expectedGoalsAway ** 4 * 2.71828 ** -expectedGoalsAway / 24 * 100;

            let poisonGoals5Home = expectedGoalsHome ** 5 * 2.71828 ** -expectedGoalsHome / 120 * 100;
            let poisonGoals5Away = expectedGoalsAway ** 5 * 2.71828 ** -expectedGoalsAway / 120 * 100;

            // рассчитываем вероятности прохода ставки по распределению паусона
            let winshomepoison = ((poisonGoals1Home * poisonGoals0Away) / 100) + ((poisonGoals2Home * poisonGoals0Away) / 100) + ((poisonGoals3Home * poisonGoals0Away) / 100) + ((poisonGoals4Home * poisonGoals0Away) / 100) + ((poisonGoals5Home * poisonGoals0Away) / 100) + ((poisonGoals2Home * poisonGoals1Away) / 100) + ((poisonGoals3Home * poisonGoals1Away) / 100) + ((poisonGoals4Home * poisonGoals1Away) / 100) + ((poisonGoals5Home * poisonGoals1Away) / 100) + ((poisonGoals3Home * poisonGoals2Away) / 100) + ((poisonGoals4Home * poisonGoals2Away) / 100) + ((poisonGoals5Home * poisonGoals2Away) / 100) + ((poisonGoals4Home * poisonGoals3Away) / 100) + ((poisonGoals5Home * poisonGoals3Away) / 100) + ((poisonGoals5Home * poisonGoals4Away) / 100)
            let draws1x2Poison = ((poisonGoals0Home * poisonGoals0Away) / 100) + ((poisonGoals1Home * poisonGoals1Away) / 100) + ((poisonGoals2Home * poisonGoals2Away) / 100) + ((poisonGoals3Home * poisonGoals3Away) / 100) + ((poisonGoals4Home * poisonGoals4Away) / 100) + ((poisonGoals5Home * poisonGoals5Away) / 100);
            let winsAwayPoison = ((poisonGoals0Home * poisonGoals1Away) / 100) + ((poisonGoals0Home * poisonGoals2Away) / 100) + ((poisonGoals0Home * poisonGoals3Away) / 100) + ((poisonGoals0Home * poisonGoals4Away) / 100) + ((poisonGoals0Home * poisonGoals5Away) / 100) + ((poisonGoals1Home * poisonGoals2Away) / 100) + ((poisonGoals1Home * poisonGoals3Away) / 100) + ((poisonGoals1Home * poisonGoals4Away) / 100) + ((poisonGoals1Home * poisonGoals5Away) / 100) + ((poisonGoals2Home * poisonGoals3Away) / 100) + ((poisonGoals2Home * poisonGoals4Away) / 100) + ((poisonGoals2Home * poisonGoals5Away) / 100) + ((poisonGoals3Home * poisonGoals4Away) / 100) + ((poisonGoals3Home * poisonGoals5Away) / 100) + ((poisonGoals4Home * poisonGoals5Away) / 100)

            let winsOrDrawsHome = winshomepoison + draws1x2Poison;
            let winsOrDrawsAway = winsAwayPoison + draws1x2Poison;

            let score0_0 = (poisonGoals0Home * poisonGoals0Away) / 100
            let score1_0 = (poisonGoals1Home * poisonGoals0Away) / 100
            let score0_1 = (poisonGoals0Home * poisonGoals1Away) / 100
            let score1_1 = (poisonGoals1Home * poisonGoals1Away) / 100
            let score2_0 = (poisonGoals2Home * poisonGoals0Away) / 100
            let score0_2 = (poisonGoals0Home * poisonGoals2Away) / 100
            let score2_1 = (poisonGoals2Home * poisonGoals1Away) / 100
            let score1_2 = (poisonGoals1Home * poisonGoals2Away) / 100
            let score2_2 = (poisonGoals2Home * poisonGoals2Away) / 100
            let score3_0 = (poisonGoals3Home * poisonGoals0Away) / 100
            let score0_3 = (poisonGoals0Home * poisonGoals3Away) / 100
            let score3_1 = (poisonGoals3Home * poisonGoals1Away) / 100
            let score1_3 = (poisonGoals1Home * poisonGoals3Away) / 100
            let score3_2 = (poisonGoals3Home * poisonGoals2Away) / 100
            let score2_3 = (poisonGoals2Home * poisonGoals3Away) / 100
            let score3_3 = (poisonGoals3Home * poisonGoals3Away) / 100

            let totalUnder15 = ((poisonGoals0Home * poisonGoals0Away) / 100) + ((poisonGoals1Home * poisonGoals0Away) / 100) + ((poisonGoals0Home * poisonGoals1Away) / 100);
            let totalOver15 = 100 - totalUnder15;
            let totalUnder2 = totalUnder15 + ((poisonGoals2Home * poisonGoals0Away) / 100) + (((poisonGoals0Home * poisonGoals2Away) / 100) / 2) + (((poisonGoals1Home * poisonGoals1Away) / 100) / 2);
            let totalOver2 = 100 - totalUnder2;
            let totalUnder25 = ((poisonGoals0Home * poisonGoals0Away) / 100) + ((poisonGoals1Home * poisonGoals0Away) / 100) + ((poisonGoals0Home * poisonGoals1Away) / 100) + ((poisonGoals1Home * poisonGoals1Away) / 100) + ((poisonGoals2Home * poisonGoals0Away) / 100) + ((poisonGoals0Home * poisonGoals2Away) / 100);
            let totalOver25 = 100 - totalUnder25;
            let totalUnder3 = totalUnder25 + (((poisonGoals3Home * poisonGoals0Away) / 100) / 2) + (((poisonGoals0Home * poisonGoals3Away) / 100) / 2) + (((poisonGoals2Home * poisonGoals1Away) / 100) / 2) + (((poisonGoals1Home * poisonGoals2Away) / 100) / 2)
            let totalOver3 = 100 - totalUnder3;
            let totalUnder35 = ((poisonGoals0Home * poisonGoals0Away) / 100) + ((poisonGoals1Home * poisonGoals0Away) / 100) + ((poisonGoals0Home * poisonGoals1Away) / 100) + ((poisonGoals1Home * poisonGoals1Away) / 100) + ((poisonGoals2Home * poisonGoals0Away) / 100) + ((poisonGoals0Home * poisonGoals2Away) / 100) + ((poisonGoals2Home * poisonGoals1Away) / 100) + ((poisonGoals1Home * poisonGoals2Away) / 100) + ((poisonGoals3Home * poisonGoals0Away) / 100) + ((poisonGoals0Home * poisonGoals3Away) / 100);
            let totalOver35 = 100 - totalUnder35;
            let totalUnder4 = totalUnder35 + (((poisonGoals4Home * poisonGoals0Away) / 100) / 2) + (((poisonGoals0Home * poisonGoals4Away) / 100) / 2) + (((poisonGoals3Home * poisonGoals1Away) / 100) / 2) + (((poisonGoals1Home * poisonGoals3Away) / 100) / 2) + (((poisonGoals2Home * poisonGoals2Away) / 100) / 2)
            let totalOver4 = 100 - totalUnder4;
            let totalUnder45 = totalUnder35 + ((poisonGoals2Home * poisonGoals2Away) / 100) + ((poisonGoals3Home * poisonGoals1Away) / 100) + ((poisonGoals1Home * poisonGoals3Away) / 100) + ((poisonGoals4Home * poisonGoals0Away) / 100) + ((poisonGoals0Home * poisonGoals4Away) / 100)
            let totalOver45 = 100 - totalUnder45
            let bothWillScoreNot = ((poisonGoals0Home * poisonGoals0Away) / 100) + ((poisonGoals1Home * poisonGoals0Away) / 100) + ((poisonGoals2Home * poisonGoals0Away) / 100) + ((poisonGoals3Home * poisonGoals0Away) / 100) + ((poisonGoals4Home * poisonGoals0Away) / 100) + ((poisonGoals5Home * poisonGoals0Away) / 100) + ((poisonGoals0Home * poisonGoals1Away) / 100) + ((poisonGoals0Home * poisonGoals2Away) / 100) + ((poisonGoals0Home * poisonGoals3Away) / 100) + ((poisonGoals0Home * poisonGoals4Away) / 100) + ((poisonGoals0Home * poisonGoals5Away) / 100);
            let bothWillScoreYes = 100 - bothWillScoreNot;
            let individualTotalHomeOver1 = poisonGoals2Home + poisonGoals3Home + poisonGoals4Home + poisonGoals5Home + (poisonGoals1Home / 2);
            let individualTotalAwayOver1 = poisonGoals2Away + poisonGoals3Away + poisonGoals4Away + poisonGoals5Away + (poisonGoals1Away / 2);
            let individualTotalHomeUnder1 = poisonGoals0Home + (poisonGoals1Home / 2);
            let individualTotalAwayUnder1 = poisonGoals0Away + (poisonGoals1Away / 2);
            let individualTotalHomeOver15 = poisonGoals2Home + poisonGoals3Home + poisonGoals4Home + poisonGoals5Home;
            let individualTotalAwayOver15 = poisonGoals2Away + poisonGoals3Away + poisonGoals4Away + poisonGoals5Away;
            let individualTotalHomeUnder15 = poisonGoals0Home + poisonGoals1Home;
            let individualTotalAwayUnder15 = poisonGoals0Away + poisonGoals1Away;
            let individualTotalHomeOver2 = (poisonGoals2Home / 2) + poisonGoals3Home + poisonGoals4Home + poisonGoals5Home;
            let individualTotalAwayOver2 = (poisonGoals2Away / 2) + poisonGoals3Away + poisonGoals4Away + poisonGoals5Away;
            let individualTotalHomeUnder2 = poisonGoals0Home + poisonGoals1Home + (poisonGoals2Home / 2);
            let individualTotalAwayUnder2 = poisonGoals0Away + poisonGoals1Away + (poisonGoals2Away / 2);
            let individualTotalHomeOver25 = poisonGoals3Home + poisonGoals4Home + poisonGoals5Home;
            let individualTotalAwayOver25 = poisonGoals3Away + poisonGoals4Away + poisonGoals5Away;
            let individualTotalHomeUnder25 = poisonGoals0Home + poisonGoals1Home + poisonGoals2Home;
            let individualTotalAwayUnder25 = poisonGoals0Away + poisonGoals1Away + poisonGoals2Away;
            let foraHome_1 = ((poisonGoals2Home * poisonGoals0Away) / 100) + ((poisonGoals3Home * poisonGoals0Away) / 100) + ((poisonGoals3Home * poisonGoals1Away) / 100) + ((poisonGoals4Home * poisonGoals0Away) / 100) + ((poisonGoals4Home * poisonGoals1Away) / 100) + ((poisonGoals4Home * poisonGoals2Away) / 100) + ((poisonGoals5Home * poisonGoals0Away) / 100) + ((poisonGoals5Home * poisonGoals1Away) / 100) + ((poisonGoals5Home * poisonGoals2Away) / 100) + ((poisonGoals5Home * poisonGoals3Away) / 100) +
                ((((poisonGoals2Home * poisonGoals1Away) / 100) + ((poisonGoals3Home * poisonGoals2Away) / 100) + ((poisonGoals4Home * poisonGoals3Away) / 100) + ((poisonGoals5Home * poisonGoals4Away) / 100) + ((poisonGoals1Home * poisonGoals0Away) / 100)) / 2)
            let foraHome_0 = ((poisonGoals1Home * poisonGoals0Away) / 100) + ((poisonGoals2Home * poisonGoals1Away) / 100) + ((poisonGoals2Home * poisonGoals0Away) / 100) + ((poisonGoals3Home * poisonGoals0Away) / 100) + ((poisonGoals3Home * poisonGoals2Away) / 100)  + ((poisonGoals3Home * poisonGoals1Away) / 100) + ((poisonGoals4Home * poisonGoals0Away) / 100) + ((poisonGoals4Home * poisonGoals1Away) / 100) + ((poisonGoals4Home * poisonGoals2Away) / 100) + ((poisonGoals4Home * poisonGoals3Away) / 100) + ((poisonGoals5Home * poisonGoals0Away) / 100) + ((poisonGoals5Home * poisonGoals1Away) / 100) + ((poisonGoals5Home * poisonGoals2Away) / 100) + ((poisonGoals5Home * poisonGoals3Away) / 100) + ((poisonGoals5Home * poisonGoals4Away) / 100) +
                ((((poisonGoals2Home * poisonGoals2Away) / 100) + ((poisonGoals3Home * poisonGoals3Away) / 100) + ((poisonGoals0Home * poisonGoals0Away) / 100) + ((poisonGoals1Home * poisonGoals1Away) / 100) + ((poisonGoals4Home * poisonGoals4Away) / 100) + ((poisonGoals5Home * poisonGoals5Away) / 100)) / 2)
            let foraHomePlus1 = ((poisonGoals1Home * poisonGoals0Away) / 100) + ((poisonGoals2Home * poisonGoals1Away) / 100) + ((poisonGoals2Home * poisonGoals0Away) / 100) + ((poisonGoals3Home * poisonGoals0Away) / 100) + ((poisonGoals3Home * poisonGoals2Away) / 100)  + ((poisonGoals3Home * poisonGoals1Away) / 100) + ((poisonGoals4Home * poisonGoals0Away) / 100) + ((poisonGoals4Home * poisonGoals1Away) / 100) + ((poisonGoals4Home * poisonGoals2Away) / 100) + ((poisonGoals4Home * poisonGoals3Away) / 100) + ((poisonGoals5Home * poisonGoals0Away) / 100) + ((poisonGoals5Home * poisonGoals1Away) / 100) + ((poisonGoals5Home * poisonGoals2Away) / 100) + ((poisonGoals5Home * poisonGoals3Away) / 100) + ((poisonGoals5Home * poisonGoals4Away) / 100) + ((poisonGoals2Home * poisonGoals2Away) / 100) + ((poisonGoals3Home * poisonGoals3Away) / 100) + ((poisonGoals0Home * poisonGoals0Away) / 100) + ((poisonGoals1Home * poisonGoals1Away) / 100) + ((poisonGoals4Home * poisonGoals4Away) / 100) + ((poisonGoals5Home * poisonGoals5Away) / 100) + 
                ((((poisonGoals1Home * poisonGoals2Away) / 100) + ((poisonGoals2Home * poisonGoals3Away) / 100) + ((poisonGoals0Home * poisonGoals1Away) / 100) + ((poisonGoals3Home * poisonGoals4Away) / 100) + ((poisonGoals4Home * poisonGoals5Away) / 100)) / 2)
            let foraAway_1 = ((poisonGoals0Home * poisonGoals2Away) / 100) + ((poisonGoals0Home * poisonGoals3Away) / 100) + ((poisonGoals1Home * poisonGoals3Away) / 100) + ((poisonGoals0Home * poisonGoals4Away) / 100) + ((poisonGoals1Home * poisonGoals4Away) / 100) + ((poisonGoals2Home * poisonGoals4Away) / 100) + ((poisonGoals0Home * poisonGoals5Away) / 100) + ((poisonGoals1Home * poisonGoals5Away) / 100) + ((poisonGoals2Home * poisonGoals5Away) / 100) + ((poisonGoals3Home * poisonGoals5Away) / 100) +
                ((((poisonGoals1Home * poisonGoals2Away) / 100) + ((poisonGoals2Home * poisonGoals3Away) / 100) + ((poisonGoals3Home * poisonGoals4Away) / 100) + ((poisonGoals4Home * poisonGoals5Away) / 100) + ((poisonGoals0Home * poisonGoals1Away) / 100)) / 2)
            let foraAway_0 = ((poisonGoals0Home * poisonGoals1Away) / 100)  + ((poisonGoals1Home * poisonGoals2Away) / 100)  + ((poisonGoals0Home * poisonGoals2Away) / 100) + ((poisonGoals0Home * poisonGoals3Away) / 100) + ((poisonGoals1Home * poisonGoals3Away) / 100) + ((poisonGoals2Home * poisonGoals3Away) / 100) + ((poisonGoals0Home * poisonGoals4Away) / 100) + ((poisonGoals1Home * poisonGoals4Away) / 100) + ((poisonGoals2Home * poisonGoals4Away) / 100) + ((poisonGoals3Home * poisonGoals4Away) / 100) + ((poisonGoals0Home * poisonGoals5Away) / 100) + ((poisonGoals1Home * poisonGoals5Away) / 100) + ((poisonGoals2Home * poisonGoals5Away) / 100) + ((poisonGoals3Home * poisonGoals5Away) / 100) + ((poisonGoals4Home * poisonGoals5Away) / 100) +
                ((((poisonGoals2Home * poisonGoals2Away) / 100) + ((poisonGoals0Home * poisonGoals0Away) / 100) + ((poisonGoals1Home * poisonGoals1Away) / 100) + ((poisonGoals3Home * poisonGoals3Away) / 100) + ((poisonGoals4Home * poisonGoals4Away) / 100) + ((poisonGoals5Home * poisonGoals5Away) / 100)) / 2)
            let foraAwayPlus1 = ((poisonGoals0Home * poisonGoals1Away) / 100)  + ((poisonGoals1Home * poisonGoals2Away) / 100)  + ((poisonGoals0Home * poisonGoals2Away) / 100) + ((poisonGoals0Home * poisonGoals3Away) / 100) + ((poisonGoals1Home * poisonGoals3Away) / 100) + ((poisonGoals2Home * poisonGoals3Away) / 100) + ((poisonGoals0Home * poisonGoals4Away) / 100) + ((poisonGoals1Home * poisonGoals4Away) / 100) + ((poisonGoals2Home * poisonGoals4Away) / 100) + ((poisonGoals3Home * poisonGoals4Away) / 100) + ((poisonGoals0Home * poisonGoals5Away) / 100) + ((poisonGoals1Home * poisonGoals5Away) / 100) + ((poisonGoals2Home * poisonGoals5Away) / 100) + ((poisonGoals3Home * poisonGoals5Away) / 100) + ((poisonGoals4Home * poisonGoals5Away) / 100) + ((poisonGoals2Home * poisonGoals2Away) / 100) + ((poisonGoals0Home * poisonGoals0Away) / 100) + ((poisonGoals1Home * poisonGoals1Away) / 100) + ((poisonGoals3Home * poisonGoals3Away) / 100) + ((poisonGoals4Home * poisonGoals4Away) / 100) + ((poisonGoals5Home * poisonGoals5Away) / 100) +
                ((((poisonGoals2Home * poisonGoals1Away) / 100) + ((poisonGoals1Home * poisonGoals0Away) / 100) + ((poisonGoals3Home * poisonGoals2Away) / 100) + ((poisonGoals4Home * poisonGoals3Away) / 100) + ((poisonGoals5Home * poisonGoals4Away) / 100)) / 2)    
            let foraHome_15 = ((poisonGoals2Home * poisonGoals0Away) / 100) + ((poisonGoals3Home * poisonGoals0Away) / 100) + ((poisonGoals3Home * poisonGoals1Away) / 100) + ((poisonGoals4Home * poisonGoals0Away) / 100) + ((poisonGoals4Home * poisonGoals1Away) / 100) + ((poisonGoals4Home * poisonGoals2Away) / 100) + ((poisonGoals5Home * poisonGoals0Away) / 100) + ((poisonGoals5Home * poisonGoals1Away) / 100) + ((poisonGoals5Home * poisonGoals2Away) / 100) + ((poisonGoals5Home * poisonGoals3Away) / 100);
            let foraAway_15 = ((poisonGoals0Home * poisonGoals2Away) / 100) + ((poisonGoals0Home * poisonGoals3Away) / 100) + ((poisonGoals1Home * poisonGoals3Away) / 100) + ((poisonGoals0Home * poisonGoals4Away) / 100) + ((poisonGoals1Home * poisonGoals4Away) / 100) + ((poisonGoals2Home * poisonGoals4Away) / 100) + ((poisonGoals0Home * poisonGoals5Away) / 100) + ((poisonGoals1Home * poisonGoals5Away) / 100) + ((poisonGoals2Home * poisonGoals5Away) / 100) + ((poisonGoals3Home * poisonGoals5Away) / 100);
            let foraHome_2 = ((poisonGoals2Home * poisonGoals0Away) / 100) + ((poisonGoals3Home * poisonGoals0Away) / 100) + ((poisonGoals3Home * poisonGoals1Away) / 100) + ((poisonGoals4Home * poisonGoals0Away) / 100) + ((poisonGoals4Home * poisonGoals1Away) / 100) + ((poisonGoals4Home * poisonGoals2Away) / 100) + ((poisonGoals5Home * poisonGoals0Away) / 100) + ((poisonGoals5Home * poisonGoals1Away) / 100) + ((poisonGoals5Home * poisonGoals2Away) / 100) + ((poisonGoals5Home * poisonGoals3Away) / 100)
            let foraAway_2 = ((poisonGoals0Home * poisonGoals2Away) / 100) + ((poisonGoals0Home * poisonGoals3Away) / 100) + ((poisonGoals1Home * poisonGoals3Away) / 100) + ((poisonGoals0Home * poisonGoals4Away) / 100) + ((poisonGoals1Home * poisonGoals4Away) / 100) + ((poisonGoals2Home * poisonGoals4Away) / 100) + ((poisonGoals0Home * poisonGoals5Away) / 100) + ((poisonGoals1Home * poisonGoals5Away) / 100) + ((poisonGoals2Home * poisonGoals5Away) / 100) + ((poisonGoals3Home * poisonGoals5Away) / 100)

            let numberOfHeads0_1 = ((poisonGoals0Home * poisonGoals0Away) / 100) + ((poisonGoals1Home * poisonGoals0Away) / 100) + ((poisonGoals0Home * poisonGoals1Away) / 100)
            let numberOfHeads2_3 = ((poisonGoals1Home * poisonGoals1Away) / 100) + ((poisonGoals2Home * poisonGoals0Away) / 100) + ((poisonGoals0Home * poisonGoals2Away) / 100) + ((poisonGoals3Home * poisonGoals0Away) / 100) + ((poisonGoals0Home * poisonGoals3Away) / 100) + ((poisonGoals2Home * poisonGoals1Away) / 100) + ((poisonGoals1Home * poisonGoals2Away) / 100)
            
            let homeOrDrawsAndTotalUnder25 = (winsOrDrawsHome + totalUnder25) / 2
            let homeOrDrawsAndTotalUnder35 = (winsOrDrawsHome + totalUnder35) / 2
            let homeOrDrawsAndTotalUnder45 = (winsOrDrawsHome + totalUnder45) / 2
            let homeOrDrawsAndTotalOver25 = (winsOrDrawsHome + totalOver25) / 2
            let homeOrDrawsAndTotalOver35 = (winsOrDrawsHome + totalOver35) / 2
            let homeOrDrawsAndTotalOver45 = (winsOrDrawsHome + totalOver45) / 2

            let awayOrDrawsAndTotalUnder25 = (winsOrDrawsAway + totalUnder25) / 2
            let awayOrDrawsAndTotalUnder35 = (winsOrDrawsAway + totalUnder35) / 2
            let awayOrDrawsAndTotalUnder45 = (winsOrDrawsAway + totalUnder45) / 2
            let awayOrDrawsAndTotalOver25 = (winsOrDrawsAway + totalOver25) / 2
            let awayOrDrawsAndTotalOver35 = (winsOrDrawsAway + totalOver35) / 2
            let awayOrDrawsAndTotalOver45 = (winsOrDrawsAway + totalOver45) / 2

            let willWinAndWillNotMissHome = ((poisonGoals1Home * poisonGoals0Away) / 100) + ((poisonGoals2Home * poisonGoals0Away) / 100) + ((poisonGoals3Home * poisonGoals0Away) / 100) + ((poisonGoals4Home * poisonGoals0Away) / 100) + ((poisonGoals5Home * poisonGoals0Away) / 100)
            let willWinAndWillNotMissAway = ((poisonGoals0Home * poisonGoals1Away) / 100) + ((poisonGoals0Home * poisonGoals2Away) / 100) + ((poisonGoals0Home * poisonGoals3Away) / 100) + ((poisonGoals0Home * poisonGoals4Away) / 100) + ((poisonGoals0Home * poisonGoals5Away) / 100)
            
            // расчитываем коэфицценты
            let willWinAndWillNotMissHomeOdd = 100 / willWinAndWillNotMissHome
            let willWinAndWillNotMissAwayOdd = 100 / willWinAndWillNotMissAway
            let homeOrDrawsAndTotalUnder25Odd = 100 / homeOrDrawsAndTotalUnder25
            let homeOrDrawsAndTotalUnder35Odd = 100 / homeOrDrawsAndTotalUnder35
            let homeOrDrawsAndTotalUnder45Odd = 100 / homeOrDrawsAndTotalUnder45
            let homeOrDrawsAndTotalOver25Odd = 100 / homeOrDrawsAndTotalOver25
            let homeOrDrawsAndTotalOver35Odd = 100 / homeOrDrawsAndTotalOver35
            let homeOrDrawsAndTotalOver45Odd = 100 / homeOrDrawsAndTotalOver45
            let awayOrDrawsAndTotalUnder25Odd = 100 / awayOrDrawsAndTotalUnder25
            let awayOrDrawsAndTotalUnder35Odd = 100 / awayOrDrawsAndTotalUnder35
            let awayOrDrawsAndTotalUnder45Odd = 100 / awayOrDrawsAndTotalUnder45
            let awayOrDrawsAndTotalOver25Odd = 100 / awayOrDrawsAndTotalOver25
            let awayOrDrawsAndTotalOver35Odd = 100 / awayOrDrawsAndTotalOver35
            let awayOrDrawsAndTotalOver45Odd = 100 / awayOrDrawsAndTotalOver45
            let numberOfHeads0_1Odd = 100 / numberOfHeads0_1
            let numberOfHeads2_3Odd = 100 / numberOfHeads2_3
            let foraHome_0Odd = 100 / foraHome_0
            let foraAway_0Odd = 100 / foraAway_0
            let foraHomePlus1Odd = 100 / foraHomePlus1
            let foraAwayPlus1Odd = 100 / foraAwayPlus1
            let winsOrDrawsHomeOdd = 100 / winsOrDrawsHome
            let winsOrDrawsAwayOdd = 100 / winsOrDrawsAway

            let winsHomeOdd = 100 / winshomepoison;
            let drawsOdd = 100 / draws1x2Poison;
            let winsAwayOdd = 100 / winsAwayPoison;
            let bothWillScoreNotOdd = 100 / bothWillScoreNot;
            let bothWillScoreYesOdd = 100 / bothWillScoreYes;
            let foraHome_1Odd = 100 / foraHome_1;
            let foraHome_15Odd = 100 / foraHome_15;
            let foraHome_2Odd = 100 / foraHome_2;
            let foraAway_1Odd = 100 / foraAway_1;
            let foraAway_15Odd = 100 / foraAway_15;
            let foraAway_2Odd = 100 / foraAway_2;
            let totalUnder15Odd = 100 / totalUnder15
            let totalOver15Odd = 100 / totalOver15
            let totalUnder2Odd = 100 / totalUnder2
            let totalOver2Odd = 100 / totalOver2
            let totalUnder25Odd = 100 / totalUnder25
            let totalOver25Odd = 100 / totalOver25
            let totalUnder3Odd = 100 / totalUnder3
            let totalOver3Odd = 100 / totalOver3
            let totalUnder35Odd = 100 / totalUnder35
            let totalOver35Odd = 100 / totalOver35
            let totalUnder4Odd = 100 / totalUnder4
            let totalOver4Odd = 100 / totalOver4
            let individualTotalHomeOver1Odd = 100 / individualTotalHomeOver1
            let individualTotalAwayOver1Odd = 100 / individualTotalAwayOver1
            let individualTotalHomeUnder1Odd = 100 / individualTotalHomeUnder1
            let individualTotalAwayUnder1Odd = 100 / individualTotalAwayUnder1
            let individualTotalHomeOver15Odd = 100 / individualTotalHomeOver15
            let individualTotalAwayOver15Odd = 100 / individualTotalAwayOver15
            let individualTotalHomeUnder15Odd = 100 / individualTotalHomeUnder15
            let individualTotalAwayUnder15Odd = 100 / individualTotalAwayUnder15
            let individualTotalHomeOver2Odd = 100 / individualTotalHomeOver2
            let individualTotalAwayOver2Odd = 100 / individualTotalAwayOver2
            let individualTotalHomeUnder2Odd = 100 / individualTotalHomeUnder2
            let individualTotalAwayUnder2Odd = 100 / individualTotalAwayUnder2
            let score0_0Odd = 100 / score0_0
            let score1_0Odd = 100 / score1_0
            let score0_1Odd = 100 / score0_1
            let score1_1Odd = 100 / score1_1
            let score2_0Odd = 100 / score2_0
            let score0_2Odd = 100 / score0_2
            let score2_1Odd = 100 / score2_1
            let score1_2Odd = 100 / score1_2
            let score2_2Odd = 100 / score2_2
            let score3_0Odd = 100 / score3_0
            let score0_3Odd = 100 / score0_3
            let score3_1Odd = 100 / score3_1
            let score1_3Odd = 100 / score1_3
            let score3_2Odd = 100 / score3_2
            let score2_3Odd = 100 / score2_3
            let score3_3Odd = 100 / score3_3

            $(`.result1${el}`).append(`
<h4>Основные исходы:</h4>
        <div class = "bets_items">
        <div class = "bet_item"><p>П1</p><p class = "color">${winshomepoison.toFixed(2)}</p><p class = "color2"> (${winsHomeOdd.toFixed(2)})</p></div>
        <div class = "bet_item"><p>X</p><p class = "color">${draws1x2Poison.toFixed(2)} </p><p class = "color2">(${drawsOdd.toFixed(2)})</p></div>
        <div class = "bet_item"><p>П2</p><p class = "color">${winsAwayPoison.toFixed(2)} </p><p class = "color2">(${winsAwayOdd.toFixed(2)})</p></div>
        </div>
        <h4>Двойной исход:</h4>
        <div class = "bets_items">
        <div class = "bet_item"><p>1X</p><p class = "color">${winsOrDrawsHome.toFixed(2)} </p><p class = "color2">(${winsOrDrawsHomeOdd.toFixed(2)})</p></div>
        <div class = "bet_item"><p>2X</p><p class = "color">${winsOrDrawsAway.toFixed(2)}</p><p class = "color2"> (${winsOrDrawsAwayOdd.toFixed(2)})</p></div>
        </div>
        <h4>Обе забьют:</h4>
        <div class = "bets_items">
        <div class = "bet_item"><p>Да</p><p class = "color">${bothWillScoreYes.toFixed(2)} </p><p class = "color2">(${bothWillScoreYesOdd.toFixed(2)})</p></div>
        <div class = "bet_item"><p>Нет</p><p class = "color">${bothWillScoreNot.toFixed(2)}</p><p class = "color2"> (${bothWillScoreNotOdd.toFixed(2)})</p></div>
        </div>
        <h4>Форы:</h4>
        <div class = "bets_items">
        <div class = "bet_item"><p>Ф1 +1</p><p class = "color">${foraHomePlus1.toFixed(2)} </p><p class = "color2">(${foraHomePlus1Odd.toFixed(2)})</p></div>
        <div class = "bet_item"><p>Ф2 +1</p><p class = "color">${foraAwayPlus1.toFixed(2)} </p><p class = "color2">(${foraAwayPlus1Odd.toFixed(2)})</p></div>
        </div>
        <div class = "bets_items">
        <div class = "bet_item"><p>Ф1 0</p><p class = "color">${foraHome_0.toFixed(2)} </p><p class = "color2">(${foraHome_0Odd.toFixed(2)})</p></div>
        <div class = "bet_item"><p>Ф2 0</p><p class = "color">${foraAway_0.toFixed(2)} </p><p class = "color2">(${foraAway_0Odd.toFixed(2)})</p></div>
        </div>
        <div class = "bets_items">
        <div class = "bet_item"><p>Ф1 -1</p><p class = "color">${foraHome_1.toFixed(2)} </p><p class = "color2">(${foraHome_1Odd.toFixed(2)})</p></div>
        <div class = "bet_item"><p>Ф2 -1</p><p class = "color">${foraAway_1.toFixed(2)} </p><p class = "color2">(${foraAway_1Odd.toFixed(2)})</p></div>
        </div>
        <div class = "bets_items">
        <div class = "bet_item"><p>Ф1 -1.5</p><p class = "color">${foraHome_15.toFixed(2)} </p><p class = "color2">(${foraHome_15Odd.toFixed(2)})</p></div>
        <div class = "bet_item"><p>Ф2 -1.5</p><p class = "color">${foraAway_15.toFixed(2)} </p><p class = "color2">(${foraAway_15Odd.toFixed(2)})</p></div>
        </div>
        <div class = "bets_items">
        <div class = "bet_item"><p>Ф1 -2</p><p class = "color">${foraHome_2.toFixed(2)} </p><p class = "color2">(${foraHome_2Odd.toFixed(2)})</p></div>
        <div class = "bet_item"><p>Ф2 -2</p><p class = "color">${foraAway_2.toFixed(2)}</p><p class = "color2"> (${foraAway_2Odd.toFixed(2)})</p></div>
        </div>
        <h4>Тоталы:</h4>
        <div class = "bets_items">
        <div class = "bet_item"><p>ТМ 1.5</p><p class = "color">${totalUnder15.toFixed(2)} </p><p class = "color2"> (${totalUnder15Odd.toFixed(2)})</p></div>
        <div class = "bet_item"><p>ТБ 1.5</p><p class = "color">${totalOver15.toFixed(2)} </p><p class = "color2"> (${totalOver15Odd.toFixed(2)})</p></div>
        </div>
        <div class = "bets_items">
        <div class = "bet_item"><p>ТМ 2</p><p class = "color">${totalUnder2.toFixed(2)} </p><p class = "color2"> (${totalUnder2Odd.toFixed(2)})</p></div>
        <div class = "bet_item"><p>ТБ 2</p><p class = "color">${totalOver2.toFixed(2)}  </p><p class = "color2">(${totalOver2Odd.toFixed(2)})</p></div>
        </div>
        <div class = "bets_items">
        <div class = "bet_item"><p>ТМ 2.5</p><p class = "color">${totalUnder25.toFixed(2)}  </p><p class = "color2"> (${totalUnder25Odd.toFixed(2)})</p></div>
        <div class = "bet_item"><p>ТБ 2.5</p><p class = "color">${totalOver25.toFixed(2)} </p><p class = "color2"> (${totalOver25Odd.toFixed(2)})</p></div>
        </div>
        <div class = "bets_items">
        <div class = "bet_item"><p>ТМ 3</p><p class = "color">${totalUnder3.toFixed(2)}  </p><p class = "color2"> (${totalUnder3Odd.toFixed(2)})</p></div>
        <div class = "bet_item"><p>ТБ 3</p><p class = "color">${totalOver3.toFixed(2)}   </p><p class = "color2">(${totalOver3Odd.toFixed(2)})</p></div>
        </div>
        <div class = "bets_items">
        <div class = "bet_item"><p>ТМ 3.5</p><p class = "color">${totalUnder35.toFixed(2)}  </p><p class = "color2">(${totalUnder35Odd.toFixed(2)})</p></div>
        <div class = "bet_item"><p>ТБ 3.5</p><p class = "color">${totalOver35.toFixed(2)}  </p><p class = "color2">(${totalOver35Odd.toFixed(2)})</p></div>
        </div>
        <div class = "bets_items">
        <div class = "bet_item"><p>ТМ 4</p><p class = "color">${totalUnder4.toFixed(2)} </p><p class = "color2"> (${totalUnder4Odd.toFixed(2)})</p></div>
        <div class = "bet_item"><p>ТБ 4</p><p class = "color">${totalOver4.toFixed(2)}  </p><p class = "color2">(${totalOver4Odd.toFixed(2)})</p></div>
        </div>
        <h4>Индивидуальные тоталы:</h4>
        <div class = "bets_items">
        <div class = "bet_item"><p>ИТ1Б 1</p><p class = "color">${individualTotalHomeOver1.toFixed(2)}  </p><p class = "color2">(${individualTotalHomeOver1Odd.toFixed(2)})</p></div>
        <div class = "bet_item"><p>ИТ2Б 1</p><p class = "color">${individualTotalAwayOver1.toFixed(2)}  </p><p class = "color2">(${individualTotalAwayOver1Odd.toFixed(2)})</p></div>
        </div>
        <div class = "bets_items">
        <div class = "bet_item"><p>ИТ1М 1</p><p class = "color">${individualTotalHomeUnder1.toFixed(2)} </p><p class = "color2">(${individualTotalHomeUnder1Odd.toFixed(2)})</p></div>
        <div class = "bet_item"><p>ИТ2М 1</p><p class = "color">${individualTotalAwayUnder1.toFixed(2)} </p><p class = "color2"> (${individualTotalAwayUnder1Odd.toFixed(2)})</p></div>
        </div>
        <div class = "bets_items">
        <div class = "bet_item"><p>ИТ1Б 1.5</p><p class = "color">${individualTotalHomeOver15.toFixed(2)}  </p><p class = "color2">(${individualTotalHomeOver15Odd.toFixed(2)})</p></div>
        <div class = "bet_item"><p>ИТ2Б 1.5</p><p class = "color">${individualTotalAwayOver15.toFixed(2)}  </p><p class = "color2"> (${individualTotalAwayOver15Odd.toFixed(2)})</p></div>
        </div>
        <div class = "bets_items">
        <div class = "bet_item"><p>ИТ1М 1.5</p><p class = "color">${individualTotalHomeUnder15.toFixed(2)}</p><p class = "color2"> (${individualTotalHomeUnder15Odd.toFixed(2)})</p></div>
        <div class = "bet_item"><p>ИТ2М 1.5</p><p class = "color">${individualTotalAwayUnder15.toFixed(2)}  </p><p class = "color2">(${individualTotalAwayUnder15Odd.toFixed(2)})</p></div>
        </div>
        <div class = "bets_items">
        <div class = "bet_item"><p>ИТ1Б 2</p><p class = "color">${individualTotalHomeOver2.toFixed(2)}  </p><p class = "color2">(${individualTotalHomeOver2Odd.toFixed(2)})</p></div>
        <div class = "bet_item"><p>ИТ2Б 2</p><p class = "color">${individualTotalAwayOver2.toFixed(2)}  </p><p class = "color2">  (${individualTotalAwayOver2Odd.toFixed(2)})</p></div>
        </div>
        <div class = "bets_items">
        <div class = "bet_item"><p>ИТ1М 2</p><p class = "color">${individualTotalHomeUnder2.toFixed(2)}  </p><p class = "color2">(${individualTotalHomeUnder2Odd.toFixed(2)})</p></div>
        <div class = "bet_item"><p>ИТ2М 2</p><p class = "color">${individualTotalAwayUnder2.toFixed(2)}   </p><p class = "color2"> (${individualTotalAwayUnder2Odd.toFixed(2)})</p></div>
        </div>
        <h4>Победит и не пропустит:</h4>
        <div class = "bets_items">
        <div class = "bet_item"><p>1 команда</p><p class = "color">${willWinAndWillNotMissHome.toFixed(2)} </p><p class = "color2">(${willWinAndWillNotMissHomeOdd.toFixed(2)})</p></div>
        <div class = "bet_item"><p>2 команда</p><p class = "color">${willWinAndWillNotMissAway.toFixed(2)} </p><p class = "color2">(${willWinAndWillNotMissAwayOdd.toFixed(2)})</p></div>
        </div>
        <h4>Кол-во голов:</h4>
        <div class = "bets_items">
        <div class = "bet_item"><p>0 или 1</p><p class = "color">${numberOfHeads0_1.toFixed(2)} </p><p class = "color2">(${numberOfHeads0_1Odd.toFixed(2)})</p></div>
        <div class = "bet_item"><p>2 или 3</p><p class = "color">${numberOfHeads2_3.toFixed(2)} </p><p class = "color2">(${numberOfHeads2_3Odd.toFixed(2)})</p></div>
        </div>
        </div>
        <h4>Не проиграет и тотал</h4>
        <div class = "bets_items">
        <div class = "bet_item"><p>1x и ТМ 2.5</p><p class = "color">${homeOrDrawsAndTotalUnder25.toFixed(2)} </p><p class = "color2">(${homeOrDrawsAndTotalUnder25Odd.toFixed(2)})</p></div>
        <div class = "bet_item"><p>2x и ТМ 2.5</p><p class = "color">${awayOrDrawsAndTotalUnder25.toFixed(2)} </p><p class = "color2">(${awayOrDrawsAndTotalUnder25Odd.toFixed(2)})</p></div>
        </div>
        <div class = "bets_items">
        <div class = "bet_item"><p>1x и ТМ 3.5</p><p class = "color">${homeOrDrawsAndTotalUnder35.toFixed(2)} </p><p class = "color2">(${homeOrDrawsAndTotalUnder35Odd.toFixed(2)})</p></div>
        <div class = "bet_item"><p>2x и ТМ 3.5</p><p class = "color">${awayOrDrawsAndTotalUnder35.toFixed(2)} </p><p class = "color2">(${awayOrDrawsAndTotalUnder35Odd.toFixed(2)})</p></div>
        </div>
        <div class = "bets_items">
        <div class = "bet_item"><p>1x и ТМ 4.5</p><p class = "color">${homeOrDrawsAndTotalUnder45.toFixed(2)} </p><p class = "color2">(${homeOrDrawsAndTotalUnder45Odd.toFixed(2)})</p></div>
        <div class = "bet_item"><p>2x и ТМ 4.5</p><p class = "color">${awayOrDrawsAndTotalUnder45.toFixed(2)} </p><p class = "color2">(${awayOrDrawsAndTotalUnder45Odd.toFixed(2)})</p></div>
        </div>
        <div class = "bets_items">
        <div class = "bet_item"><p>1x и ТБ 2.5</p><p class = "color">${homeOrDrawsAndTotalOver25.toFixed(2)} </p><p class = "color2">(${homeOrDrawsAndTotalOver25Odd.toFixed(2)})</p></div>
        <div class = "bet_item"><p>2x и ТБ 2.5</p><p class = "color">${awayOrDrawsAndTotalOver25.toFixed(2)} </p><p class = "color2">(${awayOrDrawsAndTotalOver25Odd.toFixed(2)})</p></div>
        </div>
        <div class = "bets_items">
        <div class = "bet_item"><p>1x и ТБ 3.5</p><p class = "color">${homeOrDrawsAndTotalOver35.toFixed(2)} </p><p class = "color2">(${homeOrDrawsAndTotalOver35Odd.toFixed(2)})</p></div>
        <div class = "bet_item"><p>2x и ТБ 3.5</p><p class = "color">${awayOrDrawsAndTotalOver35.toFixed(2)} </p><p class = "color2">(${awayOrDrawsAndTotalOver35Odd.toFixed(2)})</p></div>
        </div>
        <div class = "bets_items">
        <div class = "bet_item"><p>1x и ТБ 4.5</p><p class = "color">${homeOrDrawsAndTotalOver45.toFixed(2)} </p><p class = "color2">(${homeOrDrawsAndTotalOver45Odd.toFixed(2)})</p></div>
        <div class = "bet_item"><p>2x и ТБ 4.5</p><p class = "color">${awayOrDrawsAndTotalOver45.toFixed(2)} </p><p class = "color2">(${awayOrDrawsAndTotalOver45Odd.toFixed(2)})</p></div>
        </div>
        
        <h4>Счета:</h4>
        <div class = "bets_items">
        <div class = "bet_item"><p>0:0</p><p class = "color">${score0_0.toFixed(2)} </p><p class = "color2">(${score0_0Odd.toFixed(2)})</p></div>
        <div class = "bet_item"><p>1:1</p><p class = "color">${score1_1.toFixed(2)} </p><p class = "color2">(${score1_1Odd.toFixed(2)})</p></div>
        </div>
        <div class = "bets_items">
        <div class = "bet_item"><p>2:2</p><p class = "color">${score2_2.toFixed(2)} </p><p class = "color2">(${score2_2Odd.toFixed(2)})</p></div>
        <div class = "bet_item"><p>3:3</p><p class = "color">${score3_3.toFixed(2)} </p><p class = "color2">(${score3_3Odd.toFixed(2)})</p></div>
        </div>
        <div class = "bets_items">
        <div class = "bet_item"><p>1:0</p><p class = "color">${score1_0.toFixed(2)} </p><p class = "color2">(${score1_0Odd.toFixed(2)})</p></div>
        <div class = "bet_item"><p>0:1</p><p class = "color">${score0_1.toFixed(2)} </p><p class = "color2">(${score0_1Odd.toFixed(2)})</p></div>
        </div>
        <div class = "bets_items">
        <div class = "bet_item"><p>2:0</p><p class = "color">${score2_0.toFixed(2)} </p><p class = "color2">(${score2_0Odd.toFixed(2)})</p></div>
        <div class = "bet_item"><p>0:2</p><p class = "color">${score0_2.toFixed(2)} </p><p class = "color2">(${score0_2Odd.toFixed(2)})</p></div>
        </div>
        <div class = "bets_items">
        <div class = "bet_item"><p>2:1</p><p class = "color">${score2_1.toFixed(2)} </p><p class = "color2">(${score2_1Odd.toFixed(2)})</p></div>
        <div class = "bet_item"><p>1:2</p><p class = "color">${score1_2.toFixed(2)} </p><p class = "color2">(${score1_2Odd.toFixed(2)})</p></div>
        </div>
        <div class = "bets_items">
        <div class = "bet_item"><p>3:0</p><p class = "color">${score3_0.toFixed(2)} </p><p class = "color2">(${score3_0Odd.toFixed(2)})</p></div>
        <div class = "bet_item"><p>0:3</p><p class = "color">${score0_3.toFixed(2)} </p><p class = "color2">(${score0_3Odd.toFixed(2)})</p></div>
        </div>
        <div class = "bets_items">
        <div class = "bet_item"><p>3:1</p><p class = "color">${score3_1.toFixed(2)} </p><p class = "color2">(${score3_1Odd.toFixed(2)})</p></div>
        <div class = "bet_item"><p>1:3</p><p class = "color">${score1_3.toFixed(2)} </p><p class = "color2">(${score1_3Odd.toFixed(2)})</p></div>
        </div>
        <div class = "bets_items">
        <div class = "bet_item"><p>3:2</p><p class = "color">${score3_2.toFixed(2)} </p><p class = "color2">(${score3_2Odd.toFixed(2)})</p></div>
        <div class = "bet_item"><p>2:3</p><p class = "color">${score2_3.toFixed(2)} </p><p class = "color2">(${score2_3Odd.toFixed(2)})</p></div>
        </div>
        `)

        }


        // переменные из импутов по голам
        let glsHome = document.querySelector(`.glsTeamHome_input${el}`)
        let glsAway = document.querySelector(`.glsTeamAway_input${el}`)
        let glsAGHome = document.querySelector(`.glsAgainstTeamHome_input${el}`)
        let glsAGAway = document.querySelector(`.glsAgainstTeamAway_input${el}`)

        let possessionTeamHome = document.querySelector(`.poss1_Home_input${el}`)
        let possessionTeamAway = document.querySelector(`.poss1_Away_input${el}`)
        let possessionAgainstTeamHome = document.querySelector(`.poss1_AgHome_input${el}`)
        let possessionAgainstTeamAway = document.querySelector(`.poss1_AgAway_input${el}`)

        let ShAvgHome = document.querySelector(`.sh1_Home_input${el}`)
        let ShAvgAway = document.querySelector(`.sh1_Away_input${el}`)
        let ShAvgAgHome = document.querySelector(`.sh1_AgHome_input${el}`)
        let ShAvgAgAway = document.querySelector(`.sh1_AgAway_input${el}`)

        let SotAvgHome = document.querySelector(`.sot1_Home_input${el}`)
        let SotAvgAway = document.querySelector(`.sot1_Away_input${el}`)
        let SotAvgAgHome = document.querySelector(`.sot1_AgHome_input${el}`)
        let SotAvgAgAway = document.querySelector(`.sot1_AgAway_input${el}`)

        let g_shHome = document.querySelector(`.g_sh1_Home_input${el}`)
        let g_shAway = document.querySelector(`.g_sh1_Away_input${el}`)
        let g_shAgHome = document.querySelector(`.g_sh1_AgHome_input${el}`)
        let g_shAgAway = document.querySelector(`.g_sh1_AgAway_input${el}`)

        let g_sotHome = document.querySelector(`.g_sot1_Home_input${el}`)
        let g_sotAway = document.querySelector(`.g_sot1_Away_input${el}`)
        let g_sotAgHome = document.querySelector(`.g_sot1_AgHome_input${el}`)
        let g_sotAgAway = document.querySelector(`.g_sot1_AgAway_input${el}`)

        let btnCalcPoison = document.querySelector(`.btnCalcPoison${el}`)
        btnCalcPoison.addEventListener("click", () => {
            calcPoisonDistributionOnGoals(el)
        })

        function calcPoisonDistributionOnGoals() {

            // Среднее владение мячем
            let possessionHome = (Number(possessionTeamHome.value) + Number(possessionAgainstTeamAway.value)) / 2
            let possessionAway = (Number(possessionTeamAway.value) + Number(possessionAgainstTeamHome.value)) / 2
            //    ожидаемое владение мячем
            let maxNumberPossesion = Math.max(possessionHome, possessionAway)
            let differencePossession = 0;
            let expectedPossessionHome = 0;
            let expectedPossessionAway = 0;
            if (possessionHome == maxNumberPossesion) {
                differencePossession = (possessionHome - possessionAway) / 2
                expectedPossessionHome = 50 + differencePossession
                expectedPossessionAway = 50 - differencePossession
            }
            if (possessionAway == maxNumberPossesion) {
                differencePossession = (possessionAway - possessionHome) / 2
                expectedPossessionHome = 50 - differencePossession
                expectedPossessionAway = 50 + differencePossession
            }

            // Ожидаемое кооличество голов 
            let expectedGlsHome = (Number(glsHome.value) + Number(glsAGAway.value)) / 2
            let expectedGlsAway = (Number(glsAway.value) + Number(glsAGHome.value)) / 2

            // ожидаемое количество G/sh 
            let expectedG_ShHome = (Number(g_shHome.value) + Number(g_shAgAway.value)) / 2
            let expectedG_ShAway = (Number(g_shAway.value) + Number(g_shAgHome.value)) / 2

            // ожидаемое количество G/sot 
            let expectedG_SotHome = (Number(g_sotHome.value) + Number(g_sotAgAway.value)) / 2
            let expectedG_SotAway = (Number(g_sotAway.value) + Number(g_sotAgHome.value)) / 2

            // ожидаемое количество ударов 
            let expectedShHome = (Number(ShAvgHome.value) + Number(ShAvgAgAway.value)) / 2
            let expectedShAway = (Number(ShAvgAway.value) + Number(ShAvgAgHome.value)) / 2

            // ожидаемое количество ударов в створ
            let expectedSotHome = (Number(SotAvgHome.value) + Number(SotAvgAgAway.value)) / 2
            let expectedSotAway = (Number(SotAvgAway.value) + Number(SotAvgAgHome.value)) / 2

            // Ожидаемое количество ударов по владению
            let colShotsForHome2 = expectedPossessionHome * Number(ShAvgHome.value) / Number(possessionTeamHome.value)
            let colShotsAgainstAway2 = expectedPossessionHome * Number(ShAvgAgAway.value) / Number(possessionTeamAway.value)
            let expectedShotsHome2 = (colShotsForHome2 + colShotsAgainstAway2) / 2;

            let colShotsForAway2 = expectedPossessionAway * Number(ShAvgAway.value) / Number(possessionTeamAway.value)
            let colShotsAgainstHome2 = expectedPossessionAway * Number(ShAvgAgHome.value) / Number(possessionTeamHome.value)
            let expectedShotsAway2 = (colShotsForAway2 + colShotsAgainstHome2) / 2
            console.log(`владение удары1 ${expectedShotsHome2}`)
            console.log(`владение удары2 ${expectedShotsAway2}`)

            // Ожидаемое количество ударов
            let expectedShotsHome = (expectedShotsHome2 + expectedShHome) / 2
            let expectedShotsAway = (expectedShotsAway2 + expectedShAway) / 2
            console.log(`удары ожидаемые1 ${expectedShotsHome}`)
            console.log(`удары ожидаемые2 ${expectedShotsAway}`)

            // ожидаемые голы
            let goals1Home = expectedShotsHome * expectedG_ShHome;
            let goals1Away = expectedShotsAway * expectedG_ShAway;

            let goals2Home = expectedSotHome * expectedG_SotHome;
            let goals2Away = expectedSotAway * expectedG_SotAway;

            // Ожидаемое количество голов по статистике
            let expectedGoalsHomeStatistics = (goals1Home + goals2Home + expectedGlsHome) / 3
            let expectedGoalsAwayStatistics = (goals1Away + goals2Away + expectedGlsAway) / 3
            console.log(`голы ожидаемые1  ${expectedGoalsHomeStatistics}`)
            console.log(`голы ожидаемые1  ${expectedGoalsAwayStatistics}`)

            let expectedGoalsHome = expectedGoalsHomeStatistics
            let expectedGoalsAway = expectedGoalsAwayStatistics
            console.log(expectedGoalsHome)
            console.log(expectedGoalsAway)

            // рассчиываем распределение паусона все матчи

            let poisonGoals0Home = expectedGoalsHome ** 0 * 2.71828 ** -expectedGoalsHome / 1 * 100;
            let poisonGoals0Away = expectedGoalsAway ** 0 * 2.71828 ** -expectedGoalsAway / 1 * 100;

            let poisonGoals1Home = expectedGoalsHome ** 1 * 2.71828 ** -expectedGoalsHome / 1 * 100;
            let poisonGoals1Away = expectedGoalsAway ** 1 * 2.71828 ** -expectedGoalsAway / 1 * 100;

            let poisonGoals2Home = expectedGoalsHome ** 2 * 2.71828 ** -expectedGoalsHome / 2 * 100;
            let poisonGoals2Away = expectedGoalsAway ** 2 * 2.71828 ** -expectedGoalsAway / 2 * 100;

            let poisonGoals3Home = expectedGoalsHome ** 3 * 2.71828 ** -expectedGoalsHome / 6 * 100;
            let poisonGoals3Away = expectedGoalsAway ** 3 * 2.71828 ** -expectedGoalsAway / 6 * 100;

            let poisonGoals4Home = expectedGoalsHome ** 4 * 2.71828 ** -expectedGoalsHome / 24 * 100;
            let poisonGoals4Away = expectedGoalsAway ** 4 * 2.71828 ** -expectedGoalsAway / 24 * 100;

            let poisonGoals5Home = expectedGoalsHome ** 5 * 2.71828 ** -expectedGoalsHome / 120 * 100;
            let poisonGoals5Away = expectedGoalsAway ** 5 * 2.71828 ** -expectedGoalsAway / 120 * 100;

             // рассчитываем вероятности прохода ставки по распределению паусона
             let winshomepoison = ((poisonGoals1Home * poisonGoals0Away) / 100) + ((poisonGoals2Home * poisonGoals0Away) / 100) + ((poisonGoals3Home * poisonGoals0Away) / 100) + ((poisonGoals4Home * poisonGoals0Away) / 100) + ((poisonGoals5Home * poisonGoals0Away) / 100) + ((poisonGoals2Home * poisonGoals1Away) / 100) + ((poisonGoals3Home * poisonGoals1Away) / 100) + ((poisonGoals4Home * poisonGoals1Away) / 100) + ((poisonGoals5Home * poisonGoals1Away) / 100) + ((poisonGoals3Home * poisonGoals2Away) / 100) + ((poisonGoals4Home * poisonGoals2Away) / 100) + ((poisonGoals5Home * poisonGoals2Away) / 100) + ((poisonGoals4Home * poisonGoals3Away) / 100) + ((poisonGoals5Home * poisonGoals3Away) / 100) + ((poisonGoals5Home * poisonGoals4Away) / 100)
             let draws1x2Poison = ((poisonGoals0Home * poisonGoals0Away) / 100) + ((poisonGoals1Home * poisonGoals1Away) / 100) + ((poisonGoals2Home * poisonGoals2Away) / 100) + ((poisonGoals3Home * poisonGoals3Away) / 100) + ((poisonGoals4Home * poisonGoals4Away) / 100) + ((poisonGoals5Home * poisonGoals5Away) / 100);
             let winsAwayPoison = ((poisonGoals0Home * poisonGoals1Away) / 100) + ((poisonGoals0Home * poisonGoals2Away) / 100) + ((poisonGoals0Home * poisonGoals3Away) / 100) + ((poisonGoals0Home * poisonGoals4Away) / 100) + ((poisonGoals0Home * poisonGoals5Away) / 100) + ((poisonGoals1Home * poisonGoals2Away) / 100) + ((poisonGoals1Home * poisonGoals3Away) / 100) + ((poisonGoals1Home * poisonGoals4Away) / 100) + ((poisonGoals1Home * poisonGoals5Away) / 100) + ((poisonGoals2Home * poisonGoals3Away) / 100) + ((poisonGoals2Home * poisonGoals4Away) / 100) + ((poisonGoals2Home * poisonGoals5Away) / 100) + ((poisonGoals3Home * poisonGoals4Away) / 100) + ((poisonGoals3Home * poisonGoals5Away) / 100) + ((poisonGoals4Home * poisonGoals5Away) / 100)
 
             let winsOrDrawsHome = winshomepoison + draws1x2Poison;
             let winsOrDrawsAway = winsAwayPoison + draws1x2Poison;
 
             let score0_0 = (poisonGoals0Home * poisonGoals0Away) / 100
             let score1_0 = (poisonGoals1Home * poisonGoals0Away) / 100
             let score0_1 = (poisonGoals0Home * poisonGoals1Away) / 100
             let score1_1 = (poisonGoals1Home * poisonGoals1Away) / 100
             let score2_0 = (poisonGoals2Home * poisonGoals0Away) / 100
             let score0_2 = (poisonGoals0Home * poisonGoals2Away) / 100
             let score2_1 = (poisonGoals2Home * poisonGoals1Away) / 100
             let score1_2 = (poisonGoals1Home * poisonGoals2Away) / 100
             let score2_2 = (poisonGoals2Home * poisonGoals2Away) / 100
             let score3_0 = (poisonGoals3Home * poisonGoals0Away) / 100
             let score0_3 = (poisonGoals0Home * poisonGoals3Away) / 100
             let score3_1 = (poisonGoals3Home * poisonGoals1Away) / 100
             let score1_3 = (poisonGoals1Home * poisonGoals3Away) / 100
             let score3_2 = (poisonGoals3Home * poisonGoals2Away) / 100
             let score2_3 = (poisonGoals2Home * poisonGoals3Away) / 100
             let score3_3 = (poisonGoals3Home * poisonGoals3Away) / 100
 
             let totalUnder15 = ((poisonGoals0Home * poisonGoals0Away) / 100) + ((poisonGoals1Home * poisonGoals0Away) / 100) + ((poisonGoals0Home * poisonGoals1Away) / 100);
             let totalOver15 = 100 - totalUnder15;
             let totalUnder2 = totalUnder15 + ((poisonGoals2Home * poisonGoals0Away) / 100) + (((poisonGoals0Home * poisonGoals2Away) / 100) / 2) + (((poisonGoals1Home * poisonGoals1Away) / 100) / 2);
             let totalOver2 = 100 - totalUnder2;
             let totalUnder25 = ((poisonGoals0Home * poisonGoals0Away) / 100) + ((poisonGoals1Home * poisonGoals0Away) / 100) + ((poisonGoals0Home * poisonGoals1Away) / 100) + ((poisonGoals1Home * poisonGoals1Away) / 100) + ((poisonGoals2Home * poisonGoals0Away) / 100) + ((poisonGoals0Home * poisonGoals2Away) / 100);
             let totalOver25 = 100 - totalUnder25;
             let totalUnder3 = totalUnder25 + (((poisonGoals3Home * poisonGoals0Away) / 100) / 2) + (((poisonGoals0Home * poisonGoals3Away) / 100) / 2) + (((poisonGoals2Home * poisonGoals1Away) / 100) / 2) + (((poisonGoals1Home * poisonGoals2Away) / 100) / 2)
             let totalOver3 = 100 - totalUnder3;
             let totalUnder35 = ((poisonGoals0Home * poisonGoals0Away) / 100) + ((poisonGoals1Home * poisonGoals0Away) / 100) + ((poisonGoals0Home * poisonGoals1Away) / 100) + ((poisonGoals1Home * poisonGoals1Away) / 100) + ((poisonGoals2Home * poisonGoals0Away) / 100) + ((poisonGoals0Home * poisonGoals2Away) / 100) + ((poisonGoals2Home * poisonGoals1Away) / 100) + ((poisonGoals1Home * poisonGoals2Away) / 100) + ((poisonGoals3Home * poisonGoals0Away) / 100) + ((poisonGoals0Home * poisonGoals3Away) / 100);
             let totalOver35 = 100 - totalUnder35;
             let totalUnder4 = totalUnder35 + (((poisonGoals4Home * poisonGoals0Away) / 100) / 2) + (((poisonGoals0Home * poisonGoals4Away) / 100) / 2) + (((poisonGoals3Home * poisonGoals1Away) / 100) / 2) + (((poisonGoals1Home * poisonGoals3Away) / 100) / 2) + (((poisonGoals2Home * poisonGoals2Away) / 100) / 2)
             let totalOver4 = 100 - totalUnder4;
             let totalUnder45 = totalUnder35 + ((poisonGoals2Home * poisonGoals2Away) / 100) + ((poisonGoals3Home * poisonGoals1Away) / 100) + ((poisonGoals1Home * poisonGoals3Away) / 100) + ((poisonGoals4Home * poisonGoals0Away) / 100) + ((poisonGoals0Home * poisonGoals4Away) / 100)
             let totalOver45 = 100 - totalUnder45
             let bothWillScoreNot = ((poisonGoals0Home * poisonGoals0Away) / 100) + ((poisonGoals1Home * poisonGoals0Away) / 100) + ((poisonGoals2Home * poisonGoals0Away) / 100) + ((poisonGoals3Home * poisonGoals0Away) / 100) + ((poisonGoals4Home * poisonGoals0Away) / 100) + ((poisonGoals5Home * poisonGoals0Away) / 100) + ((poisonGoals0Home * poisonGoals1Away) / 100) + ((poisonGoals0Home * poisonGoals2Away) / 100) + ((poisonGoals0Home * poisonGoals3Away) / 100) + ((poisonGoals0Home * poisonGoals4Away) / 100) + ((poisonGoals0Home * poisonGoals5Away) / 100);
             let bothWillScoreYes = 100 - bothWillScoreNot;
             let individualTotalHomeOver1 = poisonGoals2Home + poisonGoals3Home + poisonGoals4Home + poisonGoals5Home + (poisonGoals1Home / 2);
             let individualTotalAwayOver1 = poisonGoals2Away + poisonGoals3Away + poisonGoals4Away + poisonGoals5Away + (poisonGoals1Away / 2);
             let individualTotalHomeUnder1 = poisonGoals0Home + (poisonGoals1Home / 2);
             let individualTotalAwayUnder1 = poisonGoals0Away + (poisonGoals1Away / 2);
             let individualTotalHomeOver15 = poisonGoals2Home + poisonGoals3Home + poisonGoals4Home + poisonGoals5Home;
             let individualTotalAwayOver15 = poisonGoals2Away + poisonGoals3Away + poisonGoals4Away + poisonGoals5Away;
             let individualTotalHomeUnder15 = poisonGoals0Home + poisonGoals1Home;
             let individualTotalAwayUnder15 = poisonGoals0Away + poisonGoals1Away;
             let individualTotalHomeOver2 = (poisonGoals2Home / 2) + poisonGoals3Home + poisonGoals4Home + poisonGoals5Home;
             let individualTotalAwayOver2 = (poisonGoals2Away / 2) + poisonGoals3Away + poisonGoals4Away + poisonGoals5Away;
             let individualTotalHomeUnder2 = poisonGoals0Home + poisonGoals1Home + (poisonGoals2Home / 2);
             let individualTotalAwayUnder2 = poisonGoals0Away + poisonGoals1Away + (poisonGoals2Away / 2);
             let individualTotalHomeOver25 = poisonGoals3Home + poisonGoals4Home + poisonGoals5Home;
             let individualTotalAwayOver25 = poisonGoals3Away + poisonGoals4Away + poisonGoals5Away;
             let individualTotalHomeUnder25 = poisonGoals0Home + poisonGoals1Home + poisonGoals2Home;
             let individualTotalAwayUnder25 = poisonGoals0Away + poisonGoals1Away + poisonGoals2Away;
             let foraHome_1 = ((poisonGoals2Home * poisonGoals0Away) / 100) + ((poisonGoals3Home * poisonGoals0Away) / 100) + ((poisonGoals3Home * poisonGoals1Away) / 100) + ((poisonGoals4Home * poisonGoals0Away) / 100) + ((poisonGoals4Home * poisonGoals1Away) / 100) + ((poisonGoals4Home * poisonGoals2Away) / 100) + ((poisonGoals5Home * poisonGoals0Away) / 100) + ((poisonGoals5Home * poisonGoals1Away) / 100) + ((poisonGoals5Home * poisonGoals2Away) / 100) + ((poisonGoals5Home * poisonGoals3Away) / 100) +
                 ((((poisonGoals2Home * poisonGoals1Away) / 100) + ((poisonGoals3Home * poisonGoals2Away) / 100) + ((poisonGoals4Home * poisonGoals3Away) / 100) + ((poisonGoals5Home * poisonGoals4Away) / 100) + ((poisonGoals1Home * poisonGoals0Away) / 100)) / 2)
             let foraHome_0 = ((poisonGoals1Home * poisonGoals0Away) / 100) + ((poisonGoals2Home * poisonGoals1Away) / 100) + ((poisonGoals2Home * poisonGoals0Away) / 100) + ((poisonGoals3Home * poisonGoals0Away) / 100) + ((poisonGoals3Home * poisonGoals2Away) / 100)  + ((poisonGoals3Home * poisonGoals1Away) / 100) + ((poisonGoals4Home * poisonGoals0Away) / 100) + ((poisonGoals4Home * poisonGoals1Away) / 100) + ((poisonGoals4Home * poisonGoals2Away) / 100) + ((poisonGoals4Home * poisonGoals3Away) / 100) + ((poisonGoals5Home * poisonGoals0Away) / 100) + ((poisonGoals5Home * poisonGoals1Away) / 100) + ((poisonGoals5Home * poisonGoals2Away) / 100) + ((poisonGoals5Home * poisonGoals3Away) / 100) + ((poisonGoals5Home * poisonGoals4Away) / 100) +
                 ((((poisonGoals2Home * poisonGoals2Away) / 100) + ((poisonGoals3Home * poisonGoals3Away) / 100) + ((poisonGoals0Home * poisonGoals0Away) / 100) + ((poisonGoals1Home * poisonGoals1Away) / 100) + ((poisonGoals4Home * poisonGoals4Away) / 100) + ((poisonGoals5Home * poisonGoals5Away) / 100)) / 2)
             let foraHomePlus1 = ((poisonGoals1Home * poisonGoals0Away) / 100) + ((poisonGoals2Home * poisonGoals1Away) / 100) + ((poisonGoals2Home * poisonGoals0Away) / 100) + ((poisonGoals3Home * poisonGoals0Away) / 100) + ((poisonGoals3Home * poisonGoals2Away) / 100)  + ((poisonGoals3Home * poisonGoals1Away) / 100) + ((poisonGoals4Home * poisonGoals0Away) / 100) + ((poisonGoals4Home * poisonGoals1Away) / 100) + ((poisonGoals4Home * poisonGoals2Away) / 100) + ((poisonGoals4Home * poisonGoals3Away) / 100) + ((poisonGoals5Home * poisonGoals0Away) / 100) + ((poisonGoals5Home * poisonGoals1Away) / 100) + ((poisonGoals5Home * poisonGoals2Away) / 100) + ((poisonGoals5Home * poisonGoals3Away) / 100) + ((poisonGoals5Home * poisonGoals4Away) / 100) + ((poisonGoals2Home * poisonGoals2Away) / 100) + ((poisonGoals3Home * poisonGoals3Away) / 100) + ((poisonGoals0Home * poisonGoals0Away) / 100) + ((poisonGoals1Home * poisonGoals1Away) / 100) + ((poisonGoals4Home * poisonGoals4Away) / 100) + ((poisonGoals5Home * poisonGoals5Away) / 100) + 
                 ((((poisonGoals1Home * poisonGoals2Away) / 100) + ((poisonGoals2Home * poisonGoals3Away) / 100) + ((poisonGoals0Home * poisonGoals1Away) / 100) + ((poisonGoals3Home * poisonGoals4Away) / 100) + ((poisonGoals4Home * poisonGoals5Away) / 100)) / 2)
             let foraAway_1 = ((poisonGoals0Home * poisonGoals2Away) / 100) + ((poisonGoals0Home * poisonGoals3Away) / 100) + ((poisonGoals1Home * poisonGoals3Away) / 100) + ((poisonGoals0Home * poisonGoals4Away) / 100) + ((poisonGoals1Home * poisonGoals4Away) / 100) + ((poisonGoals2Home * poisonGoals4Away) / 100) + ((poisonGoals0Home * poisonGoals5Away) / 100) + ((poisonGoals1Home * poisonGoals5Away) / 100) + ((poisonGoals2Home * poisonGoals5Away) / 100) + ((poisonGoals3Home * poisonGoals5Away) / 100) +
                 ((((poisonGoals1Home * poisonGoals2Away) / 100) + ((poisonGoals2Home * poisonGoals3Away) / 100) + ((poisonGoals3Home * poisonGoals4Away) / 100) + ((poisonGoals4Home * poisonGoals5Away) / 100) + ((poisonGoals0Home * poisonGoals1Away) / 100)) / 2)
             let foraAway_0 = ((poisonGoals0Home * poisonGoals1Away) / 100)  + ((poisonGoals1Home * poisonGoals2Away) / 100)  + ((poisonGoals0Home * poisonGoals2Away) / 100) + ((poisonGoals0Home * poisonGoals3Away) / 100) + ((poisonGoals1Home * poisonGoals3Away) / 100) + ((poisonGoals2Home * poisonGoals3Away) / 100) + ((poisonGoals0Home * poisonGoals4Away) / 100) + ((poisonGoals1Home * poisonGoals4Away) / 100) + ((poisonGoals2Home * poisonGoals4Away) / 100) + ((poisonGoals3Home * poisonGoals4Away) / 100) + ((poisonGoals0Home * poisonGoals5Away) / 100) + ((poisonGoals1Home * poisonGoals5Away) / 100) + ((poisonGoals2Home * poisonGoals5Away) / 100) + ((poisonGoals3Home * poisonGoals5Away) / 100) + ((poisonGoals4Home * poisonGoals5Away) / 100) +
                 ((((poisonGoals2Home * poisonGoals2Away) / 100) + ((poisonGoals0Home * poisonGoals0Away) / 100) + ((poisonGoals1Home * poisonGoals1Away) / 100) + ((poisonGoals3Home * poisonGoals3Away) / 100) + ((poisonGoals4Home * poisonGoals4Away) / 100) + ((poisonGoals5Home * poisonGoals5Away) / 100)) / 2)
             let foraAwayPlus1 = ((poisonGoals0Home * poisonGoals1Away) / 100)  + ((poisonGoals1Home * poisonGoals2Away) / 100)  + ((poisonGoals0Home * poisonGoals2Away) / 100) + ((poisonGoals0Home * poisonGoals3Away) / 100) + ((poisonGoals1Home * poisonGoals3Away) / 100) + ((poisonGoals2Home * poisonGoals3Away) / 100) + ((poisonGoals0Home * poisonGoals4Away) / 100) + ((poisonGoals1Home * poisonGoals4Away) / 100) + ((poisonGoals2Home * poisonGoals4Away) / 100) + ((poisonGoals3Home * poisonGoals4Away) / 100) + ((poisonGoals0Home * poisonGoals5Away) / 100) + ((poisonGoals1Home * poisonGoals5Away) / 100) + ((poisonGoals2Home * poisonGoals5Away) / 100) + ((poisonGoals3Home * poisonGoals5Away) / 100) + ((poisonGoals4Home * poisonGoals5Away) / 100) + ((poisonGoals2Home * poisonGoals2Away) / 100) + ((poisonGoals0Home * poisonGoals0Away) / 100) + ((poisonGoals1Home * poisonGoals1Away) / 100) + ((poisonGoals3Home * poisonGoals3Away) / 100) + ((poisonGoals4Home * poisonGoals4Away) / 100) + ((poisonGoals5Home * poisonGoals5Away) / 100) +
                 ((((poisonGoals2Home * poisonGoals1Away) / 100) + ((poisonGoals1Home * poisonGoals0Away) / 100) + ((poisonGoals3Home * poisonGoals2Away) / 100) + ((poisonGoals4Home * poisonGoals3Away) / 100) + ((poisonGoals5Home * poisonGoals4Away) / 100)) / 2)    
             let foraHome_15 = ((poisonGoals2Home * poisonGoals0Away) / 100) + ((poisonGoals3Home * poisonGoals0Away) / 100) + ((poisonGoals3Home * poisonGoals1Away) / 100) + ((poisonGoals4Home * poisonGoals0Away) / 100) + ((poisonGoals4Home * poisonGoals1Away) / 100) + ((poisonGoals4Home * poisonGoals2Away) / 100) + ((poisonGoals5Home * poisonGoals0Away) / 100) + ((poisonGoals5Home * poisonGoals1Away) / 100) + ((poisonGoals5Home * poisonGoals2Away) / 100) + ((poisonGoals5Home * poisonGoals3Away) / 100);
             let foraAway_15 = ((poisonGoals0Home * poisonGoals2Away) / 100) + ((poisonGoals0Home * poisonGoals3Away) / 100) + ((poisonGoals1Home * poisonGoals3Away) / 100) + ((poisonGoals0Home * poisonGoals4Away) / 100) + ((poisonGoals1Home * poisonGoals4Away) / 100) + ((poisonGoals2Home * poisonGoals4Away) / 100) + ((poisonGoals0Home * poisonGoals5Away) / 100) + ((poisonGoals1Home * poisonGoals5Away) / 100) + ((poisonGoals2Home * poisonGoals5Away) / 100) + ((poisonGoals3Home * poisonGoals5Away) / 100);
             let foraHome_2 = ((poisonGoals2Home * poisonGoals0Away) / 100) + ((poisonGoals3Home * poisonGoals0Away) / 100) + ((poisonGoals3Home * poisonGoals1Away) / 100) + ((poisonGoals4Home * poisonGoals0Away) / 100) + ((poisonGoals4Home * poisonGoals1Away) / 100) + ((poisonGoals4Home * poisonGoals2Away) / 100) + ((poisonGoals5Home * poisonGoals0Away) / 100) + ((poisonGoals5Home * poisonGoals1Away) / 100) + ((poisonGoals5Home * poisonGoals2Away) / 100) + ((poisonGoals5Home * poisonGoals3Away) / 100)
             let foraAway_2 = ((poisonGoals0Home * poisonGoals2Away) / 100) + ((poisonGoals0Home * poisonGoals3Away) / 100) + ((poisonGoals1Home * poisonGoals3Away) / 100) + ((poisonGoals0Home * poisonGoals4Away) / 100) + ((poisonGoals1Home * poisonGoals4Away) / 100) + ((poisonGoals2Home * poisonGoals4Away) / 100) + ((poisonGoals0Home * poisonGoals5Away) / 100) + ((poisonGoals1Home * poisonGoals5Away) / 100) + ((poisonGoals2Home * poisonGoals5Away) / 100) + ((poisonGoals3Home * poisonGoals5Away) / 100)
 
             let numberOfHeads0_1 = ((poisonGoals0Home * poisonGoals0Away) / 100) + ((poisonGoals1Home * poisonGoals0Away) / 100) + ((poisonGoals0Home * poisonGoals1Away) / 100)
             let numberOfHeads2_3 = ((poisonGoals1Home * poisonGoals1Away) / 100) + ((poisonGoals2Home * poisonGoals0Away) / 100) + ((poisonGoals0Home * poisonGoals2Away) / 100) + ((poisonGoals3Home * poisonGoals0Away) / 100) + ((poisonGoals0Home * poisonGoals3Away) / 100) + ((poisonGoals2Home * poisonGoals1Away) / 100) + ((poisonGoals1Home * poisonGoals2Away) / 100)
             
             let homeOrDrawsAndTotalUnder25 = (winsOrDrawsHome + totalUnder25) / 2
             let homeOrDrawsAndTotalUnder35 = (winsOrDrawsHome + totalUnder35) / 2
             let homeOrDrawsAndTotalUnder45 = (winsOrDrawsHome + totalUnder45) / 2
             let homeOrDrawsAndTotalOver25 = (winsOrDrawsHome + totalOver25) / 2
             let homeOrDrawsAndTotalOver35 = (winsOrDrawsHome + totalOver35) / 2
             let homeOrDrawsAndTotalOver45 = (winsOrDrawsHome + totalOver45) / 2
 
             let awayOrDrawsAndTotalUnder25 = (winsOrDrawsAway + totalUnder25) / 2
             let awayOrDrawsAndTotalUnder35 = (winsOrDrawsAway + totalUnder35) / 2
             let awayOrDrawsAndTotalUnder45 = (winsOrDrawsAway + totalUnder45) / 2
             let awayOrDrawsAndTotalOver25 = (winsOrDrawsAway + totalOver25) / 2
             let awayOrDrawsAndTotalOver35 = (winsOrDrawsAway + totalOver35) / 2
             let awayOrDrawsAndTotalOver45 = (winsOrDrawsAway + totalOver45) / 2
 
             let willWinAndWillNotMissHome = ((poisonGoals1Home * poisonGoals0Away) / 100) + ((poisonGoals2Home * poisonGoals0Away) / 100) + ((poisonGoals3Home * poisonGoals0Away) / 100) + ((poisonGoals4Home * poisonGoals0Away) / 100) + ((poisonGoals5Home * poisonGoals0Away) / 100)
             let willWinAndWillNotMissAway = ((poisonGoals0Home * poisonGoals1Away) / 100) + ((poisonGoals0Home * poisonGoals2Away) / 100) + ((poisonGoals0Home * poisonGoals3Away) / 100) + ((poisonGoals0Home * poisonGoals4Away) / 100) + ((poisonGoals0Home * poisonGoals5Away) / 100)
             
             // расчитываем коэфицценты
             let willWinAndWillNotMissHomeOdd = 100 / willWinAndWillNotMissHome
             let willWinAndWillNotMissAwayOdd = 100 / willWinAndWillNotMissAway
             let homeOrDrawsAndTotalUnder25Odd = 100 / homeOrDrawsAndTotalUnder25
             let homeOrDrawsAndTotalUnder35Odd = 100 / homeOrDrawsAndTotalUnder35
             let homeOrDrawsAndTotalUnder45Odd = 100 / homeOrDrawsAndTotalUnder45
             let homeOrDrawsAndTotalOver25Odd = 100 / homeOrDrawsAndTotalOver25
             let homeOrDrawsAndTotalOver35Odd = 100 / homeOrDrawsAndTotalOver35
             let homeOrDrawsAndTotalOver45Odd = 100 / homeOrDrawsAndTotalOver45
             let awayOrDrawsAndTotalUnder25Odd = 100 / awayOrDrawsAndTotalUnder25
             let awayOrDrawsAndTotalUnder35Odd = 100 / awayOrDrawsAndTotalUnder35
             let awayOrDrawsAndTotalUnder45Odd = 100 / awayOrDrawsAndTotalUnder45
             let awayOrDrawsAndTotalOver25Odd = 100 / awayOrDrawsAndTotalOver25
             let awayOrDrawsAndTotalOver35Odd = 100 / awayOrDrawsAndTotalOver35
             let awayOrDrawsAndTotalOver45Odd = 100 / awayOrDrawsAndTotalOver45
             let numberOfHeads0_1Odd = 100 / numberOfHeads0_1
             let numberOfHeads2_3Odd = 100 / numberOfHeads2_3
             let foraHome_0Odd = 100 / foraHome_0
             let foraAway_0Odd = 100 / foraAway_0
             let foraHomePlus1Odd = 100 / foraHomePlus1
             let foraAwayPlus1Odd = 100 / foraAwayPlus1
             let winsOrDrawsHomeOdd = 100 / winsOrDrawsHome
             let winsOrDrawsAwayOdd = 100 / winsOrDrawsAway
 
             let winsHomeOdd = 100 / winshomepoison;
             let drawsOdd = 100 / draws1x2Poison;
             let winsAwayOdd = 100 / winsAwayPoison;
             let bothWillScoreNotOdd = 100 / bothWillScoreNot;
             let bothWillScoreYesOdd = 100 / bothWillScoreYes;
             let foraHome_1Odd = 100 / foraHome_1;
             let foraHome_15Odd = 100 / foraHome_15;
             let foraHome_2Odd = 100 / foraHome_2;
             let foraAway_1Odd = 100 / foraAway_1;
             let foraAway_15Odd = 100 / foraAway_15;
             let foraAway_2Odd = 100 / foraAway_2;
             let totalUnder15Odd = 100 / totalUnder15
             let totalOver15Odd = 100 / totalOver15
             let totalUnder2Odd = 100 / totalUnder2
             let totalOver2Odd = 100 / totalOver2
             let totalUnder25Odd = 100 / totalUnder25
             let totalOver25Odd = 100 / totalOver25
             let totalUnder3Odd = 100 / totalUnder3
             let totalOver3Odd = 100 / totalOver3
             let totalUnder35Odd = 100 / totalUnder35
             let totalOver35Odd = 100 / totalOver35
             let totalUnder4Odd = 100 / totalUnder4
             let totalOver4Odd = 100 / totalOver4
             let individualTotalHomeOver1Odd = 100 / individualTotalHomeOver1
             let individualTotalAwayOver1Odd = 100 / individualTotalAwayOver1
             let individualTotalHomeUnder1Odd = 100 / individualTotalHomeUnder1
             let individualTotalAwayUnder1Odd = 100 / individualTotalAwayUnder1
             let individualTotalHomeOver15Odd = 100 / individualTotalHomeOver15
             let individualTotalAwayOver15Odd = 100 / individualTotalAwayOver15
             let individualTotalHomeUnder15Odd = 100 / individualTotalHomeUnder15
             let individualTotalAwayUnder15Odd = 100 / individualTotalAwayUnder15
             let individualTotalHomeOver2Odd = 100 / individualTotalHomeOver2
             let individualTotalAwayOver2Odd = 100 / individualTotalAwayOver2
             let individualTotalHomeUnder2Odd = 100 / individualTotalHomeUnder2
             let individualTotalAwayUnder2Odd = 100 / individualTotalAwayUnder2
             let score0_0Odd = 100 / score0_0
             let score1_0Odd = 100 / score1_0
             let score0_1Odd = 100 / score0_1
             let score1_1Odd = 100 / score1_1
             let score2_0Odd = 100 / score2_0
             let score0_2Odd = 100 / score0_2
             let score2_1Odd = 100 / score2_1
             let score1_2Odd = 100 / score1_2
             let score2_2Odd = 100 / score2_2
             let score3_0Odd = 100 / score3_0
             let score0_3Odd = 100 / score0_3
             let score3_1Odd = 100 / score3_1
             let score1_3Odd = 100 / score1_3
             let score3_2Odd = 100 / score3_2
             let score2_3Odd = 100 / score2_3
             let score3_3Odd = 100 / score3_3
 
             $(`.result2${el}`).append(`
 <h4>Основные исходы:</h4>
         <div class = "bets_items">
         <div class = "bet_item"><p>П1</p><p class = "color">${winshomepoison.toFixed(2)}</p><p class = "color2"> (${winsHomeOdd.toFixed(2)})</p></div>
         <div class = "bet_item"><p>X</p><p class = "color">${draws1x2Poison.toFixed(2)} </p><p class = "color2">(${drawsOdd.toFixed(2)})</p></div>
         <div class = "bet_item"><p>П2</p><p class = "color">${winsAwayPoison.toFixed(2)} </p><p class = "color2">(${winsAwayOdd.toFixed(2)})</p></div>
         </div>
         <h4>Двойной исход:</h4>
         <div class = "bets_items">
         <div class = "bet_item"><p>1X</p><p class = "color">${winsOrDrawsHome.toFixed(2)} </p><p class = "color2">(${winsOrDrawsHomeOdd.toFixed(2)})</p></div>
         <div class = "bet_item"><p>2X</p><p class = "color">${winsOrDrawsAway.toFixed(2)}</p><p class = "color2"> (${winsOrDrawsAwayOdd.toFixed(2)})</p></div>
         </div>
         <h4>Обе забьют:</h4>
         <div class = "bets_items">
         <div class = "bet_item"><p>Да</p><p class = "color">${bothWillScoreYes.toFixed(2)} </p><p class = "color2">(${bothWillScoreYesOdd.toFixed(2)})</p></div>
         <div class = "bet_item"><p>Нет</p><p class = "color">${bothWillScoreNot.toFixed(2)}</p><p class = "color2"> (${bothWillScoreNotOdd.toFixed(2)})</p></div>
         </div>
         <h4>Форы:</h4>
         <div class = "bets_items">
         <div class = "bet_item"><p>Ф1 +1</p><p class = "color">${foraHomePlus1.toFixed(2)} </p><p class = "color2">(${foraHomePlus1Odd.toFixed(2)})</p></div>
         <div class = "bet_item"><p>Ф2 +1</p><p class = "color">${foraAwayPlus1.toFixed(2)} </p><p class = "color2">(${foraAwayPlus1Odd.toFixed(2)})</p></div>
         </div>
         <div class = "bets_items">
         <div class = "bet_item"><p>Ф1 0</p><p class = "color">${foraHome_0.toFixed(2)} </p><p class = "color2">(${foraHome_0Odd.toFixed(2)})</p></div>
         <div class = "bet_item"><p>Ф2 0</p><p class = "color">${foraAway_0.toFixed(2)} </p><p class = "color2">(${foraAway_0Odd.toFixed(2)})</p></div>
         </div>
         <div class = "bets_items">
         <div class = "bet_item"><p>Ф1 -1</p><p class = "color">${foraHome_1.toFixed(2)} </p><p class = "color2">(${foraHome_1Odd.toFixed(2)})</p></div>
         <div class = "bet_item"><p>Ф2 -1</p><p class = "color">${foraAway_1.toFixed(2)} </p><p class = "color2">(${foraAway_1Odd.toFixed(2)})</p></div>
         </div>
         <div class = "bets_items">
         <div class = "bet_item"><p>Ф1 -1.5</p><p class = "color">${foraHome_15.toFixed(2)} </p><p class = "color2">(${foraHome_15Odd.toFixed(2)})</p></div>
         <div class = "bet_item"><p>Ф2 -1.5</p><p class = "color">${foraAway_15.toFixed(2)} </p><p class = "color2">(${foraAway_15Odd.toFixed(2)})</p></div>
         </div>
         <div class = "bets_items">
         <div class = "bet_item"><p>Ф1 -2</p><p class = "color">${foraHome_2.toFixed(2)} </p><p class = "color2">(${foraHome_2Odd.toFixed(2)})</p></div>
         <div class = "bet_item"><p>Ф2 -2</p><p class = "color">${foraAway_2.toFixed(2)}</p><p class = "color2"> (${foraAway_2Odd.toFixed(2)})</p></div>
         </div>
         <h4>Тоталы:</h4>
         <div class = "bets_items">
         <div class = "bet_item"><p>ТМ 1.5</p><p class = "color">${totalUnder15.toFixed(2)} </p><p class = "color2"> (${totalUnder15Odd.toFixed(2)})</p></div>
         <div class = "bet_item"><p>ТБ 1.5</p><p class = "color">${totalOver15.toFixed(2)} </p><p class = "color2"> (${totalOver15Odd.toFixed(2)})</p></div>
         </div>
         <div class = "bets_items">
         <div class = "bet_item"><p>ТМ 2</p><p class = "color">${totalUnder2.toFixed(2)} </p><p class = "color2"> (${totalUnder2Odd.toFixed(2)})</p></div>
         <div class = "bet_item"><p>ТБ 2</p><p class = "color">${totalOver2.toFixed(2)}  </p><p class = "color2">(${totalOver2Odd.toFixed(2)})</p></div>
         </div>
         <div class = "bets_items">
         <div class = "bet_item"><p>ТМ 2.5</p><p class = "color">${totalUnder25.toFixed(2)}  </p><p class = "color2"> (${totalUnder25Odd.toFixed(2)})</p></div>
         <div class = "bet_item"><p>ТБ 2.5</p><p class = "color">${totalOver25.toFixed(2)} </p><p class = "color2"> (${totalOver25Odd.toFixed(2)})</p></div>
         </div>
         <div class = "bets_items">
         <div class = "bet_item"><p>ТМ 3</p><p class = "color">${totalUnder3.toFixed(2)}  </p><p class = "color2"> (${totalUnder3Odd.toFixed(2)})</p></div>
         <div class = "bet_item"><p>ТБ 3</p><p class = "color">${totalOver3.toFixed(2)}   </p><p class = "color2">(${totalOver3Odd.toFixed(2)})</p></div>
         </div>
         <div class = "bets_items">
         <div class = "bet_item"><p>ТМ 3.5</p><p class = "color">${totalUnder35.toFixed(2)}  </p><p class = "color2">(${totalUnder35Odd.toFixed(2)})</p></div>
         <div class = "bet_item"><p>ТБ 3.5</p><p class = "color">${totalOver35.toFixed(2)}  </p><p class = "color2">(${totalOver35Odd.toFixed(2)})</p></div>
         </div>
         <div class = "bets_items">
         <div class = "bet_item"><p>ТМ 4</p><p class = "color">${totalUnder4.toFixed(2)} </p><p class = "color2"> (${totalUnder4Odd.toFixed(2)})</p></div>
         <div class = "bet_item"><p>ТБ 4</p><p class = "color">${totalOver4.toFixed(2)}  </p><p class = "color2">(${totalOver4Odd.toFixed(2)})</p></div>
         </div>
         <h4>Индивидуальные тоталы:</h4>
         <div class = "bets_items">
         <div class = "bet_item"><p>ИТ1Б 1</p><p class = "color">${individualTotalHomeOver1.toFixed(2)}  </p><p class = "color2">(${individualTotalHomeOver1Odd.toFixed(2)})</p></div>
         <div class = "bet_item"><p>ИТ2Б 1</p><p class = "color">${individualTotalAwayOver1.toFixed(2)}  </p><p class = "color2">(${individualTotalAwayOver1Odd.toFixed(2)})</p></div>
         </div>
         <div class = "bets_items">
         <div class = "bet_item"><p>ИТ1М 1</p><p class = "color">${individualTotalHomeUnder1.toFixed(2)} </p><p class = "color2">(${individualTotalHomeUnder1Odd.toFixed(2)})</p></div>
         <div class = "bet_item"><p>ИТ2М 1</p><p class = "color">${individualTotalAwayUnder1.toFixed(2)} </p><p class = "color2"> (${individualTotalAwayUnder1Odd.toFixed(2)})</p></div>
         </div>
         <div class = "bets_items">
         <div class = "bet_item"><p>ИТ1Б 1.5</p><p class = "color">${individualTotalHomeOver15.toFixed(2)}  </p><p class = "color2">(${individualTotalHomeOver15Odd.toFixed(2)})</p></div>
         <div class = "bet_item"><p>ИТ2Б 1.5</p><p class = "color">${individualTotalAwayOver15.toFixed(2)}  </p><p class = "color2"> (${individualTotalAwayOver15Odd.toFixed(2)})</p></div>
         </div>
         <div class = "bets_items">
         <div class = "bet_item"><p>ИТ1М 1.5</p><p class = "color">${individualTotalHomeUnder15.toFixed(2)}</p><p class = "color2"> (${individualTotalHomeUnder15Odd.toFixed(2)})</p></div>
         <div class = "bet_item"><p>ИТ2М 1.5</p><p class = "color">${individualTotalAwayUnder15.toFixed(2)}  </p><p class = "color2">(${individualTotalAwayUnder15Odd.toFixed(2)})</p></div>
         </div>
         <div class = "bets_items">
         <div class = "bet_item"><p>ИТ1Б 2</p><p class = "color">${individualTotalHomeOver2.toFixed(2)}  </p><p class = "color2">(${individualTotalHomeOver2Odd.toFixed(2)})</p></div>
         <div class = "bet_item"><p>ИТ2Б 2</p><p class = "color">${individualTotalAwayOver2.toFixed(2)}  </p><p class = "color2">  (${individualTotalAwayOver2Odd.toFixed(2)})</p></div>
         </div>
         <div class = "bets_items">
         <div class = "bet_item"><p>ИТ1М 2</p><p class = "color">${individualTotalHomeUnder2.toFixed(2)}  </p><p class = "color2">(${individualTotalHomeUnder2Odd.toFixed(2)})</p></div>
         <div class = "bet_item"><p>ИТ2М 2</p><p class = "color">${individualTotalAwayUnder2.toFixed(2)}   </p><p class = "color2"> (${individualTotalAwayUnder2Odd.toFixed(2)})</p></div>
         </div>
         <h4>Победит и не пропустит:</h4>
         <div class = "bets_items">
         <div class = "bet_item"><p>1 команда</p><p class = "color">${willWinAndWillNotMissHome.toFixed(2)} </p><p class = "color2">(${willWinAndWillNotMissHomeOdd.toFixed(2)})</p></div>
         <div class = "bet_item"><p>2 команда</p><p class = "color">${willWinAndWillNotMissAway.toFixed(2)} </p><p class = "color2">(${willWinAndWillNotMissAwayOdd.toFixed(2)})</p></div>
         </div>
         <h4>Кол-во голов:</h4>
         <div class = "bets_items">
         <div class = "bet_item"><p>0 или 1</p><p class = "color">${numberOfHeads0_1.toFixed(2)} </p><p class = "color2">(${numberOfHeads0_1Odd.toFixed(2)})</p></div>
         <div class = "bet_item"><p>2 или 3</p><p class = "color">${numberOfHeads2_3.toFixed(2)} </p><p class = "color2">(${numberOfHeads2_3Odd.toFixed(2)})</p></div>
         </div>
         </div>
         <h4>Не проиграет и тотал</h4>
         <div class = "bets_items">
         <div class = "bet_item"><p>1x и ТМ 2.5</p><p class = "color">${homeOrDrawsAndTotalUnder25.toFixed(2)} </p><p class = "color2">(${homeOrDrawsAndTotalUnder25Odd.toFixed(2)})</p></div>
         <div class = "bet_item"><p>2x и ТМ 2.5</p><p class = "color">${awayOrDrawsAndTotalUnder25.toFixed(2)} </p><p class = "color2">(${awayOrDrawsAndTotalUnder25Odd.toFixed(2)})</p></div>
         </div>
         <div class = "bets_items">
         <div class = "bet_item"><p>1x и ТМ 3.5</p><p class = "color">${homeOrDrawsAndTotalUnder35.toFixed(2)} </p><p class = "color2">(${homeOrDrawsAndTotalUnder35Odd.toFixed(2)})</p></div>
         <div class = "bet_item"><p>2x и ТМ 3.5</p><p class = "color">${awayOrDrawsAndTotalUnder35.toFixed(2)} </p><p class = "color2">(${awayOrDrawsAndTotalUnder35Odd.toFixed(2)})</p></div>
         </div>
         <div class = "bets_items">
         <div class = "bet_item"><p>1x и ТМ 4.5</p><p class = "color">${homeOrDrawsAndTotalUnder45.toFixed(2)} </p><p class = "color2">(${homeOrDrawsAndTotalUnder45Odd.toFixed(2)})</p></div>
         <div class = "bet_item"><p>2x и ТМ 4.5</p><p class = "color">${awayOrDrawsAndTotalUnder45.toFixed(2)} </p><p class = "color2">(${awayOrDrawsAndTotalUnder45Odd.toFixed(2)})</p></div>
         </div>
         <div class = "bets_items">
         <div class = "bet_item"><p>1x и ТБ 2.5</p><p class = "color">${homeOrDrawsAndTotalOver25.toFixed(2)} </p><p class = "color2">(${homeOrDrawsAndTotalOver25Odd.toFixed(2)})</p></div>
         <div class = "bet_item"><p>2x и ТБ 2.5</p><p class = "color">${awayOrDrawsAndTotalOver25.toFixed(2)} </p><p class = "color2">(${awayOrDrawsAndTotalOver25Odd.toFixed(2)})</p></div>
         </div>
         <div class = "bets_items">
         <div class = "bet_item"><p>1x и ТБ 3.5</p><p class = "color">${homeOrDrawsAndTotalOver35.toFixed(2)} </p><p class = "color2">(${homeOrDrawsAndTotalOver35Odd.toFixed(2)})</p></div>
         <div class = "bet_item"><p>2x и ТБ 3.5</p><p class = "color">${awayOrDrawsAndTotalOver35.toFixed(2)} </p><p class = "color2">(${awayOrDrawsAndTotalOver35Odd.toFixed(2)})</p></div>
         </div>
         <div class = "bets_items">
         <div class = "bet_item"><p>1x и ТБ 4.5</p><p class = "color">${homeOrDrawsAndTotalOver45.toFixed(2)} </p><p class = "color2">(${homeOrDrawsAndTotalOver45Odd.toFixed(2)})</p></div>
         <div class = "bet_item"><p>2x и ТБ 4.5</p><p class = "color">${awayOrDrawsAndTotalOver45.toFixed(2)} </p><p class = "color2">(${awayOrDrawsAndTotalOver45Odd.toFixed(2)})</p></div>
         </div>
         
         <h4>Счета:</h4>
         <div class = "bets_items">
         <div class = "bet_item"><p>0:0</p><p class = "color">${score0_0.toFixed(2)} </p><p class = "color2">(${score0_0Odd.toFixed(2)})</p></div>
         <div class = "bet_item"><p>1:1</p><p class = "color">${score1_1.toFixed(2)} </p><p class = "color2">(${score1_1Odd.toFixed(2)})</p></div>
         </div>
         <div class = "bets_items">
         <div class = "bet_item"><p>2:2</p><p class = "color">${score2_2.toFixed(2)} </p><p class = "color2">(${score2_2Odd.toFixed(2)})</p></div>
         <div class = "bet_item"><p>3:3</p><p class = "color">${score3_3.toFixed(2)} </p><p class = "color2">(${score3_3Odd.toFixed(2)})</p></div>
         </div>
         <div class = "bets_items">
         <div class = "bet_item"><p>1:0</p><p class = "color">${score1_0.toFixed(2)} </p><p class = "color2">(${score1_0Odd.toFixed(2)})</p></div>
         <div class = "bet_item"><p>0:1</p><p class = "color">${score0_1.toFixed(2)} </p><p class = "color2">(${score0_1Odd.toFixed(2)})</p></div>
         </div>
         <div class = "bets_items">
         <div class = "bet_item"><p>2:0</p><p class = "color">${score2_0.toFixed(2)} </p><p class = "color2">(${score2_0Odd.toFixed(2)})</p></div>
         <div class = "bet_item"><p>0:2</p><p class = "color">${score0_2.toFixed(2)} </p><p class = "color2">(${score0_2Odd.toFixed(2)})</p></div>
         </div>
         <div class = "bets_items">
         <div class = "bet_item"><p>2:1</p><p class = "color">${score2_1.toFixed(2)} </p><p class = "color2">(${score2_1Odd.toFixed(2)})</p></div>
         <div class = "bet_item"><p>1:2</p><p class = "color">${score1_2.toFixed(2)} </p><p class = "color2">(${score1_2Odd.toFixed(2)})</p></div>
         </div>
         <div class = "bets_items">
         <div class = "bet_item"><p>3:0</p><p class = "color">${score3_0.toFixed(2)} </p><p class = "color2">(${score3_0Odd.toFixed(2)})</p></div>
         <div class = "bet_item"><p>0:3</p><p class = "color">${score0_3.toFixed(2)} </p><p class = "color2">(${score0_3Odd.toFixed(2)})</p></div>
         </div>
         <div class = "bets_items">
         <div class = "bet_item"><p>3:1</p><p class = "color">${score3_1.toFixed(2)} </p><p class = "color2">(${score3_1Odd.toFixed(2)})</p></div>
         <div class = "bet_item"><p>1:3</p><p class = "color">${score1_3.toFixed(2)} </p><p class = "color2">(${score1_3Odd.toFixed(2)})</p></div>
         </div>
         <div class = "bets_items">
         <div class = "bet_item"><p>3:2</p><p class = "color">${score3_2.toFixed(2)} </p><p class = "color2">(${score3_2Odd.toFixed(2)})</p></div>
         <div class = "bet_item"><p>2:3</p><p class = "color">${score2_3.toFixed(2)} </p><p class = "color2">(${score2_3Odd.toFixed(2)})</p></div>
         </div>
         `)
 

        }


    }).catch(function (error) {
        console.error(error);
    });
}


// function getOdds(el, ) {

//     const options = {
//         method: 'GET',
//         url: `https://api-football-v1.p.rapidapi.com/v2/odds/fixture/${el}`,
//         headers: {
//             'x-rapidapi-key': 'f570367049msh92d23c8fda1a817p1b03cfjsne8957d93c6e0',
//             'x-rapidapi-host': 'api-football-v1.p.rapidapi.com'
//         }
//     };

//     axios.request(options).then(function (response) {
//         console.log(response.data);

//         let bookmaker = response.data.api.odds[0].bookmakers.filter(el => el.bookmaker_name == "Marathonbet");
//         let oddsMatchWinner = bookmaker[0].bets.filter(el => el.label_name == "Match Winner");
//         let oddsOverUnder = bookmaker[0].bets.filter(el => el.label_name == "Goals Over/Under");
//         let oddsBothTeamsScore = bookmaker[0].bets.filter(el => el.label_name == "Both Teams Score");
//         let oddsindividualTotalHome = bookmaker[0].bets.filter(el => el.label_name == "Total - Home");
//         let oddsindividualTotalAway = bookmaker[0].bets.filter(el => el.label_name == "Total - Away");
//         let fora = bookmaker[0].bets.filter(el => el.label_name == "Asian Handicap");

//         let oddsIndividualTotalHomeOver1Array = oddsindividualTotalHome[0].values.filter(el => el.value == "Over 1");
//         let oddsIndividualTotalHomeOver1 = oddsIndividualTotalHomeOver1Array[0].odd;
//         let oddsIndividualTotalHomeUnder1Array = oddsindividualTotalHome[0].values.filter(el => el.value == "Under 1");
//         let oddsIndividualTotalHomeUnder1 = oddsIndividualTotalHomeUnder1Array[0].odd;
//         let oddsIndividualTotalHomeUnder15Array = oddsindividualTotalHome[0].values.filter(el => el.value == "Under 1.5");
//         let oddsIndividualTotalHomeUnder15 = oddsIndividualTotalHomeUnder15Array[0].odd;
//         let oddsIndividualTotalHomeOver15Array = oddsindividualTotalHome[0].values.filter(el => el.value == "Over 1.5");
//         let oddsIndividualTotalHomeOver15 = oddsIndividualTotalHomeOver15Array[0].odd;
//         let oddsIndividualTotalHomeOver2Array = oddsindividualTotalHome[0].values.filter(el => el.value == "Over 2");
//         let oddsIndividualTotalHomeOver2 = oddsIndividualTotalHomeOver2Array[0].odd;
//         let oddsIndividualTotalHomeUnder2Array = oddsindividualTotalHome[0].values.filter(el => el.value == "Under 2");
//         let oddsIndividualTotalHomeUnder2 = oddsIndividualTotalHomeUnder2Array[0].odd;

//         let oddsIndividualTotalAwayOver1Array = oddsindividualTotalAway[0].values.filter(el => el.value == "Over 1");
//         let oddsIndividualTotalAwayOver1 = oddsIndividualTotalAwayOver1Array[0].odd;
//         let oddsIndividualTotalAwayUnder1Array = oddsindividualTotalAway[0].values.filter(el => el.value == "Under 1");
//         let oddsIndividualTotalAwayUnder1 = oddsIndividualTotalAwayUnder1Array[0].odd;
//         let oddsIndividualTotalAwayUnder15Array = oddsindividualTotalAway[0].values.filter(el => el.value == "Under 1.5");
//         let oddsIndividualTotalAwayUnder15 = oddsIndividualTotalAwayUnder15Array[0].odd;
//         let oddsIndividualTotalAwayOver15Array = oddsindividualTotalAway[0].values.filter(el => el.value == "Over 1.5");
//         let oddsIndividualTotalAwayOver15 = oddsIndividualTotalAwayOver15Array[0].odd;
//         let oddsIndividualTotalAwayOver2Array = oddsindividualTotalAway[0].values.filter(el => el.value == "Over 2");
//         let oddsIndividualTotalAwayOver2 = oddsIndividualTotalAwayOver2Array[0].odd;
//         let oddsIndividualTotalAwayUnder2Array = oddsindividualTotalAway[0].values.filter(el => el.value == "Under 2");
//         let oddsIndividualTotalAwayUnder2 = oddsIndividualTotalAwayUnder2Array[0].odd;
//         let foraHome_1Array = fora[0].values.filter(el => el.value == "Home -1");
//         let oddsForaHome_1 = foraHome_1Array[0].odd;
//         let foraAway_1Array = fora[0].values.filter(el => el.value == "Away +1");
//         let oddsForaAway_1 = foraAway_1Array[0].odd;
//         let foraHome_15Array = fora[0].values.filter(el => el.value == "Home -1.5");
//         let oddsForaHome_15 = foraHome_15Array[0].odd;
//         let foraAway_15Array = fora[0].values.filter(el => el.value == "Away +1.5");
//         let oddsForaAway_15 = foraAway_15Array[0].odd;
//         let oddsWins1 = oddsMatchWinner[0].values.filter(el => el.value == "Home")
//         let oddsWinsHome = oddsWins1[0].odd;
//         let oddsX = oddsMatchWinner[0].values.filter(el => el.value == "Draw");
//         let oddsDraws = oddsX[0].odd;
//         let oddsWins2 = oddsMatchWinner[0].values.filter(el => el.value == "Away")
//         let oddsWinsAway = oddsWins2[0].odd;
//         let oddsBothY = oddsBothTeamsScore[0].values.filter(el => el.value == "Yes")
//         let oddsBothTeamsScoreYes = oddsBothY[0].odd;
//         let oddsBothN = oddsBothTeamsScore[0].values.filter(el => el.value == "No")
//         let oddsBothTeamsScoreNot = oddsBothN[0].odd;
//         let oddsTotalOver15Array = oddsOverUnder[0].values.filter(el => el.value == "Over 1.5");
//         let oddsTotalOver15 = oddsTotalOver15Array[0].odd;
//         let oddsTotalUnder15Array = oddsOverUnder[0].values.filter(el => el.value == "Under 1.5")
//         let oddsTotalUnder15 = oddsTotalUnder15Array[0].odd;
//         let oddsTotalOver2Array = oddsOverUnder[0].values.filter(el => el.value == "Over 2.0")
//         let oddsTotalOver2 = oddsTotalOver2Array[0].odd;
//         let oddsTotalUnder2Array = oddsOverUnder[0].values.filter(el => el.value == "Under 2.0");
//         let oddsTotalUnder2 = oddsTotalUnder2Array[0].odd;
//         let oddsTotalOver25Array = oddsOverUnder[0].values.filter(el => el.value == "Over 2.5");
//         let oddsTotalOver25 = oddsTotalOver25Array[0].odd;
//         let oddsTotalUnder25Array = oddsOverUnder[0].values.filter(el => el.value == "Under 2.5");
//         let oddsTotalUnder25 = oddsTotalUnder25Array[0].odd;
//         let oddsTotalUnder3Array = oddsOverUnder[0].values.filter(el => el.value == "Under 3.0");
//         let oddsTotalUnder3 = oddsTotalUnder3Array[0].odd;
//         let oddsTotalOver3Array = oddsOverUnder[0].values.filter(el => el.value == "Over 3.0");
//         let oddsTotalOver3 = oddsTotalOver3Array[0].odd;
//         let oddsTotalOver35Array = oddsOverUnder[0].values.filter(el => el.value == "Over 3.5");
//         let oddsTotalOver35 = oddsTotalOver35Array[0].odd;
//         let oddsTotalUnder35Array = oddsOverUnder[0].values.filter(el => el.value == "Under 3.5");
//         let oddsTotalUnder35 = oddsTotalUnder35Array[0].odd;

//         postBets(el, oddsWinsHome, percentWins1, oddsDraws, percentDraws, oddsWinsAway, percentWins2, homeTeamId, percentTotalOver15, oddsTotalOver15, oddsTotalUnder15,
//             oddsTotalOver2, oddsTotalUnder2, oddsTotalOver25, oddsTotalUnder25, oddsTotalOver3, oddsTotalUnder3, oddsTotalOver35,
//             oddsTotalUnder35, oddsBothTeamsScoreYes, oddsBothTeamsScoreNot, percentTotalUnder15,
//             percentTotalOver2, percentTotalUnder2, percentTotalOver25, percentTotalUnder25, percentTotalOver3,
//             percentTotalUnder3, percentTotalOver35, percentTotalUnder35, bothWillScoreYes, bothWillScoreNot,
//             percentForaHome_1, percentForaAway_1, percentForaHome_15, percentForaAway_15, oddsForaHome_1, oddsForaAway_1, oddsForaHome_15,
//             oddsForaAway_15, percentIndividualTotalHomeOver1,
//             percentIndividualTotalHomeUnder1, percentIndividualTotalAwayOver1, percentIndividualTotalAwayUnder1, percentIndividualTotalHomeOver15, percentIndividualTotalHomeUnder15,
//             percentIndividualTotalAwayOver15, percentIndividualTotalAwayUnder15, individualTotalHomeOver2, individualTotalHomeUnder2,
//             individualTotalAwayOver2, individualTotalAwayUnder2, oddsIndividualTotalHomeOver1, oddsIndividualTotalHomeUnder1,
//             oddsIndividualTotalHomeUnder15, oddsIndividualTotalHomeOver15, oddsIndividualTotalHomeOver2, oddsIndividualTotalHomeUnder2,
//             oddsIndividualTotalAwayOver1, oddsIndividualTotalAwayUnder1, oddsIndividualTotalAwayUnder15, oddsIndividualTotalAwayOver15,
//             oddsIndividualTotalAwayOver2, oddsIndividualTotalAwayUnder2)
//     }).catch(function (error) {
//         console.error(error);
//     });


// }

// function postBets(el, oddsWinsHome, percentWins1, oddsDraws, percentDraws, oddsWinsAway, percentWins2, homeTeamId, percentTotalOver15, oddsTotalOver15, oddsTotalUnder15,
//     oddsTotalOver2, oddsTotalUnder2, oddsTotalOver25, oddsTotalUnder25, oddsTotalOver3, oddsTotalUnder3, oddsTotalOver35,
//     oddsTotalUnder35, oddsBothTeamsScoreYes, oddsBothTeamsScoreNot, percentTotalUnder15,
//     percentTotalOver2, percentTotalUnder2, percentTotalOver25, percentTotalUnder25, percentTotalOver3,
//     percentTotalUnder3, percentTotalOver35, percentTotalUnder35, bothWillScoreYes, bothWillScoreNot,
//     percentForaHome_1, percentForaAway_1, percentForaHome_15, percentForaAway_15, oddsForaHome_1, oddsForaAway_1, oddsForaHome_15,
//     oddsForaAway_15, percentIndividualTotalHomeOver1,
//     percentIndividualTotalHomeUnder1, percentIndividualTotalAwayOver1, percentIndividualTotalAwayUnder1, percentIndividualTotalHomeOver15, percentIndividualTotalHomeUnder15,
//     percentIndividualTotalAwayOver15, percentIndividualTotalAwayUnder15, individualTotalHomeOver2, individualTotalHomeUnder2,
//     individualTotalAwayOver2, individualTotalAwayUnder2,
//     oddsIndividualTotalHomeOver1, oddsIndividualTotalHomeUnder1,
//     oddsIndividualTotalHomeUnder15, oddsIndividualTotalHomeOver15, oddsIndividualTotalHomeOver2, oddsIndividualTotalHomeUnder2,
//     oddsIndividualTotalAwayOver1, oddsIndividualTotalAwayUnder1, oddsIndividualTotalAwayUnder15, oddsIndividualTotalAwayOver15,
//     oddsIndividualTotalAwayOver2, oddsIndividualTotalAwayUnder2) {

//     let probabilityOdssWinsHome = 1 / oddsWinsHome * 100;
//     let probabilityOdssDraws = 1 / oddsDraws * 100;
//     let probabilityOdssWinsAway = 1 / oddsWinsAway * 100;
//     let probabilityOdssTotalOver15 = 1 / oddsTotalOver15 * 100;
//     let probabilityOdssTotalUnder15 = 1 / oddsTotalUnder15 * 100;
//     let probabilityOdssTotalOver2 = 1 / oddsTotalOver2 * 100;
//     let probabilityOdssTotalUnder2 = 1 / oddsTotalUnder2 * 100;
//     let probabilityOdssTotalOver25 = 1 / oddsTotalOver25 * 100;
//     let probabilityOdssTotalUnder25 = 1 / oddsTotalUnder25 * 100;
//     let probabilityOdssTotalOver3 = 1 / oddsTotalOver3 * 100;
//     let probabilityOdssTotalUnder3 = 1 / oddsTotalUnder3 * 100;
//     let probabilityOdssTotalOver35 = 1 / oddsTotalOver35 * 100;
//     let probabilityOdssTotalUnder35 = 1 / oddsTotalUnder35 * 100;
//     let probabilityOdssoddsBothTeamsScoreYes = 1 / oddsBothTeamsScoreYes * 100;
//     let probabilityOdssoddsBothTeamsScoreNot = 1 / oddsBothTeamsScoreNot * 100;
//     let probabilityOdssForaHome_1 = 1 / oddsForaHome_1 * 100;
//     let probabilityOdssForaAway_1 = 1 / oddsForaAway_1 * 100;
//     let probabilityOdssForaHome_15 = 1 / oddsForaHome_15 * 100;
//     let probabilityOdssForaAway_15 = 1 / oddsForaAway_15 * 100;
//     let probabilityOdssIndividualTotalHomeOver1 = 1 / oddsIndividualTotalHomeOver1 * 100;
//     let probabilityOdssIndividualTotalHomeUnder1 = 1 / oddsIndividualTotalHomeUnder1 * 100;
//     let probabilityOdssIndividualTotalHomeUnder15 = 1 / oddsIndividualTotalHomeUnder15 * 100;
//     let probabilityOdssIndividualTotalHomeOver15 = 1 / oddsIndividualTotalHomeOver15 * 100;
//     let probabilityOdssIndividualTotalHomeOver2 = 1 / oddsIndividualTotalHomeOver2 * 100;
//     let probabilityOdssIndividualTotalHomeUnder2 = 1 / oddsIndividualTotalHomeUnder2 * 100;
//     let probabilityOdssIndividualTotalAwayOver1 = 1 / oddsIndividualTotalAwayOver1 * 100;
//     let probabilityOdssIndividualTotalAwayUnder1 = 1 / oddsIndividualTotalAwayUnder1 * 100;
//     let probabilityOdssIndividualTotalAwayUnder15 = 1 / oddsIndividualTotalAwayUnder15 * 100;
//     let probabilityOdssIndividualTotalAwayOver15 = 1 / oddsIndividualTotalAwayOver15 * 100;
//     let probabilityOdssIndividualTotalAwayOver2 = 1 / oddsIndividualTotalAwayOver2 * 100;
//     let probabilityOdssIndividualTotalAwayUnder2 = 1 / oddsIndividualTotalAwayUnder2 * 100;



//     $(`.bets_page${el}`).append(`
//     <div class = "centerBlock"><h5>Вероятности:</h5></div>
//     <div class = "bets_item"><p class = "boldParagraph">Ставка</p><p class = "boldParagraph violetParagraph">Вероятность</p ><p class = "boldParagraph orangeParagraph">Вероятность БК</p><p class = "boldParagraph betsColorParagraph">Кэф</p></div>
//     <div class = "bets_item p1"><p class = "boldParagraph">П1</p><p class = "violetParagraph">${percentWins1.toFixed(1)}</p><p class = "orangeParagraph">${probabilityOdssWinsHome.toFixed(1)}</p><p class = "betsColorParagraph">${oddsWinsHome}</p></div>
//     <div class = "bets_item x"><p class = "boldParagraph">X</p><p class = "violetParagraph">${percentDraws.toFixed(1)}</p><p class = "orangeParagraph">${probabilityOdssDraws.toFixed(1)}</p><p class = "betsColorParagraph">${oddsDraws}</p></div>
//     <div class = "bets_item p2"><p class = "boldParagraph">П2</p><p class = "violetParagraph">${percentWins2.toFixed(1)}</p><p class = "orangeParagraph">${probabilityOdssWinsAway.toFixed(1)}</p><p class = "betsColorParagraph">${oddsWinsAway}</p></div>
//     <div class = "bets_item f1_1"><p class = "boldParagraph">Ф1 -1</p><p class = "violetParagraph">${percentForaHome_1.toFixed(1)}</p><p class = "orangeParagraph">${probabilityOdssForaHome_1.toFixed(1)}</p><p class = "betsColorParagraph">${oddsForaHome_1}</p></div>
//     <div class = "bets_item f2_1"><p class = "boldParagraph">Ф2 -1</p><p class = "violetParagraph">${percentForaAway_1.toFixed(1)}</p><p class = "orangeParagraph">${probabilityOdssForaAway_1.toFixed(1)}</p><p class = "betsColorParagraph">${oddsForaAway_1}</p></div>
//     <div class = "bets_item f1_15"><p class = "boldParagraph">Ф1 -1.5</p class = "violetParagraph"><p>${percentForaHome_15.toFixed(1)}</p><p class = "orangeParagraph">${probabilityOdssForaHome_15.toFixed(1)}</p><p class = "betsColorParagraph">${oddsForaHome_15}</p></div>
//     <div class = "bets_item f2_15"><p class = "boldParagraph">Ф2 -1.5</p class = "violetParagraph"><p>${percentForaAway_15.toFixed(1)}</p><p class = "orangeParagraph">${probabilityOdssForaAway_15.toFixed(1)}</p><p class = "betsColorParagraph">${oddsForaAway_15}</p></div>
//     <div class = "bets_item tb15"><p class = "boldParagraph">ТБ 1.5</p><p class = "violetParagraph">${percentTotalOver15.toFixed(1)}</p><p class = "orangeParagraph">${probabilityOdssTotalOver15.toFixed(1)}</p><p class = "betsColorParagraph">${oddsTotalOver15}</p></div>
//     <div class = "bets_item tm15"><p class = "boldParagraph">ТМ 1.5</p><p class = "violetParagraph">${percentTotalUnder15.toFixed(1)}</p><p class = "orangeParagraph">${probabilityOdssTotalUnder15.toFixed(1)}</p><p class = "betsColorParagraph">${oddsTotalUnder15}</p></div>
//     <div class = "bets_item tb2"><p class = "boldParagraph">ТБ 2</p><p class = "violetParagraph">${percentTotalOver2.toFixed(1)}</p><p class = "orangeParagraph">${probabilityOdssTotalOver2.toFixed(1)}</p><p class = "betsColorParagraph">${oddsTotalOver2}</p></div>
//     <div class = "bets_item tm2"><p class = "boldParagraph">ТМ 2</p><p class = "violetParagraph">${percentTotalUnder2.toFixed(1)}</p><p class = "orangeParagraph">${probabilityOdssTotalUnder2.toFixed(1)}</p><p class = "betsColorParagraph">${oddsTotalUnder2}</p></div>
//     <div class = "bets_item tb25"><p class = "boldParagraph"> ТБ 2.5</p><p class = "violetParagraph">${percentTotalOver25.toFixed(1)}</p><p class = "orangeParagraph">${probabilityOdssTotalOver25.toFixed(1)}</p><p class = "betsColorParagraph">${oddsTotalOver25}</p></div>
//     <div class = "bets_item tm25"><p class = "boldParagraph">ТМ 2.5</p><p class = "violetParagraph">${percentTotalUnder25.toFixed(1)}</p><p class = "orangeParagraph">${probabilityOdssTotalUnder25.toFixed(1)}</p><p class = "betsColorParagraph">${oddsTotalUnder25}</p></div>
//     <div class = "bets_item tb3"><p class = "boldParagraph">ТБ 3</p><p class = "violetParagraph">${percentTotalOver3.toFixed(1)}</p><p class = "orangeParagraph">${probabilityOdssTotalOver3.toFixed(1)}</p><p class = "betsColorParagraph">${oddsTotalOver3}</p></div>
//     <div class = "bets_item tm3"><p class = "boldParagraph">ТМ 3</p><p class = "violetParagraph">${percentTotalUnder3.toFixed(1)}</p><p class = "orangeParagraph">${probabilityOdssTotalUnder3.toFixed(1)}</p><p class = "betsColorParagraph">${oddsTotalUnder3}</p></div>
//     <div class = "bets_item tb35"><p class = "boldParagraph">ТБ 3.5</p><p class = "violetParagraph">${percentTotalOver35.toFixed(1)}</p><p class = "orangeParagraph">${probabilityOdssTotalOver35.toFixed(1)}</p><p class = "betsColorParagraph">${oddsTotalOver35}</p></div>
//     <div class = "bets_item tm35"><p class = "boldParagraph">ТМ 3.5</p><p class = "violetParagraph">${percentTotalUnder35.toFixed(1)}</p><p class = "orangeParagraph">${probabilityOdssTotalUnder35.toFixed(1)}</p><p class = "betsColorParagraph">${oddsTotalUnder35}</p></div>
//     <div class = "bets_item ozY"><p class = "boldParagraph">Оз ДА</p><p class = "violetParagraph">${bothWillScoreYes.toFixed(1)}</p><p class = "orangeParagraph">${probabilityOdssoddsBothTeamsScoreYes.toFixed(1)}</p><p class = "betsColorParagraph">${oddsBothTeamsScoreYes}</p></div>
//     <div class = "bets_item ozN"><p class = "boldParagraph">Оз Нет</p><p class = "violetParagraph">${bothWillScoreNot.toFixed(1)}</p><p class = "orangeParagraph">${probabilityOdssoddsBothTeamsScoreNot.toFixed(1)}</p><p class = "betsColorParagraph">${oddsBothTeamsScoreNot}</p></div>
//     <div class = "bets_item it1B1"><p class = "boldParagraph">ИТ1 Б1</p><p class = "violetParagraph">${percentIndividualTotalHomeOver1.toFixed(1)}</p><p class = "orangeParagraph">${probabilityOdssIndividualTotalHomeOver1.toFixed(1)}</p><p class = "betsColorParagraph">${oddsIndividualTotalHomeOver1}</p></div>
//     <div class = "bets_item it1M1"><p class = "boldParagraph">ИТ1 М1</p><p class = "violetParagraph">${percentIndividualTotalHomeUnder1.toFixed(1)}</p><p class = "orangeParagraph">${probabilityOdssIndividualTotalHomeUnder1.toFixed(1)}</p><p class = "betsColorParagraph">${oddsIndividualTotalHomeUnder1}</p></div>
//     <div class = "bets_item it2B1"><p class = "boldParagraph">ИТ2 Б1</p><p class = "violetParagraph">${percentIndividualTotalAwayOver1.toFixed(1)}</p><p class = "orangeParagraph">${probabilityOdssIndividualTotalAwayOver1.toFixed(1)}</p><p class = "betsColorParagraph">${oddsIndividualTotalAwayOver1}</p></div>
//     <div class = "bets_item it2M1"><p class = "boldParagraph">ИТ2 М1</p><p class = "violetParagraph">${percentIndividualTotalAwayUnder1.toFixed(1)}</p><p class = "orangeParagraph">${probabilityOdssIndividualTotalAwayUnder1.toFixed(1)}</p><p class = "betsColorParagraph">${oddsIndividualTotalAwayUnder1}</p></div>
//     <div class = "bets_item it1B15"><p class = "boldParagraph">ИТ1 Б1.5</p><p class = "violetParagraph">${percentIndividualTotalHomeOver15.toFixed(1)}</p><p class = "orangeParagraph">${probabilityOdssIndividualTotalHomeOver15.toFixed(1)}</p><p class = "betsColorParagraph">${oddsIndividualTotalHomeOver15}</p></div>
//     <div class = "bets_item it1M15"><p class = "boldParagraph">ИТ1 М1.5</p><p class = "violetParagraph">${percentIndividualTotalHomeUnder15.toFixed(1)}</p><p class = "orangeParagraph">${probabilityOdssIndividualTotalHomeUnder15.toFixed(1)}</p><p class = "betsColorParagraph">${oddsIndividualTotalHomeUnder15}</p></div>
//     <div class = "bets_item it2B15"><p class = "boldParagraph">ИТ2 Б1.5</p><p class = "violetParagraph">${percentIndividualTotalAwayOver15.toFixed(1)}</p><p class = "orangeParagraph">${probabilityOdssIndividualTotalAwayOver15.toFixed(1)}</p><p class = "betsColorParagraph">${oddsIndividualTotalAwayOver15}</p></div>
//     <div class = "bets_item it2M15"><p class = "boldParagraph">ИТ2 М1.5</p><p class = "violetParagraph">${percentIndividualTotalAwayUnder15.toFixed(1)}</p><p class = "orangeParagraph">${probabilityOdssIndividualTotalAwayUnder15.toFixed(1)}</p><p class = "betsColorParagraph">${oddsIndividualTotalAwayUnder15}</p></div>
//     <div class = "bets_item it1B2"><p class = "boldParagraph">ИТ1 Б2</p><p class = "violetParagraph">${individualTotalHomeOver2.toFixed(1)}</p><p class = "orangeParagraph">${probabilityOdssIndividualTotalHomeOver2.toFixed(1)}</p><p class = "betsColorParagraph">${oddsIndividualTotalHomeOver2}</p></div>
//     <div class = "bets_item it1M2"><p class = "boldParagraph">ИТ1 М2</p><p class = "violetParagraph">${individualTotalHomeUnder2.toFixed(1)}</p><p class = "orangeParagraph">${probabilityOdssIndividualTotalHomeUnder2.toFixed(1)}</p><p class = "betsColorParagraph">${oddsIndividualTotalHomeUnder2}</p></div>
//     <div class = "bets_item it2B2"><p class = "boldParagraph">ИТ2 Б2</p><p class = "violetParagraph">${individualTotalAwayOver2.toFixed(1)}</p><p class = "orangeParagraph">${probabilityOdssIndividualTotalAwayOver2.toFixed(1)}</p><p class = "betsColorParagraph">${oddsIndividualTotalAwayOver2}</p></div>
//     <div class = "bets_item it2M2"><p class = "boldParagraph">ИТ2 М2</p><p class = "violetParagraph">${individualTotalAwayUnder2.toFixed(1)}</p><p class = "orangeParagraph">${probabilityOdssIndividualTotalAwayUnder2.toFixed(1)}</p><p class = "betsColorParagraph">${oddsIndividualTotalAwayUnder2}</p></div>
//     `)

//     if (percentForaHome_1 - probabilityOdssForaHome_1 >= 1 && oddsForaHome_1 >= "1.45" && percentForaHome_1 >= 40) {
//         $('.f1_1').attr('class', 'bets_item_value')
//     } else {
//         $('.f1_1').attr('class', 'bets_item_dontValue')
//     }
//     if (percentForaAway_1 - probabilityOdssForaAway_1 >= 1 && oddsForaAway_1 >= "1.45" && percentForaAway_1 >= 40) {
//         $('.f2_1').attr('class', 'bets_item_value')
//     } else {
//         $('.f2_1').attr('class', 'bets_item_dontValue')
//     }
//     if (percentForaHome_15 - probabilityOdssForaHome_15 >= 1 && oddsForaHome_15 >= "1.45" && percentForaHome_15 >= 35) {
//         $('.f1_15').attr('class', 'bets_item_value')
//     } else {
//         $('.f1_15').attr('class', 'bets_item_dontValue')
//     }
//     if (percentForaAway_15 - probabilityOdssForaAway_15 >= 1 && oddsForaAway_15 >= "1.45" && percentForaAway_1 >= 35) {
//         $('.f2_15').attr('class', 'bets_item_value')
//     } else {
//         $('.f2_15').attr('class', 'bets_item_dontValue')
//     }


//     if (percentIndividualTotalHomeOver1 - probabilityOdssIndividualTotalHomeOver1 >= 1 && oddsIndividualTotalHomeOver1 >= "1.45" && percentIndividualTotalHomeOver1 >= 70) {
//         $('.it1B1').attr('class', 'bets_item_value');
//     } else {
//         $('.it1B1').attr('class', 'bets_item_dontValue');
//     }
//     if (percentIndividualTotalHomeUnder1 - probabilityOdssIndividualTotalHomeUnder1 >= 1 && oddsIndividualTotalHomeUnder1 >= "1.45" && percentIndividualTotalHomeUnder1 >= 70) {
//         $('.it1M1').attr('class', 'bets_item_value');
//     } else {
//         $('.it1M1').attr('class', 'bets_item_dontValue');
//     }
//     if (percentIndividualTotalAwayOver1 - probabilityOdssIndividualTotalAwayOver1 >= 1 && oddsIndividualTotalAwayOver1 >= "1.45" && percentIndividualTotalAwayOver1 >= 70) {
//         $('.it2B1').attr('class', 'bets_item_value');
//     } else {
//         $('.it2B1').attr('class', 'bets_item_dontValue');
//     }
//     if (percentIndividualTotalAwayUnder1 - probabilityOdssIndividualTotalAwayUnder1 >= 1 && oddsIndividualTotalAwayUnder1 >= "1.45" && percentIndividualTotalAwayUnder1 >= 70) {
//         $('.it2M1').attr('class', 'bets_item_value');
//     } else {
//         $('.it2M1').attr('class', 'bets_item_dontValue');
//     }
//     if (percentIndividualTotalHomeOver15 - probabilityOdssIndividualTotalHomeOver15 >= 1 && oddsIndividualTotalHomeOver15 >= "1.45" && percentIndividualTotalHomeOver15 >= 60) {
//         $('.it1B15').attr('class', 'bets_item_value');
//     } else {
//         $('.it1B15').attr('class', 'bets_item_dontValue');
//     }
//     if (percentIndividualTotalHomeUnder15 - probabilityOdssIndividualTotalHomeUnder15 >= 1 && oddsIndividualTotalHomeUnder15 >= "1.45" && percentIndividualTotalHomeUnder15 >= 60) {
//         $('.it1M15').attr('class', 'bets_item_value');
//     } else {
//         $('.it1M15').attr('class', 'bets_item_dontValue');
//     }
//     if (percentIndividualTotalAwayOver15 - probabilityOdssIndividualTotalAwayOver15 >= 1 && oddsIndividualTotalAwayOver15 >= "1.45" && percentIndividualTotalAwayOver15 >= 60) {
//         $('.it2B15').attr('class', 'bets_item_value');
//     } else {
//         $('.it2B15').attr('class', 'bets_item_dontValue');
//     }
//     if (percentIndividualTotalAwayUnder15 - probabilityOdssIndividualTotalAwayUnder15 >= 1 && oddsIndividualTotalAwayUnder15 >= "1.45" && percentIndividualTotalAwayUnder15 >= 60) {
//         $('.it2M15').attr('class', 'bets_item_value');
//     } else {
//         $('.it2M15').attr('class', 'bets_item_dontValue');
//     }
//     if (individualTotalHomeOver2 - probabilityOdssIndividualTotalHomeOver2 >= 1 && oddsIndividualTotalHomeOver2 >= "1.45" && individualTotalHomeOver2 >= 50) {
//         $('.it1B2').attr('class', 'bets_item_value');
//     } else {
//         $('.it1B2').attr('class', 'bets_item_dontValue');
//     }
//     if (individualTotalHomeUnder2 - probabilityOdssIndividualTotalHomeUnder2 >= 1 && oddsIndividualTotalHomeUnder2 >= "1.45" && individualTotalHomeUnder2 >= 50) {
//         $('.it1M2').attr('class', 'bets_item_value');
//     } else {
//         $('.it1M2').attr('class', 'bets_item_dontValue');
//     }
//     if (individualTotalAwayOver2 - probabilityOdssIndividualTotalAwayOver2 >= 1 && oddsIndividualTotalAwayOver2 >= "1.45" && individualTotalAwayOver2 >= 50) {
//         $('.it2B2').attr('class', 'bets_item_value');
//     } else {
//         $('.it2B2').attr('class', 'bets_item_dontValue');
//     }
//     if (individualTotalAwayUnder2 - probabilityOdssIndividualTotalAwayUnder2 >= 1 && oddsIndividualTotalAwayUnder2 >= "1.45" && individualTotalAwayUnder2 >= 50) {
//         $('.it2M2').attr('class', 'bets_item_value');
//     } else {
//         $('.it2M2').attr('class', 'bets_item_dontValue');
//     }

//     if (percentWins1 - probabilityOdssWinsHome >= 1 && oddsWinsHome >= "1.45" && percentWins1 >= 45) {
//         $('.p1').attr('class', 'bets_item_value')
//     }
//     if (percentWins1 - probabilityOdssWinsHome <= -5) {
//         $('.p1').attr('class', 'bets_item_dontValue')
//     }

//     if (percentDraws - probabilityOdssDraws >= 1 && oddsDraws >= "1.45") {
//         $('.x').attr('class', 'bets_item_value')
//     } else {
//         $('.x').attr('class', 'bets_item_dontValue')
//     }
//     if (percentWins2 - probabilityOdssWinsAway >= 1 && oddsWinsAway >= "1.45" && percentWins2 >= 45) {
//         $('.p2').attr('class', 'bets_item_value')
//     } else {
//         $('.p2').attr('class', 'bets_item_dontValue')
//     }
//     if (percentTotalOver15 - probabilityOdssTotalOver15 >= 1 && oddsTotalOver15 >= 1.45 && percentTotalOver15 > 70) {
//         $('.tb15').attr('class', 'bets_item_value')
//     } else {
//         $('.tb15').attr('class', 'bets_item_dontValue')
//     }
//     if (percentTotalUnder15 - probabilityOdssTotalUnder15 >= 1 && oddsTotalUnder15 >= 1.45 && percentTotalUnder15 > 50) {
//         $('.tm15').attr('class', 'bets_item_value')
//     } else {
//         $('.tm15').attr('class', 'bets_item_dontValue')
//     }
//     if (percentTotalOver2 - probabilityOdssTotalOver2 >= 1 && oddsTotalOver2 >= 1.45 && percentTotalOver2 > 65) {
//         $('.tb2').attr('class', 'bets_item_value')
//     } else {
//         $('.tb2').attr('class', 'bets_item_dontValue')
//     }
//     if (percentTotalUnder2 - probabilityOdssTotalUnder2 >= 10 && oddsTotalUnder2 >= 1.45 && percentTotalUnder2 > 55) {
//         $('.tm2').attr('class', 'bets_item_value')
//     } else {
//         $('.tm2').attr('class', 'bets_item_dontValue')
//     }
//     if (percentTotalOver25 - probabilityOdssTotalOver25 >= 1 && oddsTotalOver25 >= 1.45 && percentTotalOver25 > 60) {
//         $('.tb25').attr('class', 'bets_item_value')
//     } else {
//         $('.tb25').attr('class', 'bets_item_dontValue')
//     }
//     if (percentTotalUnder25 - probabilityOdssTotalUnder25 >= 1 && oddsTotalUnder25 >= 1.45 && percentTotalUnder25 > 60) {
//         $('.tm25').attr('class', 'bets_item_value')
//     } else {
//         $('.tm25').attr('class', 'bets_item_dontValue')
//     }
//     if (percentTotalOver3 - probabilityOdssTotalOver3 >= 1 && oddsTotalOver3 >= 1.45 && percentTotalOver3 > 60) {
//         $('.tb3').attr('class', 'bets_item_value')
//     } else {
//         $('.tb3').attr('class', 'bets_item_dontValue')
//     }
//     if (percentTotalUnder3 - probabilityOdssTotalUnder3 >= 1 && oddsTotalUnder3 >= 1.45 && percentTotalUnder3 > 60) {
//         $('.tm3').attr('class', 'bets_item_value')
//     } else {
//         $('.tm3').attr('class', 'bets_item_dontValue')
//     }
//     if (percentTotalOver35 - probabilityOdssTotalOver35 >= 1 && oddsTotalOver35 >= 1.45 && percentTotalOver35 > 50) {
//         $('.tb35').attr('class', 'bets_item_value')
//     } else {
//         $('.tb35').attr('class', 'bets_item_dontValue')
//     }
//     if (percentTotalUnder35 - probabilityOdssTotalUnder35 >= 1 && oddsTotalUnder35 >= 1.45 && percentTotalUnder35 > 50) {
//         $('.tm35').attr('class', 'bets_item_value')
//     } else {
//         $('.tm35').attr('class', 'bets_item_dontValue')
//     }
//     if (bothWillScoreYes - probabilityOdssoddsBothTeamsScoreYes >= 1 && oddsBothTeamsScoreYes >= 1.45 && bothWillScoreYes > 60) {
//         $('.ozY').attr('class', 'bets_item_value')
//     } else {
//         $('.ozY').attr('class', 'bets_item_dontValue')
//     }
//     if (bothWillScoreNot - probabilityOdssoddsBothTeamsScoreNot >= 1 && oddsBothTeamsScoreNot >= 1.45 && bothWillScoreNot > 50) {
//         $('.ozN').attr('class', 'bets_item_value')
//     } else {
//         $('.ozN').attr('class', 'bets_item_dontValue')
//     }


// }                                                                                                           