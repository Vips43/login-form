let form = document.getElementById('form')
let toggleDiv = document.querySelector('.toggle-div')
let toggleDivC1 = document.querySelector('.toggle-div .c1')
let fName = document.querySelector('.fname')
let lName = document.querySelector('.lname')
let phoneNum = document.querySelector('.phone')
let email = document.querySelector('.mail')
let pass = document.querySelector('.pass')
let cPass = document.querySelector('.apass')
let signUpBtn = document.querySelector('#signupbtn')




// toggleDiv.addEventListener('click',()=>{
//     toggleDiv.classList.toggle("cover")
//     // toggleDivC1.innerHTML = toggleDiv.classList.contains("cover") ? 'Log in' : 'Sign up' 
//     if(toggleDiv.classList.contains("cover")){
//         toggleDivC1.innerHTML = 'Log in'
//         form.style.borderColor = '#3E0703'
//     }else{
//         toggleDivC1.innerHTML = 'Sign up'
//         form.style.borderColor = '#064232'
        
//     }
// })
signUpBtn.addEventListener('click',()=>{
    const inpv = fName.value
    console.log(inpv);
    
})




