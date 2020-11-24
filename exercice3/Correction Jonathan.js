let paragraphs = document.getElementsByTagName('p');
window.addEventListener('scroll', showParagrapheOnScroll);

function showParagrapheOnScroll() {
    for(let p of paragraphs) {
        let positionElementTop = p.offsetTop; // on récupère le nb de px entre le haut de page et le haut des P (valeur fixe)
        let positionScrollY = window.scrollY; // on récupère la position verticale, en px, du scroll
        let windowHeight = window.innerHeight / 2; // hauteur de la fenêtre / 2
        let result = positionScrollY + windowHeight // permet de descendre la ligne d'apparition des P vers le milieu de la fenêtre
        if(result > positionElementTop) {
            p.classList.add('pVisible');
        } else {
            p.classList.remove('pVisible')
        }
    }
}
showParagrapheOnScroll() // exécute la fonction au chargement de la page afin d'afficher les P pouvant déjà être affichés (sans avoir à scroller)
 



 // POURQUOI result = positionScrollY + windowHeight ?
 // Si on utilise IF(positionScrollY > positionElementTop) le P n'apparait qu'une fois arrivé tout en haut de la page (on scrolle d'une valeur > à la position du P dans la page). Le rendu n'est pas terrible.
 // Pour un meilleur rendu, il faut décaler vers le bas la ligne d'apparition du P = faire apparaitre le P plus tôt dans la fenêtre ==> "gonfler la valeur du scroll"
 // On ajoute au scrollY la demi-hauteur de la fenêtre (result = positionScrollY + windowHeight) ==> plus rapidement result > positionElementTop, P apparait lorsqu'il arrive au milieu de la fenêtre. 

 