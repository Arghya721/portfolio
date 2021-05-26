const currentLocation = location.href;
const items = document.getElementsByClassName("bar");

for(var i=0;i<items.length;i++){
    
    if(items[i].href === currentLocation){
        items[i].className += " active";
    }
}