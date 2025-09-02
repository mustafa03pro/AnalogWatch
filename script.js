let second =new Date().getSeconds();
let minute=new Date().getMinutes();
let hour=new Date().getHours();

let hourhand=document.getElementById('hour')
let minutehand=document.getElementById('minute')
let secondhand=document.getElementById('second')



secondhand.style.transform=`rotate(${second*6}deg)`
minutehand.style.transform=`rotate(${minute*6}deg)`
hourhand.style.transform=`rotate(${hour*6+minute*0.5}deg)`


setInterval(()=>{
    second = second+1;
    minute = minute + 0.0167
    hour = hour + 0.000278

    secondhand.style.transform = `rotate(${second*6}deg)`
    minutehand.style.transform = `rotate(${minute*6}deg)`
    hourhand.style.transform = `rotate(${hour*30 + minute*0.5}deg)`
}, 990)


// let second = new Date().getSeconds();
// let minute = new Date().getMinutes();
// let hour = new Date().getHours();

// let hourhand = document.getElementById('hour')
// let minutehand = document.getElementById('minute')
// let secondhand = document.getElementById('second')

// secondhand.style.transform = `rotate(${second*6}deg)`
// minutehand.style.transform = `rotate(${minute*6}deg)`
// hourhand.style.transform = `rotate(${hour*30 + minute*0.5}deg)`


// setInterval(()=>{
//     second = second+1;
//     minute = minute + 0.0167
//     hour = hour + 0.000278

//     secondhand.style.transform = `rotate(${second*6}deg)`
//     minutehand.style.transform = `rotate(${minute*6}deg)`
//     hourhand.style.transform = `rotate(${hour*30 + minute*0.5}deg)`
// }, 990)

