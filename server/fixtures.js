if (Owners.find().count() === 0) {
    Owners.insert({
        firstName:'first',
        lastName:'last',
        city:'Owner city',
        address:'Owner address',
        telephone:'Owner telephone',
        pets:'Owner pets'
    })
}