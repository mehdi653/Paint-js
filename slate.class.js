
var Slate = function(pen) 
{
	// attributs de la classe
	this.pen = pen;
	console.log(pen);
	
	this.canvas = document.getElementById("slate");
	this.context = this.canvas.getContext("2d");
	this.isDrawing = false;
	this.clear=document.getElementById('clear');
	this.canvas.addEventListener("mousemove", this.onMouseMove.bind(this));
	this.canvas.addEventListener("mousedown", this.mouseDown.bind(this));
	this.canvas.addEventListener("mouseup", this.mouseUp.bind(this));
	this.clear.addEventListener('click',this.Clear.bind(this));
	this.canvas.addEventListener('mouseleave', this.onMouseLeave.bind(this));

	
}




// Methode onMouseMove
Slate.prototype.onMouseMove = function(event) 
{    
	if ( this.isDrawing==true) {

		var position = this.getMouseLocation(event);
		
		// this.context.fillRect(position.x, position.y, this.pen.sizet, this.pen.sizet);
		
		this.pen.config(this.context);
		this.context.beginPath();
		this.context.moveTo(this.oldPos.x, this.oldPos.y)
		this.context.lineTo(position.x,position.y);

		this.context.stroke();
		this.oldPos=this.getMouseLocation(event);
		}
}
// Methode getMouseLocation
Slate.prototype.getMouseLocation = function(event)
{
	// Recupère les coordonné de la souris : 0, 0 = en haut a gauche du navigateur
	var oldX = event.clientX;
	var oldY = event.clientY;
	// Recupère les infos du canvas (position et taille)
	var size = this.canvas.getBoundingClientRect();
	// Stocker la position du point en haut a gauche du canvas
	var canvasX = size.left;
	var canvasY = size.top;
	// Convertir les coordonées : 0, 0 = en haut a gauche du canvas
	var newX = oldX - canvasX;
	var newY = oldY - canvasY;
	var pos = { x: newX, y: newY };
	return pos;
}

Slate.prototype.mouseDown = function(event) 
{
	// ici le this correspond a quoi :
	// - le this de l'evenement ?
	// - le this de la classe ?
	// pour savoir, on a besoin de le preciser au moment on on crée l'evenement (ligne 17)
	this.isDrawing = true;
	this.oldPos = this.getMouseLocation(event)
	
}

Slate.prototype.mouseUp = function(event) 
{
	this.isDrawing = false;
}

Slate.prototype.Clear =function()

{
	this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
}
Slate.prototype.onMouseLeave = function()
{
    // On ne peut plus dessiner sur l'ardoise.
    this.isDrawing = false;
};



