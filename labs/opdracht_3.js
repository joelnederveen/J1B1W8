var naam, leeftijd

function main(){
	naam = prompt ("naam:", "naam:")
	leeftijd = prompt ("leeftijd:", "leeftijd:")

	if (naam == "stop" || leeftijd == "stop"){
		return;
	}

	Hello (naam, leeftijd)
}
function Hello(naam, leeftijd){
    document.write("Hallo " + naam + ", je leeftijd is " + leeftijd + " jaar. <br>")
    main()
}