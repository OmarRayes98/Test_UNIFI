export     function convertUnixTimestampToAmPm(unixTimestamp) {
    // Create a new JavaScript Date object based on the timestamp
    var date = new Date(unixTimestamp * 1000);

    // Hours part from the timestamp
    var hours = date.getHours();

    // Minutes part from the timestamp
    var minutes = "0" + date.getMinutes();


    // Determine AM/PM
    var ampm = hours >= 12? 'PM' : 'AM';

    // Convert hours to 12-hour format
    hours = hours % 12;
    hours = hours? hours : 12; // the hour '0' should be '12'

    // Format the time string with AM/PM
    var formattedTime = hours + ':' + minutes.substr(-2) + ':'  + ampm;

    return formattedTime;
}