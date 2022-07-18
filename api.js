let tokenArr = []

const binancePublicEndpoint = 'https://api.binance.com';
const exchangeInfoEndpoint = binancePublicEndpoint + '/api/v3/exchangeInfo';
const tickersEndpoint = binancePublicEndpoint + '/api/v3/ticker/price';

componentDidMount = async () => {


    const resToken = await fetch('https://api.pancakeswap.info/api/v2/pairs');
    const dataToken = await resToken.json()

    const b = Object.values(dataToken.data)

    console.log(b);

    console.log(dataToken.data);

    return b

};


componentDidMount().then(res => tokenArr.push(...res))


console.log(tokenArr)