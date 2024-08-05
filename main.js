///// data.results[0].gender; 
const img = document.querySelector('.img'); 
const boxSon2 = document.querySelector('.box-son:nth-of-type(2)'); 


const btn = document.getElementById('generate'); 

function fetchUser (){
showSpinner(); 
fetch('https://randomuser.me/api').then((response)=> {
    hideSpinner(); 
    return response.json(); 


}).then((data) => {

displayUser(data.results[0])
})

}





function displayUser(user) {

    ////change bakcgournd ; 
    console.log(user)
    if(user.gender === 'male'){
        document.body.style.backgroundColor = 'lightblue'; 
    }else {
        document.body.style.backgroundColor = 'pink'; 
    }

    //// dispaly user 
    /// create img 
    img.innerHTML =''
    const myImg = document.createElement('img'); 
    myImg.setAttribute('src',user.picture.large) ; 
    img.appendChild(myImg); 

    //// show data 
    const showData = ` <p>
              <strong>name:</strong> ${user.name.first} ${user.name.first}
            </p>
          
          
            <p>
              <strong>email:</strong> ${user.email}
            </p>
          
          
            <p>
              <strong>phone:</strong> ${user.phone}
            </p>
          
          
            <p>
              <strong>location:</strong> ${user.location.city} ,${user.location.country}
            </p>
          
            <p>
              <strong>age:</strong> ${user.dob.age}
            </p>
          
          `; 
    boxSon2.innerHTML = showData
 

    
}

/// function for showing and hiding spinner 

function showSpinner() {
    btn.querySelector('.spinner').style.display = 'block'; 
   
}

function hideSpinner() {
    
    btn.querySelector('.spinner').style.display = 'none'; 

}

//// event listener
fetchUser()
btn.addEventListener('click',fetchUser)


console.log(btn)
