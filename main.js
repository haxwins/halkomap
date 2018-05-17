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
    let tiltLR = e.gamma;
    let tiltFB = e.beta;

    document.getElementById('logo').style.transform = `rotate(${tiltLR}deg) rotate3d(1,0,0, ${tiltFB*-1}deg)`
    
 });

window.addEventListener('devicemotion', e => {
    document.getElementById('text2').innerHTML = "asd2";
 });