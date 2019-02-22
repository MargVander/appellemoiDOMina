function changeTitle() {
  let titleChange = document.getElementsByTagName('h1')[0];
  titleChange.innerHTML = "Ce que j'ai appris à THP"

  let descripChange = document.querySelectorAll('.jumbotron p')[0];
  descripChange.innerHTML = "THP est une formation qui, en 3 mois, à plein temps, vous apportera des connaissances actionnables pour vous permettre de voir plus loin. Chez nous, pas de professeurs, pas de locaux, mais un groupe de travail en présentiel. Après 11 semaines, les principaux langages et outils du web n'auront plus de secret pour vous !";
}

function changeCallToActions() {
  let mainButtonChange = document.getElementsByClassName('btn-primary')[0]
  mainButtonChange.innerHTML = "OK je veux tester !";
  mainButtonChange.setAttribute("href", "http://www.thehackingproject.org")

  let scdButtonChange = document.getElementsByClassName('btn-secondary')[0]
  scdButtonChange.innerHTML = "Non merci";
  scdButtonChange.setAttribute("href", "https://www.pole-emploi.fr/accueil/")
}

function changeLogoName() {
  let logo = document.querySelectorAll(".navbar strong")[0]
  logo.innerHTML = "THP";
  logo.style.fontSize = "2em";
}

function populateImages() {
  let imagesArray = ["https://img.icons8.com/color/480/000000/html-5.png", "https://img.icons8.com/color/480/000000/css3.png", "https://img.icons8.com/color/480/000000/javascript.png", "https://img.icons8.com/color/480/000000/ruby-programming-language.png", "https://img.icons8.com/color/480/000000/bootstrap.png", "https://img.icons8.com/color/480/000000/github.png", "http://jeudisdulibre.be/wp-content/uploads/2014/02/Ruby_on_Rails-logo.png", "https://avatars2.githubusercontent.com/u/25484553?s=200&v=4", "https://img.icons8.com/color/480/000000/heroku.png"];
  let cardToChange = document.getElementsByClassName('card-img-top');
  for (var i = 0; i < cardToChange.length; i++) {
    cardToChange[i].setAttribute("src", imagesArray[i])
  }
}

function deleteLastCards() {
  let cardArray = document.getElementsByClassName('card')
  let y = 1
  while (y <= 3) {
    cardArray[cardArray.length - 1].remove()
    y ++
  }
}

function changeCardsText() {
  let cardTextArray = document.getElementsByClassName('card-text')
  for (var i = 0; i < cardTextArray.length; i++) {
    if (i == 0) {
      cardTextArray[i].innerHTML = "L’HyperText Markup Language, généralement abrégé HTML, est le langage de balisage conçu pour représenter les pages web"
    }else if (i == 1) {
      cardTextArray[i].innerHTML = "Les feuilles de style en cascade, généralement appelées CSS de l'anglais Cascading Style Sheets, forment un langage informatique qui décrit la présentation des documents HTML et XML"
    }else if (i == 2) {
      cardTextArray[i].innerHTML = "JavaScript est un langage de programmation de scripts principalement employé dans les pages web interactives mais aussi pour les serveurs. C'est un langage orienté objet à prototype."
    }
  }
}

function changeViewButtons() {
  let buttonArray = document.getElementsByClassName('btn-group')
  console.log(buttonArray);
  for (var i = 0; i < buttonArray.length; i++) {
    console.log(buttonArray[i].childNodes[1]);
    buttonArray[i].childNodes[1].classList.remove('btn-outline-secondary')
    buttonArray[i].childNodes[1].classList.add('btn-success')
  }
}

function addNewDiv() {
  let newDiv = document.createElement('div');
  newDiv.className = "row"
  newDiv.classList.add("col-md-4")
  document.getElementsByClassName('container')[3].appendChild(newDiv);
  let jsCard = document.getElementsByClassName("col-md-4")[2];
  console.log(jsCard);
  console.log(newDiv);
  newDiv.innerHTML = jsCard.innerHTML
  jsCard.remove()
}


changeTitle()
changeCallToActions()
changeLogoName()
populateImages()
deleteLastCards()
changeCardsText()
changeViewButtons()
addNewDiv()
