window.onload = () =>{
    console.log("asd")
    let element = document.getElementById('logo')
    element.style.width = "200px";
    if (window.DeviceOrientationEvent) {
        document.getElementById('text3').innerHTML = '';
        
     } else {
        document.getElementById('text3').innerHTML = '';
     }
     let box = document.getElementById('box');
    box.style.border = `1px solid black`;
    box.style.padding = `20px`;
    box.style.boxShadow = '5px 10px';
    box.style.width = `40px`;
    box.style.marginLeft = `50px`;
}
window.addEventListener('deviceorientation', e => {
    document.getElementById('text1').innerHTML = e.gamma;
    document.getElementById('text2').innerHTML = e.beta;
    let tiltLR = e.gamma;
    let tiltFB = e.beta;

    document.getElementById('logo').style.transform = `rotate(${tiltLR}deg) rotate3d(1,0,0, ${tiltFB*-1}deg)`
    document.getElementById('box').style.boxShadow = `${tiltLR/4}px ${tiltFB/4}px`;

    document.getElementById('inner').style.top = `calc(50% - 25px + ${tiltLR})`;
    document.getElementById('inner').style.left = `calc(50% - 25px + ${tiltFB})`;
 });

window.addEventListener('devicemotion', e => {
    
 });