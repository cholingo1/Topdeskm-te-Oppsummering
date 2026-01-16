var Saker = {
    totalSaker: 0,
    fellesKø: 0,
    saksTyper: {
        bestillingsSaker: 0,
        romsjekkSaker: 0,
        bistandSaker: 0,
        utlaanSaker:0,
        utildelteSaker:0,
        tildelteSaker:0,
        romreservasjoner:0,
        windowsUpgrade:0
    }
}

/*
var Saker = {
    totalSaker: 0,
    fellesKø: 0,
    saksTyper: {
        bestillingsSaker: 0,
        romsjekkSaker: 0,
        bistandSaker: 0,
        utlaanSaker:0,
        utildelteSaker:0,
        romreservasjoner:0,
        windowsUpgrade:0,
        tildelteSaker:0
    }
}


Saker.totalSaker = 10;
Saker.saksTyper.bestillingsSaker = 5;


Saker.fellesKø = Saker.totalSaker;
for ( let [key,value] of Object.entries(Saker.saksTyper)) {
    Saker.fellesKø = Saker.fellesKø - value;
} 
*/

/*
var totalSaker = 0;
var fellesKø = 0;
//var bestillingsSaker = 0;
var romsjekkSaker = 0;
var bistandSaker = 0;
var utlaanSaker = 0;
var utildelteSaker = 0;
var romreservasjoner = 0;
var windowsUpgrade = 0;
var tildelteSaker = 0;
*/

function oppdaterStash() {
    

    Saker.fellesKø = 0;
    for ( let [key,value] of Object.entries(Saker.saksTyper)) {
        // This shit not workie yet. Pls do FIX.
        if ( key != "romreservasjoner" && key != "windowsUpgrade") {
            Saker.fellesKø = Saker.fellesKø + value;
        }

    } 
    document.getElementById("totalAntallFelles").textContent = Saker.fellesKø;
    

    Saker.saksTyper.tildelteSaker = Saker.totalSaker - Saker.fellesKø;
    document.getElementById("tildelteSaker").textContent = Saker.saksTyper.tildelteSaker;

    /*
    for ([key, value] of Object.entries(Saker)) {

        
    // If-sjekken er "om enten key er identisk med 'first' eller key er identisk med 'third'
        if ( key === 'romreservasjoner' && key === 'windowsUpgrade') {
        // continue her betyr 'ikke gjør resten av denne runden i for-loopen, fortsett med neste runde isteden'
        continue;

    }
        Saker.fellesKø += 1;


 */   }

function leggTilTotal() {
    Saker.totalSaker = document.getElementById("totalInput").value;
    document.getElementById("totalAntallSaker").textContent = Saker.totalSaker;
    oppdaterStash();
    //oppdaterTildelt();
}
/*
function leggTilFelles() {
Saker.fellesKø = document.getElementById("felleskøInput").value;
document.getElementById("totalAntallFelles").textContent = Saker.fellesKø;
oppdaterStash();
}*/

function leggTilBestilling() {
    Saker.saksTyper.bestillingsSaker += 1;
    document.getElementById("antallBestilling").textContent  = Saker.saksTyper.bestillingsSaker;
    oppdaterStash();
}

function leggTilRomsjekk() {
    Saker.saksTyper.romsjekkSaker += 1;
    document.getElementById("antallRomsjekk").textContent = Saker.saksTyper.romsjekkSaker;
    oppdaterStash();
}

function leggTilBistand() {
    Saker.saksTyper.bistandSaker += 1;
    document.getElementById("totalBistand").textContent = Saker.saksTyper.bistandSaker;
    oppdaterStash();
}

function leggTilUtlaan() {
    Saker.saksTyper.utlaanSaker += 1;
    document.getElementById("totalUtlaan").textContent = Saker.saksTyper.utlaanSaker;
    oppdaterStash();
}

function leggTilUtildelt() {
    Saker.saksTyper.utildelteSaker += 1;
    document.getElementById("antallUtildelt").textContent = Saker.saksTyper.utildelteSaker;
    oppdaterStash();
}

function leggTilRomreservasjon() {
    Saker.saksTyper.romreservasjoner += 1;
    document.getElementById("antallRomreservasjon").textContent = Saker.saksTyper.romreservasjoner;
    oppdaterStash();
}


function leggTilWindows() {
    Saker.saksTyper.windowsUpgrade += 1;
    document.getElementById("antallWindows").textContent = Saker.saksTyper.windowsUpgrade;
    oppdaterStash();
}

function leggTilTildelt() {
    Saker.saksTyper.tildelteSaker += 1;
    document.getElementById("tildelteSaker").textContent = Saker.saksTyper.tildelteSaker;
    oppdaterStash();
}