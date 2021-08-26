//class which gives quiz itself
class Quiz
{
   constructor(type, questions, results)
   {
       //quiz type
       this.type = type;
 
       //array with tasks
       this.questions = questions;
 
       //array with possible results
       this.results = results;
 
       //quantity of gathered points
       this.score = 0;
 
       //result number from array
       this.result = 0;
 
       //number of current question
       this.current = 0;
   }
 
   Click(index)
   {
       //adding points
       let value = this.questions[this.current].Click(index);
       this.score += value;
 
       let correct = -1;
 
       //if at least 1 point was added then count that answer is right
       if(value >= 1)
       {
           correct = index;
       }
       else
       {
           //otherwise look which answer can be right
           for(let i = 0; i < this.questions[this.current].answers.length; i++)
           {
               if(this.questions[this.current].answers[i].value >= 1)
               {
                   correct = i;
                   break;
               }
           }
       }
 
       this.Next();
 
       return correct;
   }
 
   //transfer to next task
   Next()
   {
       this.current++;
      
       if(this.current >= this.questions.length)
       {
           this.End();
       }
   }
 
   //if tasks ended this method will check result gathered by user
   End()
   {
       for(let i = 0; i < this.results.length; i++)
       {
           if(this.results[i].Check(this.score))
           {
               this.result = i;
           }
       }
   }
}
 
//class that gives task
class Question
{
   constructor(text, answers)
   {
       this.text = text;
       this.answers = answers;
   }
 
   Click(index)
   {
       return this.answers[index].value;
   }
}
 
//class which gives answer
class Answer
{
   constructor(text, value)
   {
       this.text = text;
       this.value = value;
   }
}
 
//class which gives result
class Result
{
   constructor(text, value, audio)
   {
       this.text = text;
       this.value = value;
       this.audio = audio;
   }
 
   
   Check(value)
   {
       if(this.value <= value)
       {
           return true;
       }
       else
       {
           return false;
       }
   }
}