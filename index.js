
function dropFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        let dropdowns = document.getElementsByClassName("dropdown-content");
        let i;
        for (i = 0; i < dropdowns.length; i++) {
            let openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

function sliderFunction(id){

    console.log(id)
    console.log(document.querySelector('.active'))


    document.querySelector('.active').classList.remove('active')
    document.getElementById(id).classList.add('active')

    document.querySelector('.active_slider').classList.remove('active_slider')
    document.querySelector('.slider_'+id).classList.add('active_slider')


}
