// function for tabs.
document.getElementById("signup-tab").click();

function tabMenu(evt, tabName) {
    var tabcontent;
    var tablinks;

    tabcontent = document.getElementsByClassName('tabcontent');
    for (var i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = 'none';
    }


    tablinks = document.getElementsByClassName('tablinks');
    for (items of tablinks) {
        items.className = items.className.replace('active', '');
    }

    document.getElementById(tabName).style.display = 'block';
    evt.currentTarget.className += 'active';
}