

function age_calc() {
    document.getElementById('display').style.display = 'block';

    let dob_date = document.getElementById('date').value;
    // console.log(dob_date);

    let dob_month = document.getElementById('month').value;
    // console.log(dob_month);

    let dob_year = document.getElementById('year').value;
    // console.log(dob_year);


    let DOB = new Date(` ${dob_date} ${dob_month} ${dob_year}`);
    // console.log(DOB);

    let current = new Date();
    // console.log(current);

    let age_in_millisec = current - DOB;
    // console.log(age_in_millisec);

    let age_in_year = Math.floor(age_in_millisec / (1000 * 60 * 60 * 24 * 365));
    console.log(age_in_year);


    var day_age = Math.floor((age_in_millisec % 31536000000) / 86400000);



    var age_in_month = Math.floor(day_age / 28.5);
    console.log(age_in_month);

    document.getElementById('display').innerText = `You are ${age_in_year} years & ${age_in_month} months old !!`;



    if (age_in_month == 0 && dob_date == current.getDate()) {
        document.getElementById('wish').innerHTML = '<video id="birth" src="assets/images/Untitled design(1).mp4" controls autoplay></video>';
        document.getElementById('birth').play();

    }
    else if (age_in_month == 0 && dob_date > current.getDate() && DOB.getMonth() == current.getMonth()) {
        document.getElementById('wish').innerHTML = '<video id="birth" src="assets/images/In_Advance.mp4" controls autoplay ></video>';
        document.getElementById('display').innerText = `You are ${age_in_year} years & 11 months old !!`;

    }
    else if (DOB.getMonth() == current.getMonth() && dob_date < current.getDate()) {
        document.getElementById('wish').innerHTML = '<video id="birth" src="assets/images/Be lated.mp4" controls autoplay></video>';
        document.getElementById('display').innerText = `You are ${age_in_year} years & 0 months old !!`;

    }
    else if (DOB > current) {
        document.getElementById('wish').innerHTML = ("Invalid date input - Please try again!");
    }


    var form = document.getElementById("age_calc");
    function handleForm(event) { event.preventDefault(); }
    form.addEventListener('submit', handleForm);

}


document.getElementById('reset').addEventListener('click', function () {
    location.reload();
    document.getElementById('display').style.display = 'none';
})

function reset() {

    // document.getElementById('display').style.display = "hidden";
}
