let paragraph = document.getElementsByTagName('p');
console.log("Il y a " + paragraph.length + " paragraphes");

let coucouId = document.getElementById('coucou');
console.log(coucouId.innerHTML);

let urlWhat = document.getElementsByTagName('a')[2];
console.log(urlWhat.href);

let howManyCompteMoi = document.getElementsByClassName("compte-moi");
console.log("Il y a " + howManyCompteMoi.length + " élements comprenant la classe compte-moi")

let howManyLiCompteMoi = document.querySelectorAll('li.compte-moi')
console.log("Il y a " + howManyLiCompteMoi.length + " élements li comprenant la classe compte-moi")

let howManyOlLiCompteMoi = document.querySelectorAll('ol li.compte-moi')
console.log("Il y a " + howManyOlLiCompteMoi.length + " élements li compris dans une ol comprenant la classe compte-moi")

let treasureSearch = document.getElementsByTagName('div')[0].getElementsByTagName('ul')[1].getElementsByTagName('li')[0]
console.log(treasureSearch.innerHTML);
