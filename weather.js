$(document).ready(function () {

    $('#submitCity').click(function () {
        return getWeather();
    });

});

function getWeather() {

    var city = $('#city').val();

    if (city != '') {

        $.ajax({
           url: 'http://api.openweathermap.org/data/2.5/weather?q=' + city + '&units=metric&appid=0219a3608884a4ae09134d65dea11aeb',
            type: "GET",
            dataType: "jsonp",
            success: function (data) {
               var widgets = showResults(data);
                $('#showWeather').html(widgets);
                $('#city').val('')
            }
        });

    } else {
        $('#error').html('<div>City Field Cannot be empty</div>');
    }
}

function showResults(data) {
    return '<h3>Current Weather for ' + data.name + ', ' + data.sys.country + '</h3>' +
        "<p>Temperature: "+ data.main.temp + "&deg;C</p>" +
        "<p>Pressure: " + data.main.pressure + "</p>" +
        "<p>Humidity: " + data.main.humidity + "</p>" +
        "<p>Minimum temperature: " + data.main.temp_min+ "</p>" +
        "<p>Maximum temperature: " + data.main.temp_max+ "</p>" +
        "<p>Wind Speed: " + data.wind.speed+ "</p>";
}


