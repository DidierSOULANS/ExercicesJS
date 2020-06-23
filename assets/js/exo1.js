function exo1() {
    document.write( "<h1>Bon");
    document.write( "jour !</h1><br>");
    var lI = 123;
    document.writeln( "Mon nombre : " + lI + "<br>");
    document.writeln( "Ma phrase : je suis en formation" + "<br>");

    var lPi = Math.PI;
    document.writeln( "La valeur de Pi : " + lPi + "<br>");

    var lRandom = Math.random(0, 1);
    document.writeln( "un nombre aléatoire entre 0 et 1 : " + lRandom + "<br>");

    var lTemperature = 21;
    if( lTemperature < 30){
        document.writeln( lTemperature + "° ? Il fait pas chaud !<br>");
    }

    document.writeln( "Compteur while .... <br>");
    var lCmpt1 = 1;
    while( lCmpt1 <= 100){
        document.write( lCmpt1 + " ");
        lCmpt1++;
    }

    document.writeln( "<br>Compteur for .... <br>");
    for( var lCmpt2 = 1; lCmpt2 <= 100; lCmpt2++){
        document.write( lCmpt2 + " ");
    }

    document.writeln( "<br>Carré .... <br>");
    for( var lCmpt3 = 1; lCmpt3 <= 10; lCmpt3++){
        for( var lCmpt4 = 1; lCmpt4 <= 10; lCmpt4++){
            document.write( "*");
        }
        document.write( "<br>");
    }
}

function exo2(){
    var lTab = new Array( 1, 2, 3, 4 , 5);
    document.write( "<br>Somme d'un tableau d'entiers .... : ");
    var lSomme = lTab.reduce(function (pSum, pElem){
        return pSum + pElem;
    })
    document.write( lSomme + "<br>");
    document.write( "<br>Produit d'un tableau d'entiers .... : ");
    var lProduit = lTab.reduce(function (pSum, pElem){
        return pSum * pElem;
    })
    document.write( lProduit + "<br>");

}

function exo3(){
    document.write( "<br>Exo 3 .... : <br>");

    for( var lCompt5 = 0; lCompt5 <= 15; lCompt5 ++){
        var lIsPair = lCompt5%2 ? lCompt5 + " est un nombre impair" : lCompt5 + " est un nombre pair";
        document.write( lIsPair + "<br>");
    }
}


function exo4(){
    var lTab = [ ["David", "80"], ["Vinoth", "77"], ["Divaa", "88"], ["Ishitha", "95"], ["Thomas", "68"]];
    var lSumNotes = 0;
    for(var elt of lTab){
        var lNote = Number(elt[1]);
        lSumNotes += lNote;
    }

    var lMoy = Number(lSumNotes) / lTab.length;

    var lRange = [ ["<60", "F"], ["<70", "D"], ["<80", "C"], ["<90", "B"], ["<100", "A"]];

    var lResult = "";
    for(var elt of lRange){
        var lRgStr = elt[0];
        var lRg = Number(lRgStr.substr(1, lRgStr.length - 1));
        if( lMoy > lRg){
            lResult = elt[1];          
        }
    }
    document.write( "La Note moyenne de la classe est = " + lResult + "<br>");
}

var lNamesTab = new Array();
function exo5AjouterNom(){
    var lNom = document.getElementById("nom").value;
    lNamesTab.push(lNom);

    console.log( lNamesTab);
}

function exo5Random(){
    var lRandom = Math.floor( Math.random() * (lNamesTab.length));
    console.log( lRandom);
    var lDiv = document.getElementById("ResultRandom");
    lDiv.innerHTML = "<h4>" + lNamesTab[lRandom] + "</h4>";
}