let supliers = {}

function getSupliers() {
    axios.get('https://northwind.vercel.app/api/suppliers').then(res => {
        supliers = res.data
        console.log(supliers)
    })
}

function setSupliers() {
    let companyName = document.getElementById('companyName').value
    let contactName = document.getElementById('contactName').value
    let contactTitle = document.getElementById('contactTitle').value
    let country = document.getElementById('country').value
    let newSuplier = createSuplierObject(companyName, contactName, contactTitle, country)
    axios.post('https://northwind.vercel.app/api/suppliers', newSuplier)
        .then(res => {
            console.log('Response ', res);
        })
}

function createSuplierObject(companyName, contactName, contactTitle, country) {
    let suplier = {
        companyName: companyName,
        contactName: contactName,
        contactTitle: contactTitle,
        address: {
            country: country
        }
    }
    return suplier
}


const config = {
    headers: { Authorization: `apikey 0fmDheoUfItShTLmg6c8zs:2kEp8NgOyNFuA2doLRKp1t` }
};
const configFetch = {
    method: 'GET',
    headers : { 'Authorization': `apikey 0fmDheoUfItShTLmg6c8zs:2kEp8NgOyNFuA2doLRKp1t` }
};

function getWeatherByAxios() {
    axios.get('https://api.collectapi.com/weather/getWeather?data.lang=tr&data.city=kayseri', config).then(res => {
        console.log(res.data)
    }).catch(err => {
        console.log(err)
    });
}

function getWeatherByFetch() {
    fetch('https://api.collectapi.com/weather/getWeather?data.lang=tr&data.city=kayseri', configFetch)
        .then(res => {
            return res.json()
        }).then(data => {
            console.log(data)
        }).catch(err => {
            console.log(err)
        });
}

function deleteSuplierById() {

    let id = document.getElementById('suplierId').value;

    axios.delete('https://northwind.vercel.app/api/suppliers/' + id)
        .then(res => {
            alert('Success! ' + id);
        })
        .catch(err => {
            alert('Error')
        })

}

function getCompanyName() {

    document.getElementById('_companyName').innerHTML = '';

    axios.get('https://northwind.vercel.app/api/suppliers/')
        .then(res => {
            let supliers = res.data;
            supliers.forEach(element => {

                let liElement = document.createElement('li');
                liElement.innerHTML = element.companyName;

                document.getElementById('_companyName').appendChild(liElement)

            });
        })
}