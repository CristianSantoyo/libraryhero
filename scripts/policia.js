function Policia(t){
	this.tipo = t;
	switch(t){
		case 0:
			this.x = 1000;
			this.y = 500;
			this.img = $("#policiaRegistro")[0]
			this.arma = "registro"
			break;
		case 1:
			this.x = 530;
			this.y = 100;
			this.img = $("#policiaPatente")[0]
			this.arma = "patente"
			break;
		case 2:
			this.x = 890;
			this.y = 250;
			this.img = $("#policiaContrato")[0]
			this.arma = "contrato"
			break;
	}

	this.isMolesto = false;

	this.xObjetivo = 0;
	this.yObjetivo = 0;

	this.xMisilPolicia = 0;
	this.yMisilPolicia = 0;	
	
	this.isDisparando = false;
	this.isPasando = false;	

	this.disparar = function(targetX, targetY){
		this.isDisparando = true;
		this.xObjetivo = targetX;
		this.yObjetivo = targetY;
			
		this.xMisilPolicia = this.x - 20;
		this.yMisilPolicia = this.y + 60;
		
		pX = this.xMisilPolicia - this.xObjetivo;
		pY = 2*(this.yObjetivo - this.yMisilPolicia)/pX;		
		return pY;
	}

	this.dispararLadron = function (paso, xLadron, yLadron){
		//console.log(this.xMisilPolicia, this.yMisilPolicia);
		if (this.isDisparando){
			$("#disparo")[0].play();
			this.xMisilPolicia -= 2;
			this.yMisilPolicia += paso;
			if (this.mirarContactoLadron(this.xMisilPolicia, this.yMisilPolicia, xLadron, yLadron)
			|| this.mirarContactoLadron(this.xMisilPolicia + 45, this.yMisilPolicia, xLadron, yLadron)
			|| this.mirarContactoLadron(this.xMisilPolicia, this.yMisilPolicia + 12, xLadron, yLadron)
			|| this.mirarContactoLadron(this.xMisilPolicia + 45, this.yMisilPolicia + 12, xLadron, yLadron)) {
				this.isDisparando = false;	
				return true;
			}else{
				return false;
			}
		} else {
			return false;
		}
	}

	this.mirarContactoLadron = function(x1, y1, xLadron, yLadron){		
		if (x1 >= xLadron
			&& x1 <= xLadron + 90
			&& y1 >= yLadron
			&& y1 <= yLadron + 90){
				return true;
			}else{
				return false;
			}
	}

	this.dibujar = function(ctx){		
		if (this.isPasando){
			ctx.drawImage(this.img, this.x - 5, this.y - 5, 100, 100);
			ctx.fillStyle="gray";
			ctx.strokeStyle = "Red";
			
			if (this.tipo == 0){
				ctx.fillText("Arma: Registro", 700, 560);
				ctx.drawImage($("#registro")[0], 800, 570);
			} else if(this.tipo == 1){
				ctx.fillText("Arma: Patente", 700, 560);
				ctx.drawImage($("#patenteP")[0], 800, 570);
			} else {
				ctx.fillText("Arma: Contrato de Confianza", 700, 560);
				ctx.drawImage($("#contrato")[0], 800, 570);
			}
		}else{
			ctx.drawImage(this.img, this.x, this.y);
		}
		if (this.isDisparando){
			ctx.drawImage($("#basuca")[0], this.x - 15, this.y + 50);
			ctx.drawImage($("#misilDer")[0], this.xMisilPolicia, this.yMisilPolicia);
		}
	}
}