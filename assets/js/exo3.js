function afficheObjet(pObjet) {
    for (const [key, value] of Object.entries(pObjet)) {
        console.log(`${key}: ${value}`);
    }
}

function exo31() {
    console.log("--------------");
    console.log("Exo 3.1");
    console.log("--------------");
    let student = {
        name: "David Rayy",
        class: "VI",
        rollno: 12
    };

    console.log("student avant delete = ");
    afficheObjet(student);
    delete student.rollno;
    console.log("student après delete = ");
    console.log( JSON.stringify(student));
}

function exo32() {
    console.log("--------------");
    console.log("Exo 3.2");
    console.log("--------------");
    let Recette = function( pTitre, pPortions){
        this.titre = pTitre;
        this.portion = pPortions;
        this.ingredients = new Array();

        this.addIngredient = function( pIngredient){
            this.ingredients.push( pIngredient);
        }

        this.afficheRecette = function (){
            console.log( "nom : '" + this.titre + "'");
            console.log( "servies : " + this.portion);

            for(let elt in this.ingredients){ console.log( this.ingredients[elt]);}
        }
    }

    let lRecette = new Recette( "soca", 2);
    lRecette.addIngredient( "Pois-chiche");
    lRecette.addIngredient( "Soleil");
    lRecette.addIngredient( "Poivre");
    lRecette.afficheRecette();
}

function exo33() {
    console.log("--------------");
    console.log("Exo 3.3");
    console.log("--------------");
    let Livre = function( pTitre, pAuteur){
        this.titre = pTitre;
        this.auteur = pAuteur;
        this.lu = false;
        this.afficheLivre = function (){
            console.log( JSON.stringify(this));
        }
    }

    let Biblio = function(){
        this.livres = new Array();

        this.addLivre = function( pLivre){
            this.livres.push( pLivre);
        }

        this.afficheBib = function (){
            for(let li in this.livres){ this.livres[li].afficheLivre();}
        }
    }

    let lLivre1 = new Livre( "Titre 1", "Auteur 1");
    let lLivre2 = new Livre( "Titre 2", "Auteur 2");
    let lLivre3 = new Livre( "Titre 3", "Auteur 3");
    let lLivre4 = new Livre( "Titre 4", "Auteur 4");
    let lLivre5 = new Livre( "Titre 5", "Auteur 5");

    let lBib = new Biblio();
    lBib.addLivre( lLivre1);
    lBib.addLivre( lLivre2);
    lBib.addLivre( lLivre3);
    lBib.addLivre( lLivre4);
    lBib.addLivre( lLivre5);

    lLivre2.lu = true;
    lLivre3.lu = true;

    lBib.afficheBib();
}