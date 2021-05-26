const progress = document.getElementsByClassName('progress-bar');
const speed = 200;
window.addEventListener('scroll' , () =>{
    
    for(var i=0;i<progress.length;i++){
        const value = progress[i].dataset.progress;
        progress[i].style.width = `${value}%`;
    }   
});

