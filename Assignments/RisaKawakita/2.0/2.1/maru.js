class maru{
  constructor(x,y,s,spx,spy,c){
    this.x = x;
    this.y = y;
    this.s = s;
    this.spx = spx;
    this.spy = spy;
    this.c = c;
  }
  
  display(){
    fill(this.c);
    ellipse(this.x,this.y,this.s,this.s)
  }
  
  move(){
    this.x = this.x + this.spx;
    this.y = this.y + this.spy;
    if (this.x > width|| this.x < 0){
      this.spx = -this.spx;
    }
    if (this.y > height || this.y < 0){ 
      this.spy = -this.spy
    }
  }
  
}