function sendEmail() {
    Email.send({
      Host: "https://gmail.com",
      Secure:'tls',
      Username: "divyanshutripathi7826@gmail.com",
      Password: "9695ddhh98",
      To: "divyanshutripathi2076@gmail.com",
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