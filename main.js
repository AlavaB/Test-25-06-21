//Suite de Fibonacci

let fibonacci = (number) => {
    let number1 = 0; //je déclare mon premier chiffre
    let number2 = 1; //je déclare mon deuxième chiffre
    let sum; //je déclare le total 

    //j'utilise for pour parcourir la boucle
    for (let index = 2; index <= number; index++) {
        sum = number1 + number2;
        number1 = number2;
        number2 = sum;        
    }
    return number2;
}
console.log(fibonacci(8));


//Récupérer les données d'un API

let httpGet = (url) => {
    let xmlHttp = new XMLHttpRequest(); //envoi d'une requête HTTP
    xmlHttp.open('GET', url, false); //open() instancie une nouvelle requête 
    xmlHttp.send(null) ; //envoie la requête au serveur
    return xmlHttp.responseText;
}
console.log(httpGet("https://api.github.com/users/alavab"));