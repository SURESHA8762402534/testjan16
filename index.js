/* window.addEventListener('load', () => {
    let long;
    let lat;
    let temparaturedesctription = document.querySelector('.tempareturedescription');
    let temparaturedegree = document.querySelector('.degree');
    let locationtimezone = document.querySelector('.locationtimezone');

    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position => {
            console.log(position);
            long = position.coords.longitude;
            lat = position.coords.latitude;

            //const proxy = "https://cors-anywhere.herokuapp.com/";

         //const api = `${proxy}https://api.darksky.net/forecast/fd9d9c6418c23d94745b836767721ad1/${lat},${long}`;
          const api = `https://localhost:3000/weather/kanpur`;
            fetch(api)
            .then(response => {
                return response.json();
            })
            .then(data => {
                console.log(data);
                //const {temparature,summary}= data.currerntly;

                temparaturedegree.textContent = temparature;
            }); 
    

        });

       
        
    }
}); */

window.addEventListener('load', () => {
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition((position) =>{
            console.log(position);
        })
    }

})