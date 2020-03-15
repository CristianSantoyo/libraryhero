function Morraco(x1, y1){
	this.x = x1;
	this.y = y1;

	this.estacion = 0;
	this.isPasando = false;
	this.isSelecto = false;
	
	this.isDesplazandose = false;
	this.xObjetivo = 0;
	this.yObjetivo = 0;
	this.item = "";	

	this.cambiarPerfil = function(perfil){
		switch(perfil){
			case "frente der":
				this.img = $("#frenteDer")[0];
				break;
			case "frente izq":
				this.img = $("#frenteIzq")[0];
				break;			
		}
	}

	this.desplazarce = function(indice) {
		switch(indice){
			case 0:
				this.xObjetivo = 370;
				this.yObjetivo = 195;
				break;
			case 1:
				this.xObjetivo = 720;
				this.yObjetivo = 195;
				break;
			case 2:
				this.xObjetivo = 610;
				this.yObjetivo = 295;
				break;
			case 3:
				this.xObjetivo = 510;
				this.yObjetivo = 405;
				break;
			case 4: 
				this.xObjetivo = 885;
				this.yObjetivo = 405;
				break;				

		}
	}

	this.recogerItem = function(pedido){
		this.item = pedido.item;
		this.itemImg = pedido.img;
	}

	this.dibujar = function(ctx){		
		if(this.isSelecto){				
				ctx.drawImage($("#flechita")[0], this.x + 30, this.y - 55);				
			}		
		if (this.isPasando){			
				ctx.drawImage(this.img, this.x-5, this.y-5, 100, 89);			
			}else{			
				ctx.drawImage(this.img, this.x, this.y);
			}
		if (this.item != ""){
			ctx.drawImage(this.itemImg, this.x-5, this.y-10);
		}
	}

}