function calculateAge() {
    let birthdate = document.querySelector('.birthdate').value;
    let today = new Date();
    let birthDate = new Date(birthdate);
    let age = today.getFullYear() - birthDate.getFullYear();
    let month = today.getMonth() - birthDate.getMonth();
    if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }

    document.querySelector('#result').innerText = "Your age is: " + age;
}
