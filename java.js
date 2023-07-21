let text= document.querySelector(".hackerview");


let a =["Intializing Hack Tool...",
        "Connecting to Database Server...",
        "Connecting to Server 1....",
        "Connection Failed .. !!Retrying...",
        "Connecting to Server 2....",
        "Retrieving Web Server....",
        "Connected Successfully....",
        "Data Accessed Successfully....",
        "Trying to Access Data....",
        "User Name found :"   ,
        "Password : **********",
        "email : ***********@gmail.com",
        "Data Hacked Sucessfully...."]

const sleep = (seconds)=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(true)
        },seconds*1000)
    })
}

const showHack = async(message)=>{
    await sleep(2);
    text.innerHTML = text.innerHTML + message + "<br>"; 
   
}

(async () =>{
    for(let i=0; i<a.length;i++){
         await showHack(a[i]);
        
    }
})()