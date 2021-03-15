class Question {

    constructor() {
      this.input = createInput("Name");
      this.button = createButton('Play');
      this.greeting = createElement('h2');
      this.title = createElement('h2');
    }
    hide(){
      this.greeting.hide();
      this.button.hide();
      this.input.hide();
      this.title.hide();
    }
  
    display(){
      this.title.html("My Quiz Game");
      this.title.position(displayWidth/2-50, 0);

      this.question.html("Question:- What starts and ends with the letter 'E', but has only one letter?");
      this.question.position(150,80);
      this.option1.html("1: Everyone");
      this.option1.position(150,100);
      this.option2.html("2: Envelope");
      this.option2.position(150,120);

      this.input1.position(150,230);
    }
  }
  