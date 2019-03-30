function capitalize(text){
var text = prompt("What is your name?")
return text.charAt(0).toUpperCase() + text.slice(1)
}

alert("Hello " + capitalize())
