function Pedido(){	
	this.existe = false;
	this.isInMesa = false;
	this.isPasando = false;
	this.numMesa = 10;

	this.setPedido = function(item1, img1, n){
		this.item = item1;
		this.img = img1;
		this.numMesa = n;
		if (this.item == null && this.img == null){
			this.existe = false;
			this.isInMesa = false;
		}else{
			this.existe = true;
			this.isInMesa = true;
		}
	}

	this.quitarPedido = function(){		
		this.existe = false;
		this.isInMesa = false;		
	}

	this.dibujar = function(ctx, x, y){
		if (this.isInMesa){
			if (this.isPasando){
				ctx.drawImage(this.img, x-5, y-5, 55, 55);
			}else{
				ctx.drawImage(this.img, x, y);
			}
		}
			
	}
}