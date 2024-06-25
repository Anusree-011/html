let playBtn=document.getElementById('play-btn');
    let video = document.querySelector('.video');
    let progressBar=document.querySelector('.progress-bar');
    let isvideoplaying = false;
    
    
    function playorpausevideo(){
          
            
                  if(!isvideoplaying){
            
            video.play();
            isvideoplaying=true;
            playBtn.classList.replace ("fa-play","fa-pause");
            
            
        } else{
            video.pause();
            isvideoplaying = false;
            playBtn.classList.replace("fa-pause","fa-play");
          
                         
                
        }
    }
    // }

    document.onkeydown=function(event){
        switch(event.keyCode){
            case 32:
                console.log("a1")
                event.preventDefault();
                playorpausevideo();
                
                break;
        
        }
    }
            
     function updateprogressBar(event){
        console.log(event.target.currentTime,event.target.duration);
        let currentTime =event.target.currentTime
        let duration =event.target.duration
        progressBar.style.cssText = 
        ' width : ${(currentTime/ duration)*}100%}';
         
        
     }
        

    playBtn.addEventListener("click",playorpausevideo)
    //document.addEventListener("keydown",playorpausevideo)
    video.addEventListener("click",playorpausevideo)
    video.addEventListener("timeupdate",updateprogressBar)