function validateForm() {
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const dob = document.getElementById('dob').value;
    const country = document.getElementById('country').value;
    const genderOptions = document.querySelectorAll('input[name="gender"]:checked');
    const profession = document.getElementById('profession').value;
    const email = document.getElementById('email').value;
    const mobile = document.getElementById('mobile').value;

    if (!firstName || !lastName || !dob || !country || genderOptions.length === 0 || !profession || !email || !mobile) {
        alert('Please fill in all required fields.');
        return false;
    }

    displaySurveyResults();
    return false;
}

function displaySurveyResults() {
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const dob = document.getElementById('dob').value;
    const country = document.getElementById('country').value;
    const genderOptions = document.querySelectorAll('input[name="gender"]:checked');
    const profession = document.getElementById('profession').value;
    const email = document.getElementById('email').value;
    const mobile = document.getElementById('mobile').value;

    const resultsList = document.getElementById('resultsList');
    resultsList.innerHTML = '';

    const results = [
        `First Name: ${firstName}`,
        `Last Name: ${lastName}`,
        `Date of Birth: ${dob}`,
        `Country: ${country}`,
        `Gender: ${[...genderOptions].map(checkbox => checkbox.value).join(', ')}`,
        `Profession: ${profession}`,
        `Email: ${email}`,
        `Mobile Number: ${mobile}`
    ];

    results.forEach(result => {
        const li = document.createElement('li');
        li.textContent = result;
        resultsList.appendChild(li);
    });

    openPopup();
}

function openPopup() {
    const popup = document.getElementById('popup');
    popup.style.display = 'block';
}

function closePopup() {
    const popup = document.getElementById('popup');
    popup.style.display = 'none';
    document.getElementById('surveyForm').reset();
}

