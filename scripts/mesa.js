function Mesa (x1,y1) {
	
	this.x = x1;		
	this.y = y1;
	this.img = $("#mesa")[0];
	this.ocupada = false;
	this.pasado = false;
	this.tiempoUso = -1;	
	this.clienteEnMesa = null;
	this.seTomoPedido = false;
	this.seEntregoPedido = false;
	this.isUtil = true;
	this.indicePedido = 10;
	//console.log(this.x);
	
	this.recibirCliente = function(cliente, asistente){
		this.clienteEnMesa = cliente;
		this.tiempoUso = cliente.necesidad/asistente.efectividad;		
	}

	this.esperaEnMesa = function(cliente){
		if (this.clienteEnMesa.pacienciaEnMesa < 1){
			this.ocupada = false;				
			this.seEntregoPedido = false;
			this.seTomoPedido = false;			
			cliente.marcharse();
			this.clienteEnMesa = null;	
			return true;
		}
		return false;
	}

	this.atender = function(puntaje, cliente){
		if (this.ocupada){
			this.tiempoUso--;			
			if (this.tiempoUso < 0){
				this.ocupada = false;				
				this.seEntregoPedido = false;
				this.seTomoPedido = false;
				cliente.marcharse();
				this.clienteEnMesa = null;
				sonidoFondo = $("#pagar")[0].play();
				return 100;
			}
		}
		return 0
	}

	this.explotar = function(){			
		this.ocupada = true;							
		this.isUtil = false;			
	}

	this.explotarConCliente = function(cliente, pedido){		
		this.clienteEnMesa.pacienciaEnMesa = -1;
		if (this.clienteEnMesa.pacienciaEnMesa < 0){
			this.isUtil = false;
			if (pedido != null){
				pedido.quitarPedido();
			}			
			this.ocupada = false;				
			this.seEntregoPedido = false;
			this.seTomoPedido = false;
			cliente.marcharse();
			this.clienteEnMesa = null;
			this.clienteEnMesa = null;				
		}		
	}

	this.dibujar = function(ctx){		
		
		ctx.font = "bold 22px Showcard Gothic";
		
		//cuando pasa el mouse
		if (this.pasado){			
			ctx.drawImage(this.img, this.x-5, this.y-5, 190, 90);			
		}else{			
			ctx.drawImage(this.img, this.x, this.y);
		}

		//tiempo de uso de la mesa
		if(this.ocupada){
			//cuando se entrega el pedido
			if (this.isUtil == false){
				return;
			}

			if (this.seEntregoPedido){
				ctx.strokeStyle = "Yellow";
				ctx.fillStyle="green";
				ctx.fillText(this.tiempoUso,this.x + 85, this.y - 30,);
				ctx.strokeText(this.tiempoUso,this.x + 85, this.y - 30,);
			}else{
				ctx.fillStyle="blue";
				ctx.strokeStyle = "Yellow";
				ctx.fillText(this.clienteEnMesa.pacienciaEnMesa,this.x + 85, this.y - 30,);
				ctx.strokeText(this.clienteEnMesa.pacienciaEnMesa,this.x + 85, this.y - 30,);
			}
			
			//cuando se toma el pedido
			if (this.seTomoPedido && this.seEntregoPedido == false) {		
				ctx.drawImage($("#globo")[0], this.x + 20, this.y - 160);
				ctx.drawImage(this.clienteEnMesa.imgItem, this.x + 45, this.y - 147);
			}
		}
		
	
		/*if (clienteEnMesa != null){
			ctx.drawImage(clienteEnMesa.img, clienteEnMesa.x, clienteEnMesa.y);
		}*/
	}
}