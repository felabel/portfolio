alert ("hey");
var theme = localStorage.getItem('theme');

if(theme == null){
    setTheme('light')
}else{
    setTheme(theme);
}

var themeDots = document.getElementsByClassName('theme-dot');

for (let i = 0; i < themeDots.length; i++) {
    const element = themeDots[i];
    element.addEventListener("click",  change)
   
    
}
function change(){
    var mode = this.dataset.mode
    setTheme(mode);
}

function setTheme(mode){
    switch (mode) {
        case 'blue':
            document.getElementById('theme-style').href = 'css/blue.css';
            break;
            case 'purple':
            document.getElementById('theme-style').href = 'css/purple.css';
            break;
            case 'green':
            document.getElementById('theme-style').href = 'css/green.css';
            break;
            case 'light':
            document.getElementById('theme-style').href = 'css/style.css'
    
            default:
            document.getElementById('theme-style').href = 'css/style.css';
            break;
            
    }
    localStorage.setItem('theme', mode)
}
