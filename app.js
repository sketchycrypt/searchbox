window.addEventListener('load', () => {
let userinput = document.getElementById('jsinput');
const button = document.querySelector('.search-btn')

button.addEventListener('click', function() {

    window.location.href=`https://duckduckgo.com/?q=${userinput.value}&t=canonical`  
    
});

})