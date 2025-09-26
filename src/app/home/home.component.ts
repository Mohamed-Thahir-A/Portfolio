import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  standalone:true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  isHomeactive=false
   title = 'text';
  value="color:#4070f4";
  words: string[] = ["Front-End Developer","Back-End Developer","Full-Stack Developer"]; // change words here
  typeSpeed = 120;      // ms per letter (typing)
  deleteSpeed = 80;     // ms per letter (deleting)
  holdAfterType = 900;  // ms hold after typing
  holdAfterDelete = 250; // ms hold after deleting

  text: string = "";
  wordIndex: number = 0;
  charIndex: number = 0;
  typing: boolean = true;

  ngOnInit() {
    this.loop();
  }

  sleep(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  async loop() {
    while (true) {
      const word = this.words[this.wordIndex];

      // Typing phase
      while (this.charIndex < word.length) {
        this.text = word.slice(0, ++this.charIndex);
        await this.sleep(this.typeSpeed);
      }

      // Hold after full word
      await this.sleep(this.holdAfterType);

      // Deleting phase
      while (this.charIndex > 0) {
        this.text = word.slice(0, --this.charIndex);
        await this.sleep(this.deleteSpeed);
      }

      // Hold after delete
      await this.sleep(this.holdAfterDelete);

      // Next word
      this.wordIndex = (this.wordIndex + 1) % this.words.length;
    }
  }

}
