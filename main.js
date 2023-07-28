const callAPI = async (url, parameters, data) => {
    let _parameters = {
      method: 'GET', // GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, cors, same-origin
      cache: 'default', // default, no-cache, reload, force-cache, only-if-cached
      credentials: 'omit', // include, same-origin, omit
      headers: {
        'Accept':'application/json',
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: 'follow', // manual, *follow, error
      referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: ''// body data type must match "Content-Type" header
    };
  
    _parameters = Object.assign(_parameters, parameters);
    _parameters.body = JSON.stringify(data);
  
    return fetch(url, _parameters);
  };
  
  const getCardParameters = async () => {
    const url = 'http://localhost:3000/api/card';
    const parameters = {};
    const res = await callAPI(url, parameters);
    const data = await res.json();
    console.log(data);
    return data;
  };

(async ()=>{

        const cardParameters = await getCardParameters();
        console.log(cardParameters);

        const card1 = new Card(cardParameters);
        console.log(card1.getCard());
        
        const main = document.getElementsByTagName('main')[0];
        main.append(card1.getCard());

    
})();




