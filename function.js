function Personne(firstName, lastName) {
	this.firstName = firstName;
	this.lastName = lastName;

	// Console.log("Créer une personne");
};

Personne.prototype.nomComplet = function() {
	return this.firstName + "  " + this.lastName;
};

Personne.prototype.direBonjour = function() {
	return "Bonjour, je suis " + this.firstName + "  " + this.lastName;
};

Personne.prototype.direAurevoir = function() {
	return "Aurevoir!";
};

function Etudiant(prenom, nom, domain) {
	Personne.call(this, prenom, nom);
	this.domain = domain;
};

Etudiant.prototype = new Personne();
Etudiant.prototype.constructor = Etudiant;

Etudiant.prototype.direBonjour = function() {
	return "Bonjour, je suis " + this.firstName + "  " + this.lastName
			+ ", je suis étudiant de " + this.domain + ".";
};

function Chambre(libellé) {
	this.libellé = libellé;
};

function MovePerson() {
	var sour = document.getElementById("client");

	sour.ondragstart = function(e) {
		var personId = e.target.id;
		var personName = document.getElementById(personId).getElementsByTagName("p");
		e.dataTransfer.setData("text", personId);		
		document.getElementById("infoClient").innerHTML = "You are moving " + personName[0].innerHTML;
	};
};

function MovePersonEntreChambre(IdChambre) {
	var sour = document.getElementById(IdChambre);

	sour.ondragstart = function(e) {
		var personId = e.target.id;
		e.dataTransfer.setData("text", personId);
	};
};

function ChosirChambre(IdChambre) {

	var target = document.getElementById(IdChambre);
	target.ondragenter = function(e) {
		e.preventDefault();		
	};

	target.ondragover = function(e) {
		e.preventDefault();		
	};

	target.ondrop = function(e) {
		var draggedID = e.dataTransfer.getData("text");
		var oldElem = document.getElementById(draggedID);

		oldElem.parentNode.removeChild(oldElem);
		target.appendChild(oldElem);
		e.preventDefault();
		document.getElementById("infoClient").innerHTML = "Clients";
	};
	MovePersonEntreChambre(IdChambre);
};

function ResetPerson() {

	var target = document.getElementById("client");
	target.ondragenter = function(e) {
		e.preventDefault();
	};

	target.ondragover = function(e) {
		e.preventDefault();
	};

	target.ondrop = function(e) {
		var draggedID = e.dataTransfer.getData("text");
		var oldElem = document.getElementById(draggedID);

		oldElem.parentNode.removeChild(oldElem);
		target.appendChild(oldElem);
		e.preventDefault();
		MovePerson();
	};
};

