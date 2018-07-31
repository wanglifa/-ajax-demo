window.jQuery = function(nodeOrSelector){
    var nodes = {}
    nodes.addClass = function(){}
    nodes.html = function(){}
    return nodes;
}
window.Promise = function(){
    return {
        then:function(){};
    }
}

window.jQuery.ajax = function({url,method,body,successFn,failFn,header}){
   return new Promise(function(resolve,reject){
        var request = new XMLHttpRequest();
        request.onreadystatechange = function(){
            if(request.readyState === 4){
                if(request.status >=200 && request.status <300){
                    //这里设置then里面第一个匿名函数的实参
                    resolve.call(undefined,request.responseText)
                }else if(request.status >= 400){
                    //这里设置then里面第二个匿名函数的实参
                    reject.call(undefined,request)
                }
            }
        }

        request.open(method,url)
        for(var key in header){
            var value = header[key];
            request.setRequestHeader(key,value)
        }
        request.send(body);
    }) 
}
window.$ = window.jQuery;

function f1(responseText){}
function f2(responseText){}

myButton.addEventListener('click',(e)=>{
   var promise =window.jQuery.ajax({
       url:'/xxx',
       method:'post',
       body:'这是第四部分',
       header:{
           'Content-Type':'application/x-www-form-urlencoded',
           'wanglifa':'18'
       }
   })
   promise.then(
       //对应resolve这个函数,这个text就是上面传入的实参request.responseText
       (text)=>{console.log(text)},
       //对应reject这个函数,这个b对应上面传入的实参rquest
       (b)=>{console.log(b)}
   )
    
})
