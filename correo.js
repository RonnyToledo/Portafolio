const btn = document.getElementById("enviar-whatsapp");

document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault();

  const serviceID = "default_service";
  const templateID = "template_hgv6gkb";

  emailjs.sendForm(serviceID, templateID, this).then(
    () => {
      alert("Correo enviado");
    },
    (err) => {
      alert(JSON.stringify(err));
    }
  );
});
