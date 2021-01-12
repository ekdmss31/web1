var Links = {
        setColor : function (color){
          var alist = document.querySelectorAll('a');
           var i = 0;                                         
           while(i < alist.length){
              alist[i].style.color = color;
              i = i + 1 ;   
           }   
        }
    }
    var Body = {
        /*function BodySetColor(color){
        document.querySelector('body').style.color = color;
        }*/
        setColor : function (color){
            document.querySelector('body').style.color = color;
        },
        setBackgroundColor : function (color){
            document.querySelector('body').style.backgroundColor = color;
        }
    }
    
    function nightDayHandler(self){  
        var target = document.querySelector('body');                                            
        if(self.value==='night'){ 
           Body.setBackgroundColor('black');
           Body.setColor('white');
           self.value='day';

           Links.setColor('powderblue');              
         }
         else {
           Body.setBackgroundColor('white');
           Body.setColor('black');
           self.value='night' ;

           Links.setColor('blue');   
         } 
    }  
/*유지보수를 편리하게 하기 위해 공통된 js 코드를 하나의 파일로 묶어 web page에 적용하였다.
cache파일을 이용해 다음에 접속할 때 비용을 절감할 수 있다. 다음에 접속할 때에는 한번 저장된 것이 있으면 cache에서 불러와 사용하기 때문이다.*/