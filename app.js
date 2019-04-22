window.onload = iAmLateApp();

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
    document.getElementById('hour').innerHTML = hours;
    document.getElementById('minute').innerHTML = ':' + minutes;
    document.getElementById('second').innerHTML = ':' + seconds;
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
    document.getElementById('i-am-late-btn').onclick = function() {

        const meetingDate = document.getElementById('meeting-date').value;
        if (!meetingDate) {
            alert('Select a date for your meeting');
        } else {
            // create a Date from the date sent
            const realMeetingDate = new Date(meetingDate);
            // get the value of the time
            const meetingTime = document.getElementById('meeting-time').value;
            if (!meetingTime) {
                alert('Select a time for your meeting');
            } else {
                const meetingTimeSplittedArray = meetingTime.split(':');

                const selectedHour = parseInt(meetingTimeSplittedArray[0]);
                const selectedMinutes = parseInt(meetingTimeSplittedArray[1]);
                const selectedSeconds = 0;
                realMeetingDate.setHours(selectedHour, selectedMinutes, selectedSeconds);

                const today = new Date();
                const name = document.getElementById('name').value;
                if (!name) {
                    alert('Enter a Valid Name')
                } else {
                    const usernamesElements = document.getElementsByClassName('username');
                    for (let i = 0; i < usernamesElements.length; i++) {
                        usernamesElements[i].innerHTML = name;
                    }

                    if (realMeetingDate < today) {
                        document.getElementById('late').style.display = 'block';
                        document.getElementById('on-time').style.display = 'none';
                    } else {
                        document.getElementById('on-time').style.display = 'block';
                        document.getElementById('late').style.display = 'none';
                    }
                }
            }
        }
    }
}

// This is the main function
function iAmLateApp() {
    // tick the clock
    setInterval(clock, 100);
    iAmLateButton();
}
