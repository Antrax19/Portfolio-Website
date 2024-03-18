const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');

menuToggle.addEventListener('click', function() {
  menu.classList.toggle('active');
});

const form = document.querySelector('form');
const email = document.getElementById("email");
const message = document.getElementById("message");
function sendEmail() {
  const bodyMessage = `Email: ${email.value} <br> Message: ${message.value}`;
  Email.send({
    Host : "smtp.elasticemail.com",
    Username : "manojselvaraj46@gmail.com",
    Password : "F562F639BA836C7D4973C52B19ED1E14D3CF",
    To : 'manojselvaraj46@gmail.com',
    From : "manojselvaraj46@gmail.com",
    Subject : "This is the subject",
    Body : bodyMessage
}).then(
  message => alert(message)
);

}
form.addEventListener("submit", (e) => {
  e.preventDefault();
  sendEmail();
});