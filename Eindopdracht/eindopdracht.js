var input;
var orderedAmounts = {
    'bier' : 0,
    'fris' : 0,
    'wijn' : 0,
    '8bitterballen' : 0,
    '16bitterballen' : 0
}
var prijzen = [2, 4, 3, 5, 10]


function Main(){
    var vraag = prompt("Wat wilt u toevoegen aan uw bestelling", "Fris || Bier || Wijn || Snack");
    if (vraag.toLocaleLowerCase() == "fris" && isNaN(vraag.toLowerCase())){
        Bestellen(vraag.toLowerCase().trim())
    }
    else if (vraag.toLocaleLowerCase() == "bier" && isNaN(vraag.toLowerCase())){
        Bestellen(vraag.toLowerCase().trim())
    }
    else if (vraag.toLocaleLowerCase() == "wijn" && isNaN(vraag.toLowerCase())){
        Bestellen(vraag.toLowerCase().trim())
    }
    else if (vraag.toLocaleLowerCase() == "snack" && isNaN(vraag.toLowerCase())){
        Bestellen(vraag.toLowerCase().trim())
    }   
    else if (vraag.toLocaleLowerCase() == "stop" && isNaN(vraag.toLowerCase())){
        Bonnetje();
    }
    else{
        alert("Dit is geen geldigge input");
        Main();
    }
}
function Bonnetje(){
    var price1 = 0, price2 = 0, price3 = 0, price4 = 0, price5 = 0
    var bill = document.getElementById('bill')
    if(orderedAmounts['fris'] != 0){
        price1 = orderedAmounts['fris'] * prijzen[0]
        bill.innerHTML += ("Fris: " + orderedAmounts['fris'] + ", Prijs: " + " : €" + price1 + "<br>") 
    }
    if(orderedAmounts['bier'] != 0){
        price2 = orderedAmounts['bier'] * prijzen[1]
        bill.innerHTML += ("Bier: " + orderedAmounts['bier'] + ", Prijs: " + " : €" + price2 + "<br>")
    }
    if(orderedAmounts['wijn'] != 0){
        price3 = orderedAmounts['wijn'] * prijzen[2]
        bill.innerHTML += ("Wijn: " + orderedAmounts['wijn'] + ", Prijs: " + " : €" + price3 + "<br>")
    }
    if(orderedAmounts['8bitterballen'] != 0){
        price4 = orderedAmounts['8bitterballen'] * prijzen[3]
        bill.innerHTML += ("Schaaltje bitterballen 8 stuks: " + orderedAmounts['8bitterballen'] + ", Prijs: " + " : €" + price4 + "<br>")
    }
    if(orderedAmounts['16bitterballen'] != 0){
        price5 = orderedAmounts['16bitterballen'] * prijzen[4]
        bill.innerHTML += ("Schaaltje bitterballen 16 stuks: " + orderedAmounts['16bitterballen'] + ", Prijs: " + " : €" + price5 + "<br>")
    }

    var totaal = parseInt(price1) 
    totaal += parseInt(price2);     totaal += parseInt(price3) ;     totaal += parseInt(price4);     totaal += parseInt(price5);
    bill.innerHTML += ("Totaal: €" + totaal)

}

function Btoevoegen(orderType, vraag){
    orderedAmounts[orderType] += parseInt(vraag);
    Main();
}

function BTBtoevoegen(orderType, amount, amount2){
    if(orderType == "snack"){
        if (amount == 8){
            orderedAmounts['8bitterballen'] += parseInt(amount2)
        }
        else if (amount == 16){
            orderedAmounts['16bitterballen'] += parseInt(amount2)
        }
    }
    Main()
}

function Bestellen(orderType){
    if (orderType == "snack"){
        var groote = prompt("Hoeveel bitterballen zou u willen toevoegen", "8 || 16")
        if (groote.toLowerCase().trim() == "8" && !isNaN(groote.toLowerCase().trim()) || groote.toLowerCase().trim() == "16" && !isNaN(groote.toLowerCase().trim())){
            var amount = prompt("Hoeveel " + orderType + " in de hoeveelheid: " + groote + " wilt u toevoegen aan uw bestelling", "Hoeveelheid:")
            BTBtoevoegen(orderType, groote, amount);
        }
        else{
            alert("dit is geen geldigge input")
            Bestellen(orderType)
        }
    }
    else {
        var vraag = prompt("Hoeveel " + orderType + " wilt u toevoegen aan uw bestelling?:", "Hoeveelheid:")
        if (vraag.toLowerCase().trim() == "stop"){
            Bill()
        }
        else if(!isNaN(vraag.toLowerCase().trim())){
            Btoevoegen(orderType, vraag)
        }
        else{
            Bestellen(orderType)
        }
    }
}

