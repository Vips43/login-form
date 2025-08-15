let form = document.getElementById('form')
let toggleDiv = document.querySelector('.toggle-div')
let toggleDivC1 = document.querySelector('.toggle-div .c1')
let fName = document.querySelector('#fname').value
let lName = document.querySelector('#lname').value
let phoneNum = document.querySelector('#phone').value
let email = document.querySelector('#mail').value
let pass = document.querySelector('#pass').value
let cPass = document.querySelector('#apass').value
let signUpBtn = document.querySelector('#signupbtn')




toggleDiv.addEventListener('click',()=>{
    toggleDiv.classList.toggle("cover")
    // toggleDivC1.innerHTML = toggleDiv.classList.contains("cover") ? 'Log in' : 'Sign up' 
    if(toggleDiv.classList.contains("cover")){
        toggleDivC1.innerHTML = 'Log in'
        form.style.borderColor = '#3E0703'
    }else{
        toggleDivC1.innerHTML = 'Sign up'
        form.style.borderColor = '#064232'
        
    }
})
signUpBtn.addEventListener('click',()=>{
    if(fName == ''||lName==''||phoneNum==''||email==''||pass==''||cPass==''){
        alert('please enter all fields')
    }else if(fName<2||lName<2||phoneNum<10||phoneNum>10){
        alert('enter valid')
    }
    else{
        alert('submittted')
    }
    
    
    
})




