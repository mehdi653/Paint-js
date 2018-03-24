var Pen = function(slate) 
{
	$(".colors").on('click',this.colorNow.bind(this));
	$(".s1").on('click',this.size.bind(this));
	this.sizet=5;
	this.color="black";
	
}

Pen.prototype.size=function(event)
{   console.log("size");
    this.sizet=$(event.currentTarget).data("size");
}

Pen.prototype.colorNow=function(event)
{  
	console.log("coucou");
	this.color=$(event.currentTarget).data("color");
}



Pen.prototype.config=function(context)
{   console.log(this.context)
	context.lineWidth = this.sizet;
	context.strokeStyle = this.color;
	context.lineCap="round";
}

