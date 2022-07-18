console.log("js adding");
turn="x";
changeturn=()=>{
      if(turn=="x")
            turn="0";
      else 
            turn="x"
}
winn=[[1,2,3],[4,5,6],[7,8,9],[1,4,7],[2,5,8],[3,6,9],[1,5,9],[3,5,7]];
iswin=()=>{
      for(let i=0;i<8;i++){
            a=document.getElementById(`${winn[i][0]}`).innerText;
            b=document.getElementById(`${winn[i][1]}`).innerText;
            c=document.getElementById(`${winn[i][2]}`).innerText
            if(a==b && b==c && (a=='0' || a=='x') &&(b=='0' || b=='x') &&(c=='0' || c=='x') )
             {
             return true;
            }
      }
      return false;
}
Array.from(document.getElementsByClassName("ax")).forEach((element) => {
      element.addEventListener("click",()=>{
            element.innerText=turn;
            changeturn();
            if(turn=='0')
                  document.getElementById("turn").innerHTML="Raju's turn";
            else
                  document.getElementById("turn").innerHTML="Abhinav's turn"; 
            var audioElement=new Audio('./photos/ting.mp3');
            console.log("ka re==",iswin());
            if(!iswin())
                  audioElement.play();
            else{
                  var audioElement2=new Audio('./photos/gameover.mp3')
                  audioElement2.play();
                  document.getElementById("jeetgya").style.visibility=

            }
      })
})
