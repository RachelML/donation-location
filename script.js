//https://data.cityofnewyork.us/resource/qnjm-wvu5.json

async function findLocation(borough) {
    try {
    let findBoro = await axios.get(`https://data.cityofnewyork.us/resource/qnjm-wvu5.json?borough=${borough}`);

    
        async function findCloseLocation(neighborhood) {
      
        let findNeighborhood = await axios.get(`https://data.cityofnewyork.us/resource/qnjm-wvu5.json?ntaname=${neighborhood}`);
         
        try {
            let elm = document.querySelector('.location')

            df = document.createDocumentFragment()
            for(let i = 0; i < 100; i++){
                let locationA = document.createElement('a')
                locationA.appendChild(document.createTextNode( "name: " + findNeighborhood.data[i].vendor_name))
                locationA.href = findNeighborhood.data[i].website
                let locationWeb = document.createElement('a')
                locationWeb.appendChild(document.createTextNode("address: " + findNeighborhood.data[i].address))
                locationWeb.href = `http://www.google.com/maps/place/${findNeighborhood.data[i].latitude},${findNeighborhood.data[i].longitude}`
                let locationH4 = document.createElement('h4')
                locationH4.appendChild(document.createTextNode("items accepted: " + findNeighborhood.data[i].items_accepted))
               
                df.appendChild(locationA)
                df.appendChild(locationWeb)
                df.appendChild(locationH4)


                elm.appendChild(df)

        //  document.querySelector('h2').innerHTML = "name: " + findNeighborhood.data[i].vendor_name;
        //  document.querySelector('h3').innerHTML = "address: " + findNeighborhood.data[i].address;
        //  document.querySelector('h4').innerHTML = "items accepted: " + findNeighborhood.data[i].items_accepted;
        
         console.log(findNeighborhood.data[i])
            }

        return findNeighborhood;
     } catch(err) {
         console.log(`Oops! Error occurred: ${err}`)
        console.log(err.response)
        }
        }
        
       
        let select = document.querySelector('#neighborhood')
        //pulls neighborhood data from boro search and adds to drop down list
        let elm = document.getElementById('neighborhood')
        
        df = document.createDocumentFragment()
            for(let i = 0; i < 100; i++){
            let option = document.createElement('option')
            option.value = findBoro.data[i].ntaname
            option.appendChild(document.createTextNode(findBoro.data[i].ntaname))
            df.appendChild(option)
            elm.appendChild(df)

            
            console.log(findBoro.data[i].ntaname)
       }

 // dropdown search by neighborhood//////////////////////////////////////////////////////
     let neighborhoodSubmit = document.querySelector('#neighborhoodButton')

    
      const chooseNeighb = function(event) {
       event.preventDefault()
        let neighbData = select.value
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
boroInput.addEventListener('click', updateList)