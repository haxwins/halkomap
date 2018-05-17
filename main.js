window.onload = () =>{
    console.log("asd")
    let element = document.getElementById('logo')
    element.style.width = "200px";
    if (window.DeviceOrientationEvent) {
        document.getElementById('text3').innerHTML = 'can124124';
        
     } else {
        document.getElementById('text3').innerHTML = 'cant214124';
     }
     let box = document.getElementById('box');
    box.style.border = `1px solid black`;
    box.style.padding = `20px`;
    box.style.boxShadow = '5px 10px';
    box.style.width = `30px`;
}
window.addEventListener('deviceorientation', e => {
    document.getElementById('text1').innerHTML = e.gamma;
    document.getElementById('text2').innerHTML = e.beta;
    let tiltLR = e.gamma;
    let tiltFB = e.beta;

    document.getElementById('logo').style.transform = `rotate(${tiltLR}deg) rotate3d(1,0,0, ${tiltFB*-1}deg)`
    document.getElementById('box').style.boxShadow = `${tiltLR/2}px ${tiltFB/2}px`;
 });

window.addEventListener('devicemotion', e => {
    
 });