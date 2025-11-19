const verifyBtn = document.getElementById('verifyBtn');
const serialInput = document.getElementById('serialInput');
const resultDiv = document.getElementById('result');
const viewPopulationBtn = document.getElementById('viewPopulationBtn');

verifyBtn.addEventListener('click', () => {
    const serial = serialInput.value.trim().toUpperCase();

    if (serial in cardPopulationData) {
        resultDiv.innerHTML = `<p>✅ Serial Verified: ${serial}</p>`;
        viewPopulationBtn.classList.remove('hidden');

        viewPopulationBtn.onclick = () => {
            window.location.href = `population.html?serial=${serial}`;
        };
    } else {
        resultDiv.innerHTML = `<p>❌ Serial Not Found</p>`;
        viewPopulationBtn.classList.add('hidden');
    }
});
