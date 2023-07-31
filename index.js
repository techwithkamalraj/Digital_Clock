function digitalClock() {


    setInterval(() => {
        let date = new Date();
        let hours = date.getHours();
        let minutes = date.getMinutes();
        let seconds = date.getSeconds();

        if (hh => 12) {
            document.getElementById("am-pm").innerHTML = "AM";
        }
        document.getElementById("hour").innerHTML = hours + ":";
        document.getElementById("minute").innerHTML = minutes + ":";
        document.querySelector("#second").innerHTML = seconds;
    }, 1000)
}
digitalClock();