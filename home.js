const add1 = () => {
    let indata = document.querySelector('.search').value;

    document.querySelector('body').innerHTML='your serach of '+indata +'does not contain data';

}
const ked=()=>{
    if(event.key==='Enter'){
        add1();
    }
}
function chd() {
    let changing= document.querySelector('.resize').innerHTML
    if(changing==="change"){
    var image = document.querySelector('.content');
    image.style.width = '156px';
    image.style.height = 'auto';
    document.querySelector('.resize').innerHTML='changed'    
    }
    else{
        var image = document.querySelector('.content');
        image.style.width = '1500px';
        image.style.height = 'auto';
        document.querySelector('.resize').innerHTML='change' 
    }

}