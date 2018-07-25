var company = {
    "pratika": {
        "name": "google"
    },
    "Ben": {
        "name": "facebook"
    },
    "ram": {
        "name": "bosch"
    },
    "laxman": {
        "name": "eonics"
    },
    "bhanu": {
        "name": "tcs"
    }
};

 for (var key in company) {
    console.log(key + "'s company is " + company[key]['name']);

}

//Object.keys(company).forEach(function (key) {
 // console.log(key + "'s company is " + company[key]['name']);
//});