console.log("js adding");
turn="x";
count=0;
changeturn=()=>{
      if(turn=="x")
            turn="0";
      else 
            turn="x"
}
winn=[[1,2,3,0,-130,0],[4,5,6,0,0,0],[7,8,9,0,130,0],[1,4,7,-130,0,90],[2,5,8,0,0,90],[3,6,9,130,0,90],[1,5,9,0,0,45],[3,5,7,0,0,135]];
iswin=()=>{
      for(let i=0;i<8;i++){
            a=document.getElementById(`${winn[i][0]}`).innerText;
            b=document.getElementById(`${winn[i][1]}`).innerText;
            c=document.getElementById(`${winn[i][2]}`).innerText;
            if(a==b && b==c && (a=='0' || a=='x') &&(b=='0' || b=='x') &&(c=='0' || c=='x') )
            {     
                  var line=document.getElementById("line");
                  line.style.transform=`translate(${winn[i][3]}px,${winn[i][4]}px) rotate(${winn[i][5]}deg)`
                  line.style.opacity=90;
                  line.style.width="270px";
                  if(i==6 || i==7){
                        line.style.width="390px";
                  }
             return true;
            }
      }
      return false;
}
Array.from(document.getElementsByClassName("ax")).forEach((element) => {
      element.addEventListener("click",()=>{
            element.innerText=turn;
            count++;
            
            changeturn();
            if(turn=='0')
                  document.getElementById("turn").innerHTML="Raju's turn";
            else
                  document.getElementById("turn").innerHTML="Abhinav's turn"; 
            var audioElement=new Audio('./photos/ting.mp3');
            if(!iswin()){
                  audioElement.play();
                  if(count==9)
                        setTimeout(reset,2000);
            }
            else{
                  
                  var audioElement2=new Audio('./photos/gameover.mp3')
                  audioElement2.play();
                  if(turn=='0')
                        document.getElementById("turn").innerHTML="Abhinav won";
                  else
                        document.getElementById("turn").innerHTML="Raju won"; 
                  var image=document.getElementById("jeetgya");
                  image.style.visibility="visible";
                  setTimeout(reset,5000);

            }
            
      })
})
reset=()=>{
      count=0;
      var image=document.getElementById("jeetgya");
      image.style.visibility="hidden";
      var line=document.getElementById("line");
      line.style.opacity=0;
      items=document.getElementsByClassName("ax");
      Array.from(items).forEach((element,index)=>{
            element.innerText="";
      })
}
document.getElementById("resetid").addEventListener("click",()=>{
      reset();
})
