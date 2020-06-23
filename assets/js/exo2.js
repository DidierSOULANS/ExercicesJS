function exo21() {
    let lDate = new Date();
    const lTabJour = new Array("Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi");
    console.log("Aujourd'hui nous sommes : " + lTabJour[lDate.getDay()] + ", et il est " + lDate.getHours() + "h" + lDate.getMinutes() + "m" + lDate.getSeconds() + "s");
}

function exo22() {
    const lFizz = "Fizz";
    const lBuzz = "Buzz";

    for (let lI = 1; lI <= 100; lI++) {
        let lModuloTrois = lI % 3;
        let lModuloCinq = lI % 5;

        if ((lModuloTrois == 0) && (lModuloCinq == 0)) {
            console.log(lFizz + lBuzz);
        } else if (lModuloTrois == 0) {
            console.log(lFizz);
        } else if (lModuloCinq == 0) {
            console.log(lBuzz);
        } else {
            console.log(lI);
        }

    }
}

function exo23() {
    const lNotes = new Array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20);
    let lNbEtudiantsPlusDix = lNotes.reduce(function (sum, note) {
        if (note > 10){ sum++;} return sum;
    }, 0);

    let lMoyEtudiants = lNotes.reduce(function (sum, note) {
        return sum + note;
    }, 0);

    

    console.log("Nb étudiants ayant eu plus de 10 : " + lNbEtudiantsPlusDix);
    console.log("Moyenne des étudiants : " + lMoyEtudiants / lNotes.length);
    console.log("Note maximale des étudiants : " + Math.max.apply(null, lNotes));
    console.log("Note maximale des étudiants (autre méthode) : " + Math.max(...lNotes));
    console.log("La note 11 est à l'index : " + lNotes.indexOf( 11));
}