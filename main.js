window.jQuery = function(nodeOrSelector){
    var nodes = {}
    nodes.addClass = function(){}
    nodes.html = function(){}
    return nodes;
}

window.jQuery.ajax = function({url,method,body,successFn,failFn,header}){
    
    
     
    //ES6解构赋值
    //var o = {p: 42, q: true};
    //var {p, q} = o;
    //console.log(p); // 42
    //console.log(q); // true
    
    //上面的options就相当于o，他等于你传入的对象{url:'/xxx',method:'post'...},
    //所以url就是options.url
    //所以上面的代码就等同于
    // var url = options.url;
    // var method = options.method;
    // var body = options.body;
    // var header = options.header;
    // var successFn = options.successFn;
    // var failFn = options.failFn;
    

    var request = new XMLHttpRequest;
    request.onreadystatechange = function(){
        if(request.readyState === 4){
            if(request.status>=200 && request.status <300){
               successFn.call(undefined,request.responseText)
            }else if(request.status >=400){
                failFn.call(undefined,request.responseText)
            }
        }
    }
    request.open(method,url)
    for(var key in header){
        var value = header[key];
        request.setRequestHeader(key,value);
    }
    request.setRequestHeader('wanglifa','18')
    request.setRequestHeader('Content-Type','x-www-form-urlencoded')
    request.send(body);
}
window.$ = window.jQuery;

function f1(responseText){}
function f2(responseText){}

myButton.addEventListener('click',(e)=>{
    window.jQuery.ajax({
        url:'/xxx',
        method:'post',
        body:'这是请求的第四部分内容',
        header:{
            'Content-Type':'application/x-www-form-urlencoded',
            'wanglifa':'18'
        },
        successFn: (respon)=>{
            console.log(respon);
            f1.call(undefined,x);
            f2.call(undefined,x);
        },
        failFn: (request)=>{console.log(request)}
    })
    
})