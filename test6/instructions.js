class Instructions{

    constructor(){
        this.image1 = loadImage('images/instructions.jpg')
        this.image2 = loadImage('images/image.jpg')
        this.button= createButton('START GAME!')
        this. title1 = createElement('h2')
        this. title2 = createElement('h2')
        this. title3 = createElement('h2')
        this. title4 = createElement('h2')
        this. title5 = createElement('h2')
        this. title6 = createElement('h2')
    }
    hide(){
      
        this.button.hide();
        this.title1.hide()
        this.title2.hide()
        this.title3.hide()
        this.title4.hide()
        this.title5.hide()
        this.title6.hide()
      }

    display(){

       
        image (this.image1,-displayWidth/2 +750,-displayHeight/24 + 30,displayWidth,displayHeight)
        image(this.image2, displayWidth/2-150 ,50,400,200)
      //  var title = createElement('h1')
       // title.html("INSTRUCTIONS");
       // title.position(displayWidth/2-150 ,50); 

      
        this.title1.html("press UP ARROW to jump");
        this.title1.position(displayWidth/2 -250, 250);
        
       
        this.title2.html("press RIGHT ARROW to move right");
        this.title2.position(displayWidth/2 -250, 300);

        
        this.title3.html("press LEFT ARROW to move left");
        this.title3.position(displayWidth/2 -250, 350);

        this.title4.html("press DOWN ARROW to duck");
        this.title4.position(displayWidth/2 -250, 400);

        
       
        this.title5.html("You have 2 lives and there are 2 levels...");
        this.title5.position(displayWidth/2 -250, 450);

        
        this.title6.html("Press on the HELP button to add a life!! But remember, only once!");
        this.title6.position(displayWidth/2 -250, 500);

        this.button.position(displayWidth/2 +50, 600)

        this.button.mousePressed(()=>{
            this.title1.hide()
            this.title2.hide()
            this.title3.hide()
            this.title4.hide()
            this.title5.hide()
            this.title6.hide()
            this.button.hide()
            gameState=2
          });
       
    }
}