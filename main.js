const bmiForm = document.getElementById('bmiForm');

bmiForm.addEventListener('submit', e => {
    e.preventDefault();
    const heightFt = document.getElementById('heightFt').value;
    const heightIn = document.getElementById('heightIn').value;
    const weight = document.getElementById('weight').value;
    const bmiText = document.getElementById('bmi');
    const bmiDiv = document.getElementById('bmiResult');
    bmiText.innerHTML = '';

    const heightInInches = heightFt * 12 + parseInt(heightIn);
    console.log(heightInInches);

    let bmi = (weight * 705) / heightInInches / heightInInches;

    bmi = Math.floor(bmi * 10) / 10;
    bmiText.innerText = ` ${bmi}`;

    bmiDiv.style.opacity = 1;
});
