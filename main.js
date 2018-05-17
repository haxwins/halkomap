window.onload = () =>{
    console.log("asd")
    let element = document.getElementById('logo')
    element.style.width = "200px";
    if (window.DeviceOrientationEvent) {
        document.getElementById('text1').innerHTML = 'can';
        
     } else {
        document.getElementById('text2').innerHTML = 'cant';
     }
     
    
     
    
}
window.addEventListener('deviceorientation', function(event) {
    document.getElementById('text3').innerHTML = "we in";
    
 });

 window.addEventListener('devicemotion', function(event) {
    document.getElementById('text3').innerHTML = "we in2";
 });