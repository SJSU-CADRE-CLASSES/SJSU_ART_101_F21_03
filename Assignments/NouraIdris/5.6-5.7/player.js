class Player{

    constructor(){
        this.r = 60;
        this.x = w/2;
        this.y = h - this.r;
    }

    display(){
        rect(this.x, this.y, this.r); 
    }
}