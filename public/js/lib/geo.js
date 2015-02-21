
(function(){
    function success(position) {
        var mapArea = $('.map-area');

        if (mapArea.hasClass('success')) {
            // not sure why we're hitting this twice in FF, I think it's to do with a cached result coming back    
            return;
        }
        mapArea.addClass('success');
        
        $('.statusText').text(position.coords.latitude + 'lat, ' + position.coords.longitude + 'lon');
        // for testing, since we aren't in edmonton
        var latlng = new google.maps.LatLng(53.48536, -113.51667); // southgate, edmonton
        // var latlng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
        var myOptions = {
            zoom: 15,
            center: latlng,
            mapTypeControl: false,
            navigationControlOptions: {style: google.maps.NavigationControlStyle.SMALL},
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        map = new google.maps.Map(document.getElementById("mapCanvas"), myOptions);
        
        var marker = new google.maps.Marker({
            position: latlng, 
            map: map
        });
    }
    function error(msg) {
        var s = document.querySelector('.statusText');
        s.innerHTML = typeof msg == 'string' ? msg : "failed";
        s.className = 'fail';
        
        // console.log(arguments);
    }

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(success, error);
    } else {
        error('geolocation not supported');
    }

})();
