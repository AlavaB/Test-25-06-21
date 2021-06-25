/*Suite de Fibonacci*/
let suite = document.getElementById('suite');

function fibonacci(number){
    let number1 = 0;
    let number2 = 1;
    let sum;

    for (let index = 0; index < number; index++) {
        sum = number1 + number2;
        number1 = number2;
        number2 = sum;
    }
    return number2;
}

suite.textContent= 'Pour le chiffre 8, la fonction retourne : ' + fibonacci(8);


/*Fonction d'appel à l'API GitHub*/
let api = document.getElementById('api');

function httpGet(url)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", url, false ); 
    xmlHttp.send( null );
    return xmlHttp.responseText;
}

api.innerHTML = 'Voici ce que retourne l\'Api de GitHub pour l\'utilisateur AlavaB :' + '</br>' + '</br>' + (httpGet("https://api.github.com/users/alavab")); //appel de mon utilisateur GitHub