window.onload = () =>{
    console.log("asd")
    let element = document.getElementById('logo')
    element.style.width = "200px";
    if (window.DeviceOrientationEvent) {
        document.getElementById('text3').innerHTML = 'can';
        
     } else {
        document.getElementById('text3').innerHTML = 'cant';
     }
}

window.addEventListener('deviceorientation', function(event) {
    document.getElementById('text1').innerHTML = "asd";
    
 });

window.addEventListener('devicemotion', function(event) {
    document.getElementById('text2').innerHTML = "asd2";
 });