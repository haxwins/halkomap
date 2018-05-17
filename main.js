window.onload = () =>{
    console.log("asd")
    let element = document.getElementById('logo')
    element.style.width = "200px"; 
    window.addEventListener('deviceorientation', (e)=>{
        let tiltLR = e.gamma;
        let tiltFB = e.beta;
        document.getElementById('text1').innerHTML = tiltLR;
        document.getElementById('text2').innerHTML = tiltFB;
        element.style.transform = `rotate(${tiltLR}dag) rotate3d(1,0,0, ${tiltFB * -1}deg)`;
    })
}
