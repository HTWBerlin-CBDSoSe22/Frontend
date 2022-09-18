import React, {useState} from 'react';

// in progress...
function ExchangeRates(props) {
    const [exchangeRate, setExchangeRate] = useState({
        EUR: true,
        USD: false,
        SEK: false
    });

    const setCurrency = () => {
        if (exchangeRate.EUR) {
            return 1;
        }
        else if (exchangeRate.USD) {
            return 10;
        }
        else if (exchangeRate.SEK) {
            return 100;
        }
    }



    return (
        <div></div>
    );
}

export default ExchangeRates;
