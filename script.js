//Fonctionnalité 1 :
document.getElementsByTagName('footer')[0].addEventListener("click", function(){
    console.log("clique");
});

//Fonctionnalité 1-bis :
let numbClick = 1;
document.getElementsByTagName('footer')[0].addEventListener("click", function(){
    console.log(`clique numero ${numbClick}`);
    numbClick += 1;
});

//Fonctionnalité 2 :
let navBtn = document.querySelector('.navbar-toggler');
let navClass = document.getElementById("navbarHeader")

navBtn.addEventListener("click", function(){
    navClass.classList.toggle('collapse')
});


//Fonctionnalité 3 :
let firstCard = document.querySelector('.col-md-4 .btn-group .btn-outline-secondary');

firstCard.addEventListener("click", function(){
    firstCard.style.color = "red";
});

//Fonctionnalité 4 :
let secondCard = document.querySelectorAll('.col-md-4 .btn-group .btn-outline-secondary')[1];

secondCard.addEventListener("click", function(){
    if (secondCard.style.color != "green"){
        secondCard.style.color = "green";
    }else {
        secondCard.style.color = "gray";
    }
});

//Fonctionnalité 5 :

let navBar = document.querySelector('.navbar');
let styleCss = document.getElementsByTagName("link")[0]

let changeCss = function(event){
    if (styleCss.getAttribute('href') != "style.css") {
    styleCss.setAttribute("href", "style.css");
    event.stopPropagation(); //stop la methode click
    }
};
navBar.addEventListener("dblclick", changeCss);

let changeCssB = function(){

    if (styleCss.getAttribute('href') == "style.css") {
        styleCss.setAttribute("href", "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css");
    }
};
document.addEventListener("dblclick", changeCssB);

//Fonctionnalité 6 :

let allCards = document.querySelectorAll('.col-md-4 .btn-group .btn-success');

let overCard = function(){
    cardThis = this.closest('.col-md-4');
    img = cardThis.getElementsByTagName('img')[0];
    img = cardThis.getElementsByTagName('img')[0];
    text = cardThis.querySelector('.card-text');

    if (text.style.visibility != "hidden"){
        img.style.width = "20%";
        text.style.visibility = "hidden";
    }else {
        img.style.width = "100%";
        text.style.visibility = "visible";
    }
};

allCards.forEach(el => el.addEventListener('mouseover', overCard));

//Fonctionnalité 7 :


let btnSwitch = document.querySelectorAll('section a')[1];


function insertdNode() {
    let cards = document.querySelectorAll('.col-md-4');
    let stCard = cards[0];
    let lastCard = cards[cards.length-1];
    let parentNode = document.querySelector('.album .row');
        parentNode.insertBefore(lastCard, stCard);
}
btnSwitch.addEventListener("click", insertdNode);
