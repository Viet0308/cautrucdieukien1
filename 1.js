
let year = parseInt(prompt("Enter a year"));

    if ((year % 4 == 0 && year % 100 !== 0) || (year % 100 == 0 && year % 400 == 0)) {
        alert(year + " nam nhuan ")
    }
    else {(year % 100 == 0 && year % 400 !== 0)
        alert(year + " ko phai la nam nhuan ")
    }

