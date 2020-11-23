let fableList = document.getElementsByTagName('section'); // selectionne tout les élément 'section' \\

for (const element of fableList) { // Boucle forOf pour intéragir avec tout les éléments du tableau indiqué \\
    element.style.display = 'none';
};

let fableLinkList = document.getElementsByClassName('nav-link'); // sélectionne tout les élément 'nav-link' \\
for (const element of fableLinkList) {
    element.addEventListener('click', showFable)
}

function showFable() {
    let fablePosition = this.href.indexOf('#') + 1; // +1 Identifie le caractère suivant le '#' \\
    let fable = this.href.substring(fablePosition);
    for (const element of fableList) { // Boucle forOf pour intéragir avec tout les éléments du tableau indiqué \\
        if (element.id == fable) { // Si mon id est égale a fable alors on affiche l'element \\
            element.style.display = 'block';
        } else {
            element.style.display = 'none'; // Sinon on cache l'élément \\
        }
    }
}

// "console.log(this.href)" This est celui qui à declencher l'évènements. Event ou This utilise l'élément \\
// console.log(event.currentTarget.href) sert a ciblé l'élément qui a fait l'évènement. \\