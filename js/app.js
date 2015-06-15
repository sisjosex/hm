var module = ons.bootstrap();
ons.ready(function () {

});

/*
var MainNavigatorController;
module.controller('MainNavigatorController', function ($scope) {
    ons.ready(function () {

        try {
            StatusBar.hide();
        } catch (error) {
        }

        //slidingMenu.setMainPage('home.html');
        slidingMenu.setMainPage('busqueda.html');
        //mainNavigator.pushPage('home.html', {transition:'none'});
    })
});*/

var HomeController;
module.controller('HomeController', function ($scope) {
    ons.ready(function () {


        setTimeout(function () {

            console.log('hidding splash');

            try {
                navigator.splashscreen.hide();
            } catch (error) {
            }

        }, 2000);

    })
});

var LoginController;
module.controller('LoginController', function ($scope) {
    ons.ready(function () {


    })
});

var BusquedaController;
module.controller('BusquedaController', function ($scope) {
    ons.ready(function () {


    })
});

var ResultadosController;
module.controller('ResultadosController', function ($scope) {
    ons.ready(function () {


    })
});

var VacacionesController;
module.controller('VacacionesController', function ($scope) {
    ons.ready(function () {


    })
});

function goToInicio() {

    slidingMenu.close();

    slidingMenu.setMainPage('home.html');

    /*mainNavigator.popPage();

     mainNavigator.pushPage('home.html', {transition:'slide'});*/
}

function goToIniciarSesion() {

    slidingMenu.close();

    slidingMenu.setMainPage('login.html');

    //mainNavigator.popPage();

    //mainNavigator.pushPage('login.html', {transition:'slide'});
}

function goToBuscador() {

    slidingMenu.close();

    slidingMenu.setMainPage('busqueda.html');
}

function goToVacaciones() {

    slidingMenu.close();

    slidingMenu.setMainPage('vacaciones.html', {transition:'slide'});
}

function onChangeCheckbox(element) {

    console.log(element);

    var div = $(element).parent().find('.checkbox');

    if (element.checked == true) {

        div.addClass('on');

    } else {

        div.removeClass('on');
    }
}

function dateChange(element) {

    element = $(element);

    element.parent().find('.date-text').text(element.val());
}

function selectChange(element) {

    element = $(element);

    element.parent().find('.select-text').text(element.find('option').filter(':selected').text());
}

function checkboxChange(element) {

    if (element.checked) {

        element = $(element);

        element.parent().find('.checkbox-text').addClass('on');

    } else {

        element = $(element);

        element.parent().find('.checkbox-text').removeClass('on');
    }

}

function spinnerChange(element, action) {

    console.log(action);

    element = $(element).parent().parent().find('input');

    var val = element.val();

    try {

        val = parseInt(val);

    } catch (error) {

        val = 0;
    }

    if (action == 'increase') {

        if (val < 15) {
            val = val + 1;
        }

    } else if (action == 'decrease') {

        if (val > 0) {
            val = val - 1;
        }
    }

    element.val(val);
}




