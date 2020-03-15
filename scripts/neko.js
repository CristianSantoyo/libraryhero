function Neko(){
    this.x = 270;
    this.y = 20;
    this.n = 1;
    this.img = $("#nyan"+this.n)[0];
    this.isPasando = false;

    this.iniciarAnimacion = function(){
        this.x = 270;
        this.y = 20;
        this.n = 1
        this.img = $("#nyan"+this.n)[0];
        this.isPasando = true;
    }

    this.detenerAnimacion = function(){
        this.isPasando = false;
    }
    this.animar = function(){
        this.x += 2;
        this.img = $("#nyan"+this.n)[0];
        this.n++;
        if (this.n == 7){
            this.n = 1;
        }
    }

    this.dibujar = function(ctx){
        ctx.drawImage(this.img, this.x, this.y);
    }
}