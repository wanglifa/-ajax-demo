myButton.addEventListener('click',(e)=>{
    var request = new XMLHttpRequest;
    request.onreadystatechange = function(){
        if(request.readyState === 4){
            console.log('请求结束');
            if(request.status>=200 && request.status <300){
                console.log('请求成功');
                var string = request.responseText;
                var obj = window.JSON.parse(string);
                console.log(obj.note);
                console.log(obj.note.from)
            }else if(request.status >=400){
                console.log('请求失败');
            }
        }.......................
    }
    request.open('GET','http://jack.com:8002/xxx');
    request.send();
    
})