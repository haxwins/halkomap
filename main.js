window.onload = () =>{
    console.log("asd")
    let element = document.getElementById('logo')
    element.style.width = "200px";
    if (window.DeviceOrientationEvent) {
        document.getElementById('text3').innerHTML = 'can124124';
        
     } else {
        document.getElementById('text3').innerHTML = 'cant214124';
     }
}

window.addEventListener('deviceorientation', e => {
    document.getElementById('text1').innerHTML = e.gamma;
    
 });

window.addEventListener('devicemotion', e => {
    document.getElementById('text2').innerHTML = "asd2";
 });