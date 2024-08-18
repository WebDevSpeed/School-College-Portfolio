
const change = ()=>{
    document.getElementById('nav-links').classList.toggle('active');
    document.getElementById('nav-links').classList.toggle('hidden');
    
}
document.getElementById('hamburger').addEventListener('click', change);


