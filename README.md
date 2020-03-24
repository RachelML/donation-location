# Donation Location :recycle

## API

https://data.cityofnewyork.us/Environment/Textile-Drop-Off-Locations-in-NYC/qnjm-wvu5


## Project Description

An app that helps users find a near-by textile donation center in their borough. User will be able to select their borough and  type of textile to donate ( shoes, clothing, bedding etc). Using Textile Drop-Off Locations in NYC API, a location that fits users criteria will display on app. 



## API Data Sample

data to pull: Address, borough, Vendor name, website, ntaname

https://data.cityofnewyork.us/Environment/Textile-Drop-Off-Locations-in-NYC/qnjm-wvu5

#### MVP 

- Allow user to select neighborhood
- Allow user to select their borough to render a donation center in users borough 
- Render donation center address on page 


#### PostMVP 

- use more specific data in API to find a donation center in users neighborhood
- render additional data about donation center: name, phone number, type, website etc.
- use 2nd API to pinpoint location on Map
- list multiple locations 
- add donation center images 


## Code Snippet

 for (let i = 0; i < 100; i++) {
            let option = document.createElement('option')
            option.value = sortedBoro[i].ntaname
            option.appendChild(document.createTextNode(sortedBoro[i].ntaname))
            df.appendChild(option)
            elm.appendChild(df)

populating a drop down menu based on users response 
Use this section to include a brief code snippet of functionality that you are proud of an a brief description  

```
