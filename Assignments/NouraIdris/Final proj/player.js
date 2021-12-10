class Player{

    constructor(){
        this.r = 60;
        this.x = w/2;
        this.y = h - this.r;
        this.speed =2;
        this.direction = 'still';
        
    }

    display(){
        rect(this.x, this.y, this.r); 
    }

move(){

switch (this.direction){
    case 'still':
        //don't move anything
        break; 
    case 'up':
       this.y -= this.speed;
         //decrease y pos
         break;
    case 'down':
        this.y += this.speed;
        //increase ypos
         break;
    case 'right':
        this.x += this.speed
        //increase x pos
         break;
    case 'left':
        this.x -= this.speed;
        //decrease x pos
         break;
         default:
         break;
}


}

}