// apparently, color() is not defined in the global scope but how is it pre-defined in the display function?
let typeColor;
let typeFaceColor;
let typeDetailColor;

class Ghost {
  constructor(xpos, ypos, size, type) {
    this.xpos = xpos;
    this.ypos = ypos;
    this.size = size;
    this.type = type;
  }

  display() {
    // blue(blue ghost), BillyBob(quirky ghost), Julie(passionate ghost), Riley(ghost of darkness), Bailey(ghost of niceness/kindness),
    // Daniel(ghost of philosophies), Danielle(imaginative ghost), Steve(ghost of determination), Kim(Seoul Ghost)
    let ghostColor = [color(60, 140, 250), color("#006633"), color(128), color(0), color(155, 225, 255), color("#003366"),
                      color("#FF007F"), color(0, 0, 255), color(255, 255, 155)];
    let ghostFaceColor = [color(200, 230, 250), color(220, 250, 0), color("#802AC0"), color(100, 0, 50), color(255, 255, 155), color("#FF6666"),
                          color(random(255), random(255), random(255)), color(255, 0, 0), color(255, 155, 255)];

    if (this.type == "blue") {
      typeColor = ghostColor[0];
      typeFaceColor = ghostFaceColor[0];
      typeDetailColor = ghostFaceColor[0];
    } else if (this.type == "Billybob") {
      typeColor = ghostColor[1];
      typeFaceColor = ghostFaceColor[1];
      typeDetailColor = ghostFaceColor[1];
    } else if (this.type == "Julie") {
      typeColor = ghostColor[2];
      typeFaceColor = ghostFaceColor[2];
      typeDetailColor = color("#FFCCE5");
    } else if (this.type == "Riley") {
      typeColor = ghostColor[3];
      typeFaceColor = ghostFaceColor[3];
      typeDetailColor = ghostFaceColor[3];
    } else if (this.type == "Bailey") {
      typeColor = ghostColor[4];
      typeFaceColor = ghostFaceColor[4];
      typeDetailColor = ghostFaceColor[4];
    } else if (this.type == "Daniel") {
      typeColor = ghostColor[5];
      typeFaceColor = ghostFaceColor[5];
      typeDetailColor = ghostFaceColor[5];
    } else if (this.type == "Danielle") {
      typeColor = ghostColor[6];
      typeFaceColor = ghostFaceColor[6];
      typeDetailColor = ghostFaceColor[6];
    } else if (this.type == "Steve") {
      typeColor = ghostColor[7];
      typeFaceColor = ghostFaceColor[7];
      typeDetailColor = color(255);
    } else if (this.type == "Kim_Hyun-ji") {
      typeColor = ghostColor[8];
      typeFaceColor = ghostFaceColor[8];
      typeDetailColor = ghostFaceColor[8];
    } else {
      // default case is Boo ghost
      typeColor = color(255);
      typeFaceColor = color(0);
      typeDetailColor = color(0);
    }

    // the ghost's form
    fill(typeColor);
    ellipse(this.xpos, this.ypos, this.size); // (100, 100, 80)

    // the ghost's face
    fill(typeFaceColor);
    // eyes
    ellipse(this.xpos - (this.size / 5), this.ypos - (this.size / (20 / 3)), this.size / 8); // (84, 88, 10)
    ellipse(this.xpos + (this.size / 5), this.ypos - (this.size / (20 / 3)), this.size / 8); // (116, 88, 10)
    fill(typeDetailColor);
    // mouth
    rect(this.xpos - (this.size / 8), this.ypos, this.size / 4, this.size / (8 / 3)); // (90, 100, 20, 30)
  }
}
