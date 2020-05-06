const options=document.querySelector(".options").children;
   const answerTrackerContainer=document.querySelector(".answers-tracker");
   const questionNumberSpan=document.querySelector(".question-num-value");
   const totalQuestionSpan=document.querySelector(".total-question");
   const correctAnswerSpan=document.querySelector(".correct-answers");
   const totalQuestionSpan2=document.querySelector(".total-question2");
   const percentage=document.querySelector(".percentage");
   const question=document.querySelector(".question");
   const op1=document.querySelector(".option1");
   const op2=document.querySelector(".option2");
   const op3=document.querySelector(".option3");
   const op4=document.querySelector(".option4");
   let questionIndex;
   let index=0;
   let myArray=[];
   let myArr=[];
   let score=0;
 
   // this section is for questions,options and answers arrays
 
   const questions=[
    { 
   q:'How many countries constitutes the Economic Community of West African States?',
   options:['a) 18','b) 17','c) 16','d) 15'],
   answer:2
 },
      { 
      q:'When did Nigeria break diplomatic relation with Isreal?',
      options:['a) 1982', 'b) 1987', 'c) 1927', 'd) 1972'],
      answer:3
      },
  {
   q:'When was facebook founded?',
   options:['a) Feb 4, 2004', 'b) Feb 4, 2005', 'c) Feb 4, 2002', 'd) Feb 4, 2003'],
   answer:0
   },
       {
        q:'Which African Country first gained indepence?',
        options:['a) Angola', 'b) Egypt', 'c) Ethiopia', 'd) Liberia'],
        answer:3
        },
   {
    q:'Who formed the first political party in Nigeria?',
    options:['a) Nnamdi Azikiwe', 'b) Herbert Marcauley', 'c) Augustus Akinloye', 'd) Ahmadu Bello'],
    answer:1
  }
 ]
 
 
   //setting of questions, options and question number
   
   totalQuestionSpan.innerHTML=questions.length;
   function load(){
            questionNumberSpan.innerHTML=index+1;
          question.innerHTML=questions[questionIndex].q;     
          op1.innerHTML=questions[questionIndex].options[0];
          op2.innerHTML=questions[questionIndex].options[1];
          op3.innerHTML=questions[questionIndex].options[2];
          op4.innerHTML=questions[questionIndex].options[3];
          index++;
   }
   
   function check(element){
       if(element.id==questions[questionIndex].answer){
           element.classList.add("correct");
           updateAnswerTracker("correct")
           score++;
           console.log("score:"+score)
       }
       else{
           element.classList.add("wrong");
           updateAnswerTracker("wrong")
 
       }
       disabledOptions()
   }
    
   function disabledOptions(){
      for(let i=0; i<options.length; i++) {
          options[i].classList.add("disabled");
          if(options[i].id==questions[questionIndex].answer){
              options[i].classList.add("correct");
          }
 
      }
   }
   
   function enableOptions(){
      for(let i=0; i<options.length; i++) {
          options[i].classList.remove("disabled","correct","wrong");
      }
   }
 
   function validate(){
       if(!options[0].classList.contains("disabled")){
         alert("Please Selecto one option")
       }
       else{
           enableOptions();
           randomQuestion();
       }
   }
 
   function next(){
        validate();
   }
    
   function randomQuestion(){
       let randomNumber=Math.floor(Math.random()*questions.length);
       let hitDuplicate=0;
           if(index==questions.length){
               quizOver();
           }
           else{
             if(myArray.length>0){
              for(let i=0; i<myArray.length; i++){
                if(myArray[i]==randomNumber){
                      hitDuplicate=1;
                      break;
                }
              }
              if(hitDuplicate==1){
                  randomQuestion();
              }
              else{
                questionIndex=randomNumber;      
                  load();
                  myArr.push(questionIndex);
              }
             }
             if(myArray.length==0){
               questionIndex=randomNumber;      
               load();
               myArr.push(questionIndex);
             }
 
           myArray.push(randomNumber);
           
          }
   }
       
   function answerTrakcer(){
      for(let i=0; i<questions.length; i++){
          const div=document.createElement("div")
             answerTrackerContainer.appendChild(div);
      }
   }
 
  function updateAnswerTracker(classNam){
    answerTrackerContainer.children[index-1].classList.add(classNam);
  }
 
  function quizOver(){
     document.querySelector(".quiz-over").classList.add("show");
     correctAnswerSpan.innerHTML=score;
     totalQuestionSpan2.innerHTML=questions.length;
     percentage.innerHTML=(score/questions.length)*100 + "%";
  }
  
  function tryAgain(){
      window.location.reload();
  }
 
  window.onload=function(){
      randomQuestion();
      answerTrakcer();
  }
