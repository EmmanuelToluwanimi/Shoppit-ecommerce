// function for tabs.
function tabMenu(evt, cityName) {
    var tabcontent;
    var tablinks;

    tabcontent = document.getElementsByClassName('tabcontent');
    for (items of tabcontent) {
        items.style.display = 'none';
    }
    

    tablinks = document.getElementsByClassName('tablinks');
    for (items of tablinks) {
        items.className = items.className.replace('active', '');
    }

    document.getElementById(cityName).style.display = 'block';
    evt.currentTarget.className += 'active';
}