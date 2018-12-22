import { Component, OnInit } from '@angular/core';
declare var writeAboutMe: any;

@Component({
  selector: 'about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  bio = [
    "I'm Kerim Dragolj,",

    "22 years old, senior undergraduate of mechanical engineering at 'Džemal Bijedić' university of Mostar.",
    "Pluviophile, movie junkie, gamer, aesthete, french fries addict that loves spending late night hours coding and listening to music.",

    "Bonded to these machines since very young age by spending most of my free time on games, disasembling and asembling parts",
    " to clean them up, well acutally just breaking them so my brother had to fix them.",

    "I was always amazed by the fictional stuff, movies, games, design of characters, worlds, stories and imagination of people that made them.",
    "Back in 2014 with the dream to make my own game one day, I began exploring programming world and how stuff gets made, which led me into finding my passion for web development and design.",

    "Besides computers, as a nerazzuro I'm very passionate about football and Inter as my favourite club.",
    "I have huge appreciation of art, anything that sparks our imagination, thinking and everything that comes out as product of it.",
    "I love animals, traveling, hiking, nature and its wonders as inexhaustible source of joy, admiration and inspiration.",

    "Albert Einstein once said: ",
    "\"Imagination is more important than knowledge. ",
    "For knowledge is limited, whereas imagination embraces the entire world, stimulating progress, giving birth to evolution.\""
  ]
  counter;
  currentImage = '';
  toggle = false;

  constructor() {
    this.clearAllTimeouts();
  }

  ngOnInit() {
    writeAboutMe(this.bio[0], 'headline');
    this.counter = 1;
    this.write();
  }

  write() {
    setTimeout(() => {
      writeAboutMe(this.bio[this.counter], 'text' + this.counter);
      this.counter++;
      if (this.counter < this.bio.length) {
        this.write();
      }
    }, 2000);
  }

  clearAllTimeouts() {
    var id = window.setTimeout(null, 0);
    while (id--) {
      window.clearTimeout(id);
    }
  }

}

