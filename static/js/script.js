// Variabelen voor alle elementen zodat ik deze later gemakkelijk kan gebruiken.
var joint = document.getElementById("joint")
var rode_ogen = document.getElementById("ogen-rood")
var coke = document.getElementById("coke")
var oog_links = document.getElementById("oog-links")
var oog_rechts = document.getElementById("oog-rechts")
var rasta = document.getElementById("rasta")
var cap = document.getElementById("cap")
var call = document.getElementById("call_to_action")
var info = document.getElementById("info")
var main = document.getElementById("main")

// ik maak hier een variable die aangeeft welke drugs er is geselecteerd, deze pas ik aan in de functie
var drugs = "geen"
// Hetzelfde voor de hoeden
var hat = "none";

// zorg ervoor dat alle gewenste elementen uit de svg niet zichtbaar zijn als de body geladen is.
function hide() {
  console.log("onload function")
  joint.classList.add("hidden");
  rode_ogen.classList.add("hidden");
  coke.classList.add("hidden");
  oog_rechts.classList.add("hidden");
  oog_links.classList.add("hidden");
  call.classList.add("hidden");
  info.classList.add("hidden");
  rasta.classList.add("hidden");
  cap.classList.add("hidden")
}

// Voeg een EventListener toe op de verschillende drugsknoppen.
document.getElementById("weed").addEventListener("click", weed);
document.getElementById("cocaine").addEventListener("click", cocaine);
document.getElementById("meth").addEventListener("click", meth);

//Eventlisteners voor het portret van hitler, deze zorgen ervoor dat als je erover hovert er een h4 tevoorschijn komt, de 2 eventlistener zorgt ervoor dat deze verdwijnt als je niet meer hovert.
document.getElementById("hitler").addEventListener("mouseenter", show);
document.getElementById("hitler").addEventListener("mouseout", dontShow);
document.getElementById("hitler").addEventListener("click", showInfo);

// functie die bepaalde elementen in de svg laat zien door de class hidden te verwijderen.
function weed() {
  oog_rechts.classList.add("hidden");
  oog_links.classList.add("hidden");
  coke.classList.add("hidden");
  joint.classList.remove("hidden");
  rode_ogen.classList.remove("hidden");
  drugs = "wiet";
  changeText();
}

// functie die bepaalde elementen in de svg laat zien door de class hidden te verwijderen.
function cocaine() {
  joint.classList.add("hidden");
  rode_ogen.classList.add("hidden");
  coke.classList.remove("hidden");
  oog_rechts.classList.remove("hidden");
  oog_links.classList.remove("hidden");
  drugs = "coke";
  changeText();
}

// functie die bepaalde elementen in de svg laat zien door de class hidden te verwijderen.
function meth() {
  joint.classList.add("hidden");
  rode_ogen.classList.add("hidden");
  coke.classList.add("hidden");
  oog_rechts.classList.add("hidden");
  oog_links.classList.add("hidden");
  drugs = "meth";
  changeText();
}

//Check of de gebruiker op mobiel is, als dit zo is wil ik het hover effect niet uitvoeren omdat dit blijft staan als je ergens op klikt
function isMobile() {
return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}
// 2 functies die ervoor zorgen dat een h4 zichtbaar en onzichtbaar wordt als er gehoverd wordt.
function show() {
  if (!isMobile()) {
    call.classList.remove("hidden");
  }

}

function dontShow() {
  if (!isMobile()) {
  call.classList.add("hidden");
}
}

// Als er nog geen drugs geselecteerd is en je klikt op het portret van Hitler gebeurt er niks, als je wel iets hebt geselecteerd en dit doet komt er informatie tevoorschijn.
function showInfo() {
  if (drugs !== "geen") {
    main.classList.add("hidden");
    info.classList.remove("hidden");
  } else {
    alert("Select a drug first");
  }
}

function changeText() {
  if (drugs == "wiet") {
    document.getElementById("titel").innerHTML = "Weed";
    document.getElementById("titel").setAttribute("data-text", "Weed")
    document.getElementById("alinea").innerHTML = "The use and cultivation of cannabis are banned in the United States. During World War II, the U.S. required hemp for parachutes, fuel, ship ropes, and uniforms. Farmers are called upon to grow hemp en masse. Hemp cultivation is banned again after WWII.";
  } else if (drugs == "coke") {
    document.getElementById("titel").innerHTML = "Cocaine";
    document.getElementById("titel").setAttribute("data-text", "Cocaine")
    document.getElementById("alinea").innerHTML = "During World War 2 cocaine was still legal, it wasn’t like the cocaine we know nowadays. It was a liquid that soldiers mixed with rum to stay awake and become machines. The drug was used by all fronts and most of it was produced in Amsterdam."
  } else if (drugs == "meth") {
    document.getElementById("titel").innerHTML = "Meth";
    document.getElementById("titel").setAttribute("data-text", "Meth")
    document.getElementById("alinea").innerHTML = "Methamphetamine was used early on as a medical treatment for narcolepsy, asthma and as a weight-loss drug. During World War II, the Allies and Axis powers both used the drug to keep troops awake. After the war, meth use increased dramatically, even after it was outlawed by the United States in 1970. "
  }
}

function back() {
  main.classList.remove("hidden");
  info.classList.add("hidden");
}

document.addEventListener('keydown', test);

var background = document.getElementById('background'),
  colors = ['#E94B3CFF', '#228FCF', '#E8EBC2', '#F3EA1B'];



function test(x) {
  var key = x.key;

  if (key == "ArrowLeft") {
    color = colors.shift();
    colors.push(color);

    background.style.backgroundColor = color;
  } else if (key == "ArrowRight") {

    if (hat == "none") {
      rasta.classList.remove("hidden");
      cap.classList.add("hidden");
      hat = "rasta"
    } else if (hat == "rasta") {
      rasta.classList.add("hidden");
      cap.classList.remove("hidden");
      hat = "cap";
    } else if (hat == "cap") {
      rasta.classList.add("hidden");
      cap.classList.add("hidden");
      hat = "none";
    }

  }

}
