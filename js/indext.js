
var eventDate = document.getElementById('create-btn').addEventListener("click", function () {
    // select event data 
    const eventTitle = document.getElementById('event-title').value;
    const year = document.getElementById('event-year').value;
    const month = document.getElementById('months-option').value;
    const day = document.getElementById('event-day').value;
    const eventDate = `${month} ${day}, ${year}`;

    // to make content div disappear
    document.getElementById('content').style.display = "none";

    var countDownDate = new Date(eventDate).getTime();


    document.getElementById('countdown').style.display = "block";

    // Update the count down every 1 second

    var x = setInterval(function () {

        // Get today's date and time
        var now = new Date().getTime();

        // Find the distance between now and the count down date
        var distance = countDownDate - now;

        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);


        // Output the result in an element with id="demo

        document.getElementById('eventName').innerHTML = eventTitle;

        document.getElementById("count1").innerHTML = ` ${days} 

        day `;
        document.getElementById("count2").innerHTML = ` ${hours} 

        hour `;
        document.getElementById("count3").innerHTML = ` ${minutes} 

        minute `;
        document.getElementById("count4").innerHTML = ` ${seconds}

        second `;


        // If the count down is over, write some text 
        if (distance < 0) {
            clearInterval(x);

            document.getElementById('eventName').innerHTML = eventTitle;
            document.getElementById('expired').innerHTML = "Expired !"

            document.getElementById("count1").style.display="none"
            document.getElementById("count2").style.display="none"
            document.getElementById("count3").style.display="none"
            document.getElementById("count4").style.display="none"
        }

    }, 1000);
});









