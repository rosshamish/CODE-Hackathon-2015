(function(){
    function success(position) {
        var mapArea = $('.map-area');

        if (mapArea.hasClass('success')) {
            // not sure why we're hitting this twice in FF, I think it's to do with a cached result coming back    
            return;
        }
        mapArea.addClass('success');
        
        var statusText = document.createElement('div');
        statusText.innerHTML = position.coords.latitude + 'lat, ' + position.coords.longitude + 'lon';
        statusText.className = 'status';
        
        var mapCanvas = document.createElement('div');
        mapCanvas.id = 'mapCanvas';
        mapCanvas.style.height = '400px';
        mapCanvas.style.width = '100%';
          
        mapArea.append(mapCanvas);
        mapArea.append(statusText);
        
        var latlng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
        var myOptions = {
            zoom: 15,
            center: latlng,
            mapTypeControl: false,
            navigationControlOptions: {style: google.maps.NavigationControlStyle.SMALL},
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        var map = new google.maps.Map(document.getElementById("mapCanvas"), myOptions);
        
        var marker = new google.maps.Marker({
            position: latlng, 
            map: map
        });
    }
    function error(msg) {
        var s = document.querySelector('#status');
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
