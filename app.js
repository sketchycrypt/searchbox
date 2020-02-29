window.addEventListener('load', () => {
const button = document.querySelector('.search-btn')
const userinput = document.getElementById("jsinput").value
//this puts underscores, doesnt work fyi


button.addEventListener('click', function() {
    window.location.href=`https://duckduckgo.com/?q=${userinput}&t=canonical`  
    userinput = userinput.replace(/\s/g, '');
    
});

})