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

var UltimoMinutoPaisController;
module.controller('UltimoMinutoPaisController', function ($scope) {
    ons.ready(function () {


    })
});

var UltimoMinutoCiudadController;
module.controller('UltimoMinutoCiudadController', function ($scope) {
    ons.ready(function () {


    })
});

var ResultadoBusquedaController;
module.controller('ResultadoBusquedaController', function ($scope) {
    ons.ready(function () {

        var latLong = new google.maps.LatLng(40.71535,-3.98943);

        map = new google.maps.Map(document.getElementById('map'), {
            center: latLong,
            zoom: 18,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        });

        var marker = new google.maps.Marker({
            map: map,
            //position: new google.maps.LatLng(lat, lng),
            title: "move this marker",
            icon: 'images/icon_marker.png',
            //shadow: shadow,
            //shape: shape,
            position: latLong,
            animation:google.maps.Animation.DROP,
            draggable:false
        });

        /*
        var infowindow = new google.maps.InfoWindow();
        infowindow.setContent("<p style='color:red;font-weight:bold;'><img width='150' src='img/logo.png'/></p>");
        infowindow.open(map,marker);
        */

        google.maps.event.addListener(marker, 'click', function() {
            infowindow.open(map,marker);
        });



        $('#map').on('touchmove', function(e){
            e.preventDefault();
            e.stopPropagation();
        });

    });
});

var UltimoMinutoHotelController;
module.controller('UltimoMinutoHotelController', function ($scope) {
    ons.ready(function () {

        var latLong = new google.maps.LatLng(40.71535,-3.98943);

        map = new google.maps.Map(document.getElementById('map'), {
            center: latLong,
            zoom: 18,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        });

        var marker = new google.maps.Marker({
            map: map,
            //position: new google.maps.LatLng(lat, lng),
            title: "move this marker",
            icon: 'images/icon_marker.png',
            //shadow: shadow,
            //shape: shape,
            position: latLong,
            animation:google.maps.Animation.DROP,
            draggable:false
        });

        /*
         var infowindow = new google.maps.InfoWindow();
         infowindow.setContent("<p style='color:red;font-weight:bold;'><img width='150' src='img/logo.png'/></p>");
         infowindow.open(map,marker);
         */

        google.maps.event.addListener(marker, 'click', function() {
            infowindow.open(map,marker);
        });



        $('#map').on('touchmove', function(e){
            e.preventDefault();
            e.stopPropagation();
        });

    });
});


var VacacionesDetalleController;
module.controller('VacacionesDetalleController', function ($scope) {
    ons.ready(function () {

        var latLong = new google.maps.LatLng(40.71535,-3.98943);

        map = new google.maps.Map(document.getElementById('map'), {
            center: latLong,
            zoom: 18,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        });

        var marker = new google.maps.Marker({
            map: map,
            //position: new google.maps.LatLng(lat, lng),
            title: "move this marker",
            icon: 'images/icon_marker.png',
            //shadow: shadow,
            //shape: shape,
            position: latLong,
            animation:google.maps.Animation.DROP,
            draggable:false
        });

        /*
         var infowindow = new google.maps.InfoWindow();
         infowindow.setContent("<p style='color:red;font-weight:bold;'><img width='150' src='img/logo.png'/></p>");
         infowindow.open(map,marker);
         */

        google.maps.event.addListener(marker, 'click', function() {
            infowindow.open(map,marker);
        });



        $('#map').on('touchmove', function(e){
            e.preventDefault();
            e.stopPropagation();
        });

    });
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

function goToResultado() {

    //slidingMenu.close();

    mainNavigator.pushPage('resultado_busqueda.html', {transition:'slide'});
}

function goToVacaciones() {

    slidingMenu.close();

    slidingMenu.setMainPage('vacaciones.html', {transition:'slide'});
}

function goToUltimoMinuto() {
    slidingMenu.close();

    slidingMenu.setMainPage('ultimo_minuto.html', {transition:'slide'});
}

function goToUltimoMinutoCiudad() {
    slidingMenu.close();

    mainNavigator.pushPage('ultimo_minuto_ciudad.html', {transition:'slide'});
}

function goToUltimoMinutoHotel() {
    slidingMenu.close();

    mainNavigator.pushPage('ultimo_minuto_hotel.html', {transition:'slide'});
}

function goToVacacionesDetalle() {
    slidingMenu.close();

    mainNavigator.pushPage('vacaciones_detalle.html', {transition:'slide'});
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
        element.parent().find('.checkbox-text2').addClass('on');

    } else {

        element = $(element);

        element.parent().find('.checkbox-text').removeClass('on');
        element.parent().find('.checkbox-text2').removeClass('on');
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




