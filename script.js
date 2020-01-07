//https://data.cityofnewyork.us/resource/qnjm-wvu5.json
// let addMapLocation = await axios.get(`https://api.mapbox.com/styles/v1/mapbox/light-v10/static/-73.9015,40.7358,12.78/300x200?access_token=pk.eyJ1IjoicmFjaGVsbWwiLCJhIjoiY2s1MGVnZGllMGQ0azNvcXFuMTB4MHQ5YSJ9.apbYNEUgIquVm6GbWooEow`)

async function findLocation(borough) {
    try {
    let findBoro = await axios.get(`https://data.cityofnewyork.us/resource/qnjm-wvu5.json?borough=${borough}`);

    
        async function findCloseLocation(neighborhood) {
      
        let findNeighborhood = await axios.get(`https://data.cityofnewyork.us/resource/qnjm-wvu5.json?ntaname=${neighborhood}`);
       
        try {
           
            let elm = document.querySelector('.location')

            df = document.createDocumentFragment()
            for(let i = 0; i < findNeighborhood.data.length; i++){

                let locationA = document.createElement('a')
                locationA.setAttribute("class", "name")
                locationA.setAttribute('target', '_blank')
                locationA.appendChild(document.createTextNode( i+1 + ". " + findNeighborhood.data[i].vendor_name))
                locationA.href = findNeighborhood.data[i].website

                let locationPhone = document.createElement('h4')
                locationPhone.appendChild(document.createTextNode(findNeighborhood.data[i].public_phone))

                let locationWeb = document.createElement('a')
                locationWeb.setAttribute('target', '_blank')
                locationWeb.appendChild(document.createTextNode(findNeighborhood.data[i].address + " " + findNeighborhood.data[i].ntaname))
                locationWeb.href = `http://www.google.com/maps/place/${findNeighborhood.data[i].latitude},${findNeighborhood.data[i].longitude}`

                let locationH4 = document.createElement('h4')
                locationH4.appendChild(document.createTextNode("items accepted: " + findNeighborhood.data[i].items_accepted))

                let mapLocation = document.createElement('div')
                mapLocation.setAttribute("class", "map")
                mapLocation.innerHTML = `
                <img src='https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/pin-s(${findNeighborhood.data[i].longitude},${findNeighborhood.data[i].latitude}/${findNeighborhood.data[i].longitude},${findNeighborhood.data[i].latitude},13/300x300?access_token=pk.eyJ1IjoicmFjaGVsbWwiLCJhIjoiY2s1MGVnZGllMGQ0azNvcXFuMTB4MHQ5YSJ9.apbYNEUgIquVm6GbWooEow' />
                `
                console.log(findNeighborhood.data[i])

        
                
                
                // console.log(MapLocation)
               
                df.appendChild(locationA)
                df.appendChild(locationPhone)
                df.appendChild(locationWeb)
                df.appendChild(locationH4)
                df.appendChild(mapLocation)



                elm.appendChild(df)

        
        //  console.log(findNeighborhood.data[i])
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


 boroInput.addEventListener('change', (event) => {
    let boroData = boroInput.value
    findLocation(boroData)
 });

