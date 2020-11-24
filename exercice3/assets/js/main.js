let paragraphs = document.getElementsByTagName('p');

window.addEventListener('scroll', showParagrapheOnScroll); // Évènement sur le scroll de la page

function showParagrapheOnScroll() {
    let positionScrollY = window.scrollY; // récupérer la position de la scroll bar
    let windowHeight = window.innerHeight - 200; // récupere la hauteur de la fênètre intérieur en retirant 200px
    for (let p of paragraphs) {
        let positionElementTop = p.offsetTop; // récupérer la différence du haut de la page et du haut du paragraphe
        let result = positionScrollY + windowHeight; // postion de la scroll bar + la hauteur de la fênètre intérieur avec les -200px
        if (result > positionElementTop) { // condition si le résultat est supérieur à la position haute de l'élément
            p.classList.add('pVisible');
        } else {
            p.classList.remove('pVisible');
        }
    }
}
showParagrapheOnScroll() // executer la fonction après le chargement de la page pour afficher les paragraphe qui peuvent être afficher
