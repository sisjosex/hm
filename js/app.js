var module = ons.bootstrap();
ons.ready(function() {

});

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
});

var HomeController;
module.controller('HomeController', function ($scope) {
    ons.ready(function () {


        setTimeout(function(){

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

function onChangeCheckbox(element) {

    console.log(element);

    var div = $(element).parent().find('.checkbox');

    if( element.checked == true ) {

        div.addClass('on');

    } else {

        div.removeClass('on');
    }
}