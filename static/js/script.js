const toggleModal = () =>{
    const bodyClassList = document.body.classList;
    if(bodyClassList.contains("open")){
        bodyClassList.remove("open");
        bodyClassList.add("closed");
    }else{
        bodyClassList.remove("closed");
        bodyClassList.add("open");
    }
};

function openMenu() {
    const nav = document.querySelector('nav');
    nav.classList.toggle('open');
}

document.querySelectorAll('.bx-icon, .link-site').forEach(item => {
    item.addEventListener('mouseenter', () => {
      item.style.transform = 'scale(1.2)';
    });
  
    item.addEventListener('mouseleave', () => {
      item.style.transform = 'scale(1)';
    });
  });

// document.getElementById('downloadButton').addEventListener('click', function() {
//   const fileurl = '';
//   const fileName = 'DaniilPopovResume.pdf'; 

//   let link = document.createElement('a');
//   link.href = fileurl;
//   link.download = fileName;

//   document.body.appendChild(link);
//   link.click();

//   document.body.removeChild(link);
// });

emailjs.init("DMNgsfT8ea-nrlR7R"); // Replace with your EmailJS User ID

const sendBtn = document.querySelector('.send-btn');
const result = document.querySelector('.result');

sendBtn.addEventListener('click', sendEmail);

function sendEmail() {
    // Get the form data
    const from = document.getElementById("from").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;
    
    // Send the email using EmailJS
    emailjs.send("service_onhcdmr", "template_ixxo8he", {
        from_email: from,
        subject: subject,
        message: message
    })
        .then(function () {
            result.innerHTML = "Email sent successfully!";
            result.style.opacity = 1;
        }, function (error) {
            result.innerHTML = "Email sending failed!";
            result.style.opacity = 1;
        });
}

const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
const input = document.querySelector('input');

function isEmailValid(value) {
        return EMAIL_REGEXP.test(value);
}

function onInput() {
    if (isEmailValid(input.value)) {
        input.style.borderColor = 'green';
    } else {
        input.style.borderColor = 'red';
    }
}

input.addEventListener('input', onInput);
