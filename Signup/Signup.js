//variables
var regex;
var fn;

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

$('.btn1').click(function (event) {
    event.preventDefault();

})
$('#signup').on('keyup', function () {
    validate($(this));
})
function validate(action) {
    if (action.find('[placeholder="Fullname"]').focus()) {
        regex = /[a-zA-Z]$/;
        fn = action.find('[placeholder="Fullname"]').val();
        console.log(fn);

        if (regex.test(fn)) {
            $('#signup').find('[placeholder="Fullname"]').css('color', 'black');
        }
        else {
            $('#signup').find('[placeholder="Fullname"]').css('color', 'red');
        }
    }
    else if (action.find('[placeholder="Email"]').focus()) {
        // regex = /^[a-zA-Z0-9]*[@]{1}[a-z]{2,6}[.]{1}[a-z]{2,5}$/;
        eml = action.find('[placeholder="Email"]').val();
        console.log(eml);

        if (regex.test(eml)) {
            $('#signup').find('[placeholder="Email"]').css('color', 'black');
        }
        else {
            $('#signup').find('[placeholder="Email"]').css('color', 'red');
        }
    }

}
