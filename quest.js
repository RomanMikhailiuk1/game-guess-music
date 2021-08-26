//Массив с результатами
const results =
[
   new Result("Very bad", 0, "mp3/result-boo.mp3"),
   new Result("Bad", 2, "mp3/result-hmm.mp3"),
   new Result("Well", 4, "mp3/result-good.mp3"),
   new Result("Very well", 6, "mp3/result-super.mp3")
];
 
// Массив с заданиями
const questions =
[
   [  // first set
      new Question("mp3/1-Queen-The-Show-Must-Go-On.mp3",
      [
          new Answer("Bohemian Rhapsody", 0),
          new Answer("The Show must go on", 1),
          new Answer("The Invisible man", 0),
          new Answer("A Kind of Magic", 0)
      ]),
      new Question("mp3/Queen-We-Are-The-Champions.mp3",
      [
          new Answer("Somebody to love", 0),
          new Answer("Friends will be friends", 0),
          new Answer("We will rock you", 0),
          new Answer("We are the Champions", 1)
      ]),
      new Question("mp3/Queen-Barcelona.mp3",
      [
          new Answer("Princess of the Universe", 0),
          new Answer("I want it all", 0),
          new Answer("Scandal", 0),
          new Answer("Barcelona", 1)
      ]),
      new Question("mp3/queen_-_bohemian-rhapsody.mp3",
      [
          new Answer("Bohemian Rhapsody", 1),
          new Answer("Love of my life", 0),
          new Answer("Bicycle Rise", 0),
          new Answer("I want it all", 0)
      ]),
       new Question("mp3/Queen-Dont-Stop-Me-Now.mp3",
       [
          new Answer("A Kind of Magic", 0),
          new Answer("Don't stop me now", 1),
          new Answer("Love of my life", 0),
          new Answer("Friends will be friends", 0)
      ]),
      new Question("mp3/Queen-Who-Wants-To-Live-Forever.mp3",
      [
          new Answer("Radio Ga Ga", 0),
          new Answer("Don't stop me now", 0),
          new Answer("Who wants to live forever", 1),
          new Answer("Mother love", 0)
      ])
   ],
   [  // second set
      new Question("mp3/scorpions_-_wind-of-change.mp3",
      [
          new Answer("Wind of change", 1),
          new Answer("Loreley", 0),
          new Answer("Lonely nights", 0),
          new Answer("Always somewhere", 0)
      ]),
      new Question("mp3/Scorpions-Send-Me-An-Angel.mp3",
      [
          new Answer("Send me an Angel", 1),
          new Answer("Living for tomorrow", 0),
          new Answer("We were born to fly", 0),
          new Answer("Eye to eye", 0)
      ]),
      new Question("mp3/Scorpions-Sign-Of-Hope.mp3",
      [
          new Answer("White dove", 0),
          new Answer("The Game of life", 0),
          new Answer("Sign of hope", 1),
          new Answer("Tainted love", 0)
      ]),
      new Question("mp3/Scorpions-Obsession.mp3",
      [
          new Answer("Loreley", 0),
          new Answer("Maybe I maybe you", 0),
          new Answer("Humanity", 0),
          new Answer("Obsession", 1)
      ]),
      new Question("mp3/Scorpions-Still-Loving-You.mp3",
      [
          new Answer("Lonely Nights", 0),
          new Answer("Tainted love", 0),
          new Answer("Holiday", 0),
          new Answer("Still loving you", 1)
      ]),
      new Question("mp3/Scorpions-Humanity.mp3",
      [
          new Answer("Humanity", 1),
          new Answer("Raised on Rock", 0),
          new Answer("Big city nights", 0),
          new Answer("Rhythm of love", 0)
      ])
   ],
   [  // last set
      new Question("mp3/Era-Flowers-Of-The-Sea.mp3",
      [
          new Answer("Enae Volaro", 0),
          new Answer("Impera", 0),
          new Answer("Flowers of the sea", 1),
          new Answer("Mirror", 0)
      ]),
      new Question("mp3/Era-Infinity-Ocean.mp3",
      [
          new Answer("Don't you", 0),
          new Answer("Avatar", 0),
          new Answer("Misere mani", 0),
          new Answer("Infinity ocean", 1)
      ]),
      new Question("mp3/Era-Bon-Bon.mp3",
      [
          new Answer("Mother", 0),
          new Answer("Ameno", 0),
          new Answer("Bon Bon", 1),
          new Answer("Reborn", 0)
      ]),
      new Question("mp3/Era-Nom-Nom.mp3",
      [
          new Answer("Relax", 0),
          new Answer("Nom Nom", 1),
          new Answer("Sombre day", 0),
          new Answer("Impera", 0)
      ]),
      new Question("mp3/Era-Relax.mp3",
      [
          new Answer("Reborn", 0),
          new Answer("Relax", 1),
          new Answer("7 Seconds", 0),
          new Answer("Doreme", 0)
      ]),
      new Question("mp3/era_-_ameno.mp3",
      [
          new Answer("Avatar", 0),
          new Answer("Mirror", 0),
          new Answer("Mother", 0),
          new Answer("Ameno", 1)
      ])
   ]
];
 
