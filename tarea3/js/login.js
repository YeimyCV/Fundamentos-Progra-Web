document.getElementById("btn-login").addEventListener("click",login);

function validation_alert(ptext) {
    Swal.fire({
        title: "Verificar la entrada de datos",
        text: ptext,
        confirmButtonText: "Intentar de nuevo",
        confirmButtonColor: "#0063be",
        html: '<iframe src="https://lottie.host/embed/62430c76-a7f2-433d-899a-5afef91b0ba1/IVTY7W30Ve.json"></iframe><br><p>' + ptext + "</p>",
    });
}


function login () {
    let user_input = document.getElementById("in-txt-user").value;
    let pass_input = document.getElementById("in-txt-pass").value;
    let username = "cenfo";
    let password = "123";
    let input = [user_input,pass_input];
    let input_id = ["in-txt-user", "in-txt-pass"];
    let error_count = 0;
    let text = "";
    for (let i = 0; i < input.length; i++) {
        document.getElementById(input_id[i]).classList.remove("error");
        if (input[i] == "") {
            text = "Los espacios requeridos NO pueden estar vacíos";
            validation_alert(text);
            document.getElementById(input_id[i]).classList.add("error");
            error_count++;
        }
    }

    if (error_count == 0) {
        if (user_input == username && pass_input == password) {
            Swal.fire ({
                title: "Tus credenciales son correctas",
                showConfirmButton: false,
                timer: 5000,
                html: '<iframe width="420" height="340" src="https://lottie.host/embed/cf2d7c0b-1809-424d-8421-fd1d0b74159b/Ed9jRpjvF6.json"></iframe><br><br><p>Espera un momento por favor</p>',

            }).then(() => {
                window.location.href = "https://www.smartfit.cr/","blank";
            }); 
        } else {
            text = "Usuario o contraseña incorrecta";
            validation_alert(text);
        }
    }
}
