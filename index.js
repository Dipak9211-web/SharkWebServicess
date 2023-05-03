
//navbar toggle//
const toggleButton = document.getElementById("nav-toggle");
const navLinks = document.getElementById("nav-links");

toggleButton.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

//get contact us data
 let formData = {}
 function handleForm(){
  console.log("diapk");
     formData.fullname = document.getElementById('fullname').value;
     formData.email = document.getElementById('email').value;
     formData.number = document.getElementById('number').value;
     formData.textfield = document.getElementById('textfield').value;
     localStorage.setItem('formData', formData)
     alert("Form submitted");
     console.log(formData);

     document.getElementById('fullname').value = "";
     document.getElementById('email').value = "";
     document.getElementById('number').value = "";
     document.getElementById('textfield').value = "";

 
     
    }
    

      





