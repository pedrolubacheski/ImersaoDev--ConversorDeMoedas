
const exchangeRates = {
    'USD': { 
        'BRL': 5.72,       
        'EUR': 0.93,       
        'KRW': 1.474,     
    },
    'BRL': { 
        'USD': 0.18,       
        'EUR': 0.16,       
        'KRW': 258.00      
    },
    'EUR': { 
        'USD': 1.08,       
        'BRL': 6.18,       
        'KRW': 1594.00     
    },
    'KRW': { 
        'USD': 0.0006783,    
        'BRL': 0.003875,     
        'EUR': 0.0006274    
    }
};


function convertCurrency() {
    let amount = document.getElementById('amount').value;
    let fromCurrency = document.getElementById('fromCurrency').value;
    let toCurrency = document.getElementById('toCurrency').value;

    if (amount === '' || amount <= 0) {
        document.getElementById('result').innerText = 'Digite um valor válido';
        return;
    }

    let rate = exchangeRates[fromCurrency][toCurrency];
    let convertedAmount = (amount * rate).toFixed(2);

    document.getElementById('result').innerText = `${amount} ${fromCurrency} = ${convertedAmount} ${toCurrency}`;
}
