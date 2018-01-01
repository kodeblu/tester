/*"use strict";
exports.__esModule = true;
var first_1 = require("./first");
var ins = new first_1["default"]();
console.log(ins.getName());*/


var col = [12,1,3,9,7,5];
res = [];
console.log(col);
//var size = col.length-1;
console.log('ugyugu');
/*for(var i=0;i<col.length * col.length-1;i++){
    var col = (col[size] > )

    if(size == col.length-1){
        size = 0;
    }
    if(count == col.length-1){
        size--;
        count = 0;
    }
    if(size==0){
        break;
        return col;
    }
    count++;
}*/
/*function sor(vals,count){
    while(count < vals.length){
        for(i=0;i< vals.length;i++){
            var comp = vals[count];
            //console.log('comparing '+comp+' with '+vals[i]);
            if( comp < vals[i]){
                //console.log('swapping '+comp+' with'+vals[i]);
                vals[count] = vals[i];
                vals[i] = comp;
                
            } 
        
        }
        count+=1;
    }  
    console.log(vals);  
    
     
     //sor(vals,count);
}
    
sor([5, 23, 9876, 21, 0, 11, 2, 67, 89, 234, 0, 12, 43, 694],0);*/
/*function fact(num){
        if(num <= 1){
            return 1;
        }else{
            return num * fact(num - 1);
        }
        console.log(num); 
}
console.log(fact(4));*/
function inSort(arr){
    var sorted = [];
     sorted.push(arr[0]);
    arr.splice(0,1);
    var count = 0;
    //var target = arr.length;
   while(arr.length > 0){
        if(sorted.length == 1){
            if(arr[0] > sorted[0]){
                sorted.push(arr[0]);
            }else{
                sorted.unshift(arr[0]);
            }
            arr.splice(0,1);
        }
        for(var i = sorted.length -1; i >= 0;i--){
           // count+=1;
            if(sorted[i] < arr[0]){

            }
            
        }
        arr.splice(0,1);
   }
console.log(count);
   
    
}
//inSort([5, 23, 9876, 21, 0, 11, 2, 67, 89, 234, 0, 12, 43, 694]);
/*for(var i = 1; i <= 100; i++){
    if(i % 3 == 0 && i % 5 == 0){
        console.log(i+' fizzbuzz')
    }else if(i % 3 == 0){
        console.log(i+' fizz')
    }else if(i % 5 == 0){
        console.log(i+' buzz')
    }
}*/
/* var searchItems = [
        'mafia',
        'mob',
        'yakuza',
        'bratva',
        'syndicate',
        'speakeasies',
        'mz'
] */



/*var elem = document.getElementById('box');

var res = document.getElementById('result');

    var item = "";
    
    elem.onkeydown= function(event){
      
        res.innerHTML = "";
         var key = event.key;   
        if(event.key === "Backspace"){
            //res.innerHTML = res.innerHTML.slice(0,res.innerHTML.length - 1);
            item = item.slice(0,item.length - 1);
            key = "";
            console.log(key);
        }
        
        item += key;
        var box = searchItems.join(' ')+' ';
        //console.log(box);
        var timer;
        if(item !=""){
            if(timer != undefined){
                clearTimeout(timer);
                return;
            }
           
                var timer = setTimeout(function(){
                    var reg = new RegExp(item+"\\w+"+" ",'gi');
                    var found = box.match(reg) || '';
                   
                            res.innerHTML = "";//
                            console.log(found);
                            for(var i =0; i < found.length;i++){
                                if(searchItems.indexOf(found[i].trim()) == -1){
                                    return;
                                }
                                 console.log(found[i]);
                                res.innerHTML += searchItems[searchItems.indexOf(found[i].trim())]+'<br/>';
                                
                            }
                        
                            
                        },1000);
                    
                        
                   
                    
               
            
        }
            
        
        //res.innerHTML += event.key;
    }*/

/*btn.addEventListener('click',function(){
    console.log(cursor.style.animationPlayState);
    if(cursor.style.animationPlayState == ""){
        cursor.style.animationPlayState = "paused";
    }else{
        cursor.style.animationPlayState = "running";
    }
})*/
function startTyping(){
    
    var txt = `This is Otuto's version of typed.js. I hope it doesn't suck too much, as usual it begins with clean code. 
    Eventually the code gets messed up.`,
        cursor = document.getElementById('cursor'),
        btn = document.getElementById('btn1'),
        count = 0;
        var typing,finish,half;
       
       
        function type(){
            if(txt[count] === undefined){
                return;
           }
            if(txt.length -1 == count && typing !== undefined && finish !== undefined){
                clearInterval(typing);
                clearInterval(finish);
                clearInterval(half);
               
                btn.innerHTML += txt[count];
        
                setTimeout(restart,3000);
                return;
            }
            if(txt[count] === "." && typing !== undefined){
                clearInterval(typing);
                (finish != undefined) ? clearInterval(finish) : console.log('caught');
                 half = setTimeout(finish,3000);
                 btn.innerHTML += txt[count];
                return;
                //
            }
           
           
            btn.innerHTML += txt[count];
            
            //cursor.innerHTML += btn.innerHTML;
            return;
            
        }
        if(txt[count] !== undefined){
            
            var typing = setInterval(function(){        
                        type();
                        count+=1;
                        return;
            },100)
        }
            
        
        

        function finish(){
            var finish = setInterval(function(){        
                type();
                count+=1;
                return;
            },100)
        }
};
 setTimeout(startTyping,3000);  

 function restart(){
    var txt = `This is Otuto's version of typed.js. I hope it doesn't suck too much, as usual it begins with clean code. 
    Eventually the code gets messed up.`;
        var cursor = document.getElementById('cursor'),
        btn = document.getElementById('btn1'),
        count = txt.length-1;
        var wiping;
        function wipe(){
            if(count < 0 && wiping !==undefined){
              
                clearInterval(wiping);
                setTimeout(startTyping,3000);
                return;
            }
            btn.innerHTML = btn.innerHTML.slice(0,count);
        }
        var wiping = setInterval(function(){
            wipe()
            count-=1;
            return;
        },100)

 }