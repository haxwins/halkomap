window.onload = () =>{
    console.log("asd")
    let element = document.getElementById('logo')
    element.style.width = "200px";
    if (window.DeviceOrientationEvent) {
        document.getElementById('text1').innerHTML = 'can';
        
     } else {
        document.getElementById('text2').innerHTML = 'cant';
     }
     
    
    window.addEventListener('deviceorientation', (e)=>{
        let tiltLR = e.gamma;
        let tiltFB = e.betta;
        document.getElementById('text3').innerHTML = 'we in';
        document.getElementById('logo').style.transform = `rotate(${tiltLR}deg) rotate3d(1,0,0, ${tiltFB * -1}deg)`;
    })
    
}
