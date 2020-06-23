function maFonction() {
    console.log("Hello World !");

    var bin = confirm("Press a button !");
    console.log(bin);


}
function maFonction2() {
    console.log("Hello World !");
}

function gestionVariables() {
    var x = 1;
    var y = 3;
    var z = "8";
    var t = "2";
    var u = "bonjour";
    var v = "3bonjour";
    var m;
    var n = 2.5;
    console.log(x + y); // 4
    console.log(x + z); // 18
    console.log(x + parseInt(z)); // 9
    console.log(x + t); // 12
    console.log(x + y + z); // 48
    console.log(z + y + x); // 831
    console.log(x + u); // 1bonjour
    console.log(x + parseInt(u)); // NaN
    console.log(x + v); // 13bonjour
    console.log(x + parseInt(v)); // 4
    console.log(u + v); // bonjour3bonjour
    console.log(x + m); // NaN
    console.log(x + n); // 3.5
}

function concatStr() {
    var a = "bon";
    var b = 'jour';
    var resultat = a * b;
    console.log(resultat);
    // affiche NaN
    console.log(b + parseInt(a));
    // affiche jourNaN
    console.log(a + b);

}

function checkOdd(param) {
    var nbr;
    nbr = Number(param);
    if (nbr % 2 == 0) {
        console.log("Nombre pair");
    }
    else {
        console.log("Nombre impair");
    }
}

function lePlusGrandDesDeux(pParam1, pParam2) {
    var lResult;
    var lResultStr;

    if (Number(pParam1) > Number(pParam2)) {
        lResultStr = pParam1 + " est plus grand que " + pParam2;
        lResult = pParam1;
    } else if (Number(pParam1) < Number(pParam2)) {
        lResultStr = pParam1 + " est plus petit que " + pParam2;
        lResult = pParam2;
    }else{
        lResultStr = "les deux paramètres sont identiques."
        lResult = pParam1;
    }
    console.log(lResultStr);
    return lResult;
}

function lePlusGrand() {
    console.log( "Calcul du plus grand des deux premiers paramètres ..... ");
    var lParam1 = document.getElementById("input1").value;
    var lParam2 = document.getElementById("input2").value;
    if (isNaN(lParam1) || isNaN(lParam2)) {
        lResultStr = "Un des paramètres n'est pas un nombre. merci de les ressaisir."
    }

    var lResult = lePlusGrandDesDeux( lParam1, lParam2); 


    document.write( "Résultat .......");

    var lResulMark = document.getElementById("Resultat");

}

function lePlusGrandDesCinq(pParam1, pParam2, pParam3, pParam4, pParam5) {
    var lResult;
    var lTri1 = lePlusGrandDesDeux(pParam1, pParam2);
    var lTri2 = lePlusGrandDesDeux(pParam3, pParam4);
    var lTri3 = lePlusGrandDesDeux( Number(lTri1), Number(lTri2));
    var lTri4 = lePlusGrandDesDeux(lTri3, pParam5);
    lResult = "Le plus grand des 5 est : " + lTri4;

    console.log(lResult);
}

function lePlusGrandFull() {
    console.log( "Calcul du plus grand des cinq premiers paramètres ..... ");
    var lParam1 = document.getElementById("input1").value;
    var lParam2 = document.getElementById("input2").value;
    var lParam3 = document.getElementById("input3").value;
    var lParam4 = document.getElementById("input4").value;
    var lParam5 = document.getElementById("input5").value;

    if (isNaN(pParam1) || isNaN(pParam2) || isNaN(pParam3) || isNaN(pParam4) || isNaN(pParam5)) {
        lResult = "Un des paramètres n'est pas un nombre. merci de les ressaisir."
        return;
    } 

    console.log( lePlusGrandDesCinq( lParam1, lParam2, lParam3, lParam4, lParam5));
}


function triLesTrois(pParam1, pParam2, pParam3){
    var lResult;
    if (isNaN(pParam1) || isNaN(pParam2) || isNaN(pParam3)) {
        lResult = "Un des paramètres n'est pas un nombre. merci de les ressaisir."
    }else {
        var lValue1 = Number(pParam1);
        var lValue2 = Number(pParam2);
        var lValue3 = Number(pParam3);

        if( lValue1 > lValue2){
            if( lValue1 > lValue3){
                lResult = lValue1 + ",";
                if( lValue2 >= lValue3){
                    lResult += lValue2 + "," + lValue3;
                }else {
                    lResult += lValue3 + "," + lValue2;
                }
            }else {
                lResult = lValue3 + ",";
                if( lValue1 >= lValue2){
                    lResult += lValue1 + "," + lValue2;
                }else {
                    lResult += lValue2 + "," + lValue1;
                }
            }
        } else if( lValue1 < lValue2){
            if( lValue2 > lValue3){
                lResult = lValue2 + ",";
                if( lValue1 >= lValue3){
                    lResult += lValue1 + "," + lValue3;
                }else {
                    lResult += lValue3 + "," + lValue1;
                }
            }else {
                lResult = lValue3 + ",";
                if( lValue1 >= lValue2){
                    lResult += lValue1 + "," + lValue2;
                }else {
                    lResult += lValue2 + "," + lValue1;
                }
            }
        } else if( lValue1 = lValue2){
            if( lValue2 > lValue3){
                lResult = lValue3 + "," + lValue2 + "," + lValue1;
            }else {
                lResult = lValue1 + "," + lValue2 + "," + lValue3;
            }
        } 

    }

    console.log(lResult);
}
function tri() {
    console.log( "tri des trois paramètres (plus grand vers plus petit)..... ");

    var lParam1 = document.getElementById("input1").value;
    var lParam2 = document.getElementById("input2").value;
    var lParam3 = document.getElementById("input3").value;

    console.log( triLesTrois( lParam1, lParam2, lParam3));
}

