//https://data.cityofnewyork.us/resource/qnjm-wvu5.json

async function findLocation(borough) {
    try {
    let findBoro = await axios.get(`https://data.cityofnewyork.us/resource/qnjm-wvu5.json?borough=${borough}`);
    
      
    let findNeighborhood = await axios.get(`https://data.cityofnewyork.us/resource/qnjm-wvu5.json?ntaname=Allerton-Pelham Gardens`);
         
        
        document.querySelector('h2').innerHTML = findNeighborhood.data[0].address;
        document.querySelector('h3').innerHTML = findNeighborhood.data[0].vendor_name;

        //pulls neighborhood data from boro search and adds to drop down list
        document.write("<select name='neighborhood'>");
       for(let i = 0; i < 100; i++){
        {
            i++
            document.write("<option>" + findBoro.data[i].ntaname + "</option>");
        
        }

        console.log(findBoro.data[i].ntaname)
       }




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

boroSubmit.addEventListener('click', updateList)