/*Suite de Fibonacci : chaque terme est la somme des 2 termes qui précèdent*/
let suite = document.getElementById('suite');

function fibonacci(number){ 
    let number1 = 0; //je déclare mon 1er chiffre
    let number2 = 1; //je déclare mon 2ème chiffre
    let sum; // je déclare la somme

    //utilisation d'une boucle
    for (let index = 0; index < number; index++) {
        sum = number1 + number2;
        number1 = number2;
        number2 = sum;
    }
    return number2;
}

suite.textContent= 'POur le chiffre 5, la fonction retourne : ' + fibonacci(5);


/*Fonction d'appel à l'API GitHub*/
let api = document.getElementById('api');

function httpGet(url) {
    var xmlHttp = new XMLHttpRequest(); // envoie d'un erequête HTTP
    xmlHttp.open( "GET", url, false ); // methode de requête + url + processus effectué de manière synchrone avec false
    xmlHttp.send( null );
    return xmlHttp.responseText;
}

api.innerHTML = 'Voici ce que retourne l\'Api de GitHub pour l\'utilisateur AlavaB :' + '</br>' + '</br>' + (httpGet("https://api.github.com/users/alavab")); //appel de mon utilisateur GitHub