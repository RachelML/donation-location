//https://data.cityofnewyork.us/resource/qnjm-wvu5.json

async function findLocation(borough) {
    try {
    let findBoro = await axios.get(`https://data.cityofnewyork.us/resource/qnjm-wvu5.json?borough=${borough}`);

    
    async function findCloseLocation(neighborhood) {
      
    let findNeighborhood = await axios.get(`https://data.cityofnewyork.us/resource/qnjm-wvu5.json?ntaname=${neighborhood}`);
         
    try {
        document.querySelector('h2').innerHTML = "address: " + findNeighborhood.data[0].address;
        document.querySelector('h3').innerHTML = "name: " + findNeighborhood.data[0].vendor_name;
        document.querySelector('h4').innerHTML = findNeighborhood.data[0].website;
        
        console.log(findNeighborhood.data)
    

    return findNeighborhood;
    } catch(err) {
     console.log(`Oops! Error occurred: ${err}`)
    console.log(err.response)
}
}


        //pulls neighborhood data from boro search and adds to drop down list
        let option = document.querySelector('option')
        // document.write("<select name='neighborhood' onchange='this.form.submit()'>");

       for(let i = 0; i < 100; i++){

         option.innerHTML = findBoro.data[i].ntaname 
        // document.write("<option>" + findBoro.data[i].ntaname + "</option>");

        console.log(findBoro.data[i].ntaname)
       }
 // dropdown search by neighborhood
     let neighborhoodInput = document.querySelector('#hood')
     let neighborhoodSubmit = document.querySelector('#neighborhoodButton')

    
      const chooseNeighb = function(event) {
       event.preventDefault()
        let neighbData = neighborhoodInput.value
         findCloseLocation(neighbData)
     }
     neighborhoodSubmit.addEventListener('click', chooseNeighb)


    return findBoro;
  } catch(err) {
    console.log(`Oops! Error occurred: ${err}`)
    console.log(err.response)
  }
}

//search by borough
  let boroInput = document.querySelector('#boro')
  let boroSubmit = document.querySelector('#boroButton')


  const updateList = function(event) {
    event.preventDefault()
    let boroData = boroInput.value
    findLocation(boroData)

}
// boro search button
boroSubmit.addEventListener('click', updateList)