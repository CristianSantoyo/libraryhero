function Asistente (x1, y1, ti){
	
	this.x = x1;
	this.y = y1;
	this.tipo = ti;
	this.isVivo = true;
	this.cuerpo = true;
	
	switch(this.tipo){
		case 1:
			this.img = $("#asistente1")[0];
			this.efectividad = 1	
			break;
		case 2:
			this.img = $("#asistente2")[0];		
			this.efectividad = 2	
			break;

		case 3:
			this.img = $("#asistente3")[0];	
			this.efectividad = 4;		
			break;
	}

	this.dibujar = function(ctx){
		if (this.isVivo){
			ctx.drawImage(this.img,this.x,this.y);
		}else{
			if (this.cuerpo){
				ctx.drawImage($("#cadaver")[0],this.x,this.y);
			}else{
				ctx.drawImage($("#croquis")[0],this.x,this.y);
			}
		}
		
	}	
	
}
