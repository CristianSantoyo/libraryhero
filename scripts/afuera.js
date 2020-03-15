function Afuera() {
    this.x = 280;
    this.y = 0;
    this.img = $("#afueraNormal")[0];
    
    this.n = 0
    this.animar = function(){
        switch(this.n){
            case 0:
                this.img =  $("#afueraMorado")[0];
                break;
            case 1:
                this.img =  $("#afueraNaranja")[0];
                break;
            case 2:
                this.img =  $("#afueraRojo")[0];
                break;
            case 3:
                this.img =  $("#afueraRosado")[0];
                break;
            case 4:
                this.img =  $("#afueraVerde")[0];
                break;            
        }
        this.n++;
        if (this.n==5){
            this.n = 0;
        }
    }
    this.normal = function() {
        this.img =  $("#afueraNormal")[0];
    }

    this.dibujar = function(ctx){					
		ctx.drawImage(this.img, this.x, this.y);
	}
}

