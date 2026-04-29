// Smooth scroll
function scrollToSection(){
    document.getElementById("packages").scrollIntoView({behavior:"smooth"});
}

// Loader
window.onload = () => {
    document.getElementById("loader").style.display = "none";
};