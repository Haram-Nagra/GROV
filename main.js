function loading(){
    var loader = document.getElementById("loader")
    loader.style.display="block"
    setTimeout(()=>{
        loader.style.display="none";
    },3000);
    
}

function correct(){
    var right = document.getElementById("correct")
    setTimeout(()=>{
        right.style.display="block"
        right.querySelectorAll('*').forEach(function(element) {
            element.style.display = 'block' ;
        });
    },3000);
    
}

function incorrect(){
    var wrong = document.getElementById("incorrect")
    setTimeout(()=>{
        wrong.style.display="block"
        wrong.querySelectorAll('*').forEach(function(element) {
            element.style.display = 'block' ;
        });
    },3000);
    
}

async function clickhandler(){
    const msg =document.getElementsByName("msg")[0]
    const fname =document.getElementsByName("fname")[0]
    const email = document.getElementsByName("em")[0]
    const form = document.getElementById('form')



    const data = await fetch('https://httpbin.org/post',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            push:fname.value+"\n"+email.value
        })
    });
    if (data.ok){
        document.getElementById('form').querySelectorAll('*').forEach(function(element) {
            element.style.display = 'none' ;
        });
        form.style.backgroundColor ="white"
        form.style.flexDirection="row"
        form.style.justifyContent="center"
        loading()
        correct()
    }else
    {
        document.getElementById('form').querySelectorAll('*').forEach(function(element) {
            element.style.display = 'none' ;
        });
        form.style.backgroundColor ="white"
        form.style.flexDirection="row"
        form.style.justifyContent="center"
        loading()
        incorrect()
    }
}