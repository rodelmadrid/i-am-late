// clock that runs every 100ms = 0.1s and updates the DOM
// with current time
function clock() {
    const timeStringObject = getTimeString();
    setTimeString(timeStringObject.hours, timeStringObject.minutes, timeStringObject.seconds);
}

// this gets time and put it in an object as hour, minutes and seconds
function getTimeString() {
    const fullDate = new Date();
    return {
        hours: padTime(fullDate.getHours()),
        minutes: padTime(fullDate.getMinutes()),
        seconds: padTime(fullDate.getSeconds())
    }
}

// this set time in the DOM
function setTimeString(hours, minutes, seconds) {
    $('#hour').html(hours);
    $('#minute').html(":" + minutes);
    $('#second').html(":" + seconds);
}

// this adds a zero to numbers with one digit
function padTime(value) {
    let paddedTime = value;
    if (value < 10) {
        paddedTime = '0' + value;
    }
    return paddedTime;
}

// activate click on the i am late button
function iAmLateButton() {
    $('#i-am-late-btn').click(function() {
    
        const meetingDate = $('#meeting-date').val();
        if (!meetingDate) {
            alert('Select a date for your meeting');
        } else {
            // create a Date from the date sent
            const realMeetingDate = new Date(meetingDate);
            // get the value of the time
            const meetingTime = $('#meeting-time').val();
            if (!meetingTime) {
                alert('Select a time for your meeting');
            } else {
                const meetingTimeSplittedArray = $('#meeting-time').val().split(':');

                const selectedHour = parseInt(meetingTimeSplittedArray[0]);
                const selectedMinutes = parseInt(meetingTimeSplittedArray[1]);
                const selectedSeconds = 0;
                realMeetingDate.setHours(selectedHour, selectedMinutes, selectedSeconds);

                const today = new Date();
                const name = $('#name').val();
                if (!name) {
                    alert('Enter a Valid Name')
                } else {
                    const usernamesElements = document.getElementsByClassName('username');
                    for (let i = 0; i < usernamesElements.length; i++) {
                        usernamesElements[i].innerHTML = name;
                    }

                    if (realMeetingDate < today) {
                        // showing late element in the DOM
                        $('#late').show();
                        // hiding on time elment in the DOM
                        $('#on-time').hide();
                    } else {
                        // showing on time element in the DOM
                        $('#on-time').show();
                        // hiding on time element in the DOM
                        $('#late').hide();
                    }
                }
            }
        }
    });
}



$(document).ready(iAmLateApp);

// This is the main function
function iAmLateApp() {
    // tick the clock
    setInterval(clock, 100);
    iAmLateButton();
}
