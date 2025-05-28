const baseCurrency = document.getElementById('base-currency');
const amountInput = document.getElementById('amount');
const resultDiv = document.getElementById('result');

const fetchRates = async () => {
  const base = baseCurrency.value;
  const amount = parseFloat(amountInput.value);

  const response = await fetch(`https://api.exchangerate-api.com/v4/latest/${base}`);
  const data = await response.json();

  const rates = data.rates;

  let output = `<h3>Rates for 1 ${base}</h3>`;
  for (let currency in rates) {
    const converted = (rates[currency] * amount).toFixed(2);
    output += `<p>${currency}: ${converted}</p>`;
  }

  resultDiv.innerHTML = output;
};

baseCurrency.addEventListener('change', fetchRates);
amountInput.addEventListener('input', fetchRates);

// Initial fetch
fetchRates();
