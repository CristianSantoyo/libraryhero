function Ladron(n){
	this.x = 2000;
	this.y = 0;
	this.isVivo = false;
	this.isDisparando = false;
	this.isDesplazandose = false;

	this.imgMisil = $("#misilDer")[0];
	this.xMisil = this.x;
	this.yMisil = this.y;
	this.misilIsDisparado = false;

	this.ind = 0;
	
	switch(n){
		case 0:
			this.img = $("#ladron")[0];
			break;
		case 1:
			this.img = $("#ladron1")[0];
			break;
		case 2:
			this.img = $("#ladron1")[0];
	}

	this.llegar = function(x1, y1){
		this.x = x1;
		this.y = y1;
		while (this.y >= 200 && this.y <= 300){
			this.y = Math.floor((Math.random() * 300) + 110)
		}

		n = Math.floor((Math.random() * 3));
		if(n == 0){
			this.img = $("#ladron")[0];
		}else if(n == 1){
			this.img = $("#ladron1")[0];
		}else{
			this.img = $("#ladron1")[0];
		}		
		this.definirObjetivo(Math.floor((Math.random() * 5)));
		sonidoFondo = $("#llegaLadron")[0].play();
		this.isVivo = true;
		this.isDesplazandose = true;
	}

	this.fijarObjetivo = function(target){		
		this.isDisparando = true;
		switch(target){
			case 0:
				this.xObjetivoMisil = 410;
				this.yObjetivoMisil = 190;
				break;
			case 1:
				this.xObjetivoMisil = 760;
				this.yObjetivoMisil = 190;
				break;
			case 2:
				this.xObjetivoMisil = 650;
				this.yObjetivoMisil = 290;
				break;
			case 3:
				this.xObjetivoMisil = 540;
				this.yObjetivoMisil = 400;
				break;
			case 4:
				this.xObjetivoMisil = 925;
				this.yObjetivoMisil = 400;
				break;
		}				
	}

	this.definirObjetivo = function(n) {
		switch(n){
			case 0:
				this.ind = 3;
				this.imgObjetivo = $("#patente")[0];
				break;
			case 1:
				this.ind = 1;
				this.imgObjetivo = $("#modelo")[0];
				break;
			case 2:
				this.ind = 1;
				this.imgObjetivo = $("#diseño")[0];
				break;
			case 3:
				this.ind = 2;
				this.imgObjetivo = $("#secreto")[0];
				break;
			case 4:
				this.ind = 1;
				this.imgObjetivo = $("#marca")[0];
				break;
		}
	}

	this.dibujar = function(ctx){		
		if (this.isVivo){
			ctx.drawImage($("#nube")[0], this.x + 20, this.y - 100);
			ctx.drawImage(this.imgObjetivo, this.x + 45, this.y - 80);
		}
		
		ctx.drawImage(this.img, this.x, this.y);
		
		if (this.isDisparando){
			ctx.drawImage($("#lanzacohetes")[0], this.x-30, this.y+40);
			if (this.misilIsDisparado){					
				ctx.drawImage($("#misilIzq")[0], this.xMisil, this.yMisil);
			}
		}
		
		
	}
}