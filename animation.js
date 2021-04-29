//profile card
function openCard(){
    let profile = document.getElementById('profile')
    let activated = false;

    profile.addEventListener('mouseover', () =>{
        activated = !activated
        profile.style.boxShadow = 0;
    })
}

var scene = document.getElementById('scene')
var parallax = new Parallax(scene)