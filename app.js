window.addEventListener("load", () => {
        clock();
        function clock() {
                const today = new Date();
                // get time components
                const hours = today.getHours();
                const minutes = today.getMinutes();
                const seconds = today.getSeconds();
                //add '0' to hour, minute & second when they are less 10
                const hour = hours < 10 ? "0" + hours : hours;
                const minute = minutes < 10 ? "0" + minutes : minutes;
                const second = seconds < 10 ? "0" + seconds : seconds;
                //make clock a 12-hour time clock
                const hourTime = hour > 12 ? hour - 12 : hour;
                const ampm = hour < 12 ? "AM" : "PM";
                const time = hourTime + ":" + minute + ":" + second + ampm;
                //time to the DOM
                document.getElementById("clock").innerHTML = time;
                //calling function every second
                setTimeout(clock, 1000);
        }
});

