
setInterval(() => {

    let ho = document.getElementById('ho');
    let mi = document.getElementById('mi');
    let se = document.getElementById('se');

    let sec = document.querySelector('.sec');
    let min = document.querySelector('.min');
    let hr = document.querySelector('.hr');

    let hour = new Date().getHours();
    let minute = new Date().getMinutes();
    let second = new Date().getSeconds();

    // ho.style.strokeDashoffset = 510 - (510 * hour) / 12;
    mi.style.strokeDashoffset = 630 - (630 * minute) / 60;
    se.style.strokeDashoffset = 760 - (760 * second) / 60;

    sec.style.transform = `rotateZ(${second * 6}deg)`;
    min.style.transform = `rotateZ(${(minute * 6)}deg)`;
    hr.style.transform = `rotateZ(${(hour * 30)}deg)`;

    let inhr = document.getElementById('inhr');
    let inmin = document.getElementById('inmin');
    let insec = document.getElementById('insec');
    let ap = document.getElementById('ap');

    let am = hour >= 12 ? "PM" : "AM";

    if (hour > 12) {
        // hour = hour - 12;
        ho.style.strokeDashoffset = 510 - (510*(hour-12)) / 12;
    }
    else{
        ho.style.strokeDashoffset = 510 - (510 * hour) / 12;
    }

    hour = (hour < 10) ? "0" + hour : hour;
    minute = (minute < 10) ? "0" + minute : minute;
    second = (second < 10) ? "0" + second : second;

    inhr.innerHTML = hour;
    inmin.innerHTML = minute;
    insec.innerHTML = second;
    inhr.innerHTML = hour;
    ap.innerHTML = am;




})