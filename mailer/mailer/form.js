function sendEmail() {
    Email.send({
      Host: "https://gmail.com",
      Secure:'tls',
      Username: "YourMail@gmail.com",
      Password: "Your PassWord",
      To: "YourMail@gmail.com",
      From: document.getElementById("email").value,
      Subject: "You Have a new Enquiry from",
      Body:
        "Name: " +
        document.getElementById("name").value +
        "<br> Email:" +
        document.getElementById("email").value +
        "<br> Phone No: " +
        document.getElementById("phone").value,
    }).then((message) => alert(message));
  }
