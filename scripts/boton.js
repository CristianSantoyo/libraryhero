function Boton (tex, x1, y1){
	
	this.texto = tex;
	this.x = x1;
	this.y = y1;
	this.isPasando = false;
	this.isSelecto = false;

	this.dibujar = function(ctx){
		
		contextoBuffer.font = "bold 40px Showcard Gothic";
		if (this.isPasando){
			if (this.isSelecto){
				contextoBuffer.font = "bold 35px Showcard Gothic";
				ctx.drawImage($("#botonSelecto")[0], this.x + 22, this.y + 3, 410, 84);
			}else{
				ctx.drawImage($("#botonSelecto")[0], this.x, this.y);
			}		
			
		}else{
			ctx.drawImage($("#boton")[0], this.x, this.y);
		}
		ctx.fillStyle = "white";
		ctx.strokeStyle = "black";
		ctx.textAlign = "center";
		
		
		ctx.fillText(this.texto, this.x + 222, this.y + 60);
		ctx.strokeText(this.texto, this.x + 222, this.y + 60);
		
	}
	
}
