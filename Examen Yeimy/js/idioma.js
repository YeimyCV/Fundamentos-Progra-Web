
//declaracion de constantes usando el metodo querySelector

//permite guardar el enlace el selecto <a> del html
const link = document.querySelectorAll('a');
const langEl = document.querySelector('.langWrap');
const menuHome = document.querySelector('.menuHome');
const menuUs = document.querySelector('.menuUs');
const menuLogin = document.querySelector('.menuLogin');
const menuClasses = document.querySelector('.menuClasses');
const menuMembership = document.querySelector('.menuMembership');
const menuGallery = document.querySelector('.menuGallery');
const menuContact = document.querySelector('.menuContact');
const description = document.querySelector('.description');
const titleOpinions = document.querySelector('.titleOpinions');
const titleNumbers = document.querySelector('.titleNumbers');
const experience = document.querySelector('.experience');
const indClasses = document.querySelector('.indClasses');
const customers = document.querySelector('.customers');
const employees = document.querySelector('.employees');



//recorrido del ciclo for-Each usando la funcion flecha
//link parece ser una colección de elementos HTML, obtenida mediante el uso de querySelectorAll.
/*El ciclo forEach se utiliza para aplicar en cada elemento en la colección .
Para cada elemento r, se agrega un event listener que espera un click (addEventListener('click', ...)).*/
/*dentro del addEeventListener, se obtiene el valor del atributo language del elemento actual mediante getAttribute('language') 
y se almacena en la constante attr.*/


link.forEach(r => {
    r.addEventListener('click', (event) => {
     console.log(event)
        const attr = r.getAttribute('language');
        menuHome.textContent = changeLanguage[attr].menuHome;
        menuUs.textContent = changeLanguage[attr].menuUs;
        menuLogin.textContent = changeLanguage[attr].menuLogin;
        menuClasses.textContent = changeLanguage[attr].menuClasses;
        menuMembership.textContent = changeLanguage[attr].menuMembership;
        menuGallery.textContent = changeLanguage[attr].menuGallery;
        menuContact.textContent = changeLanguage[attr].menuContact;
        description.textContent = changeLanguage[attr].description;
        titleOpinions.textContent = changeLanguage[attr].titleOpinions;
        titleNumbers.textContent = changeLanguage[attr].titleNumbers;
        experience.textContent = changeLanguage[attr].experience;
        indClasses.textContent = changeLanguage[attr].indClasses;
        customers.textContent = changeLanguage[attr].customers;
        employees.textContent = changeLanguage[attr].employees;
    });
});


//objeto de json que asigna los valores a cada clase en español usando el atributo "espanish"
let changeLanguage = {

    "espanish":
    {
        "menuHome": "Inicio",
        "menuUs": "Nosotros",
        "menuLogin": "Iniciar sesión",
        "menuClasses": "Clases",
        "menuMembership": "Membrecías",
        "menuGallery": "Galería",
        "menuContact": "Contacto",
        "description": "Conoce de primera mano lo que opinan las y los usuarios sobre nuestros servicios y las experiencias que han tenido con nosotros.",
        "titleOpinions": "Opiniones",
        "titleNumbers": "Nuestro trabajo en estadísticas.",
        "experience": "Años de Experiencia",
        "indClasses": "Clases individuales",
        "customers": "Clientes satisfechos",
        "employees": "Equipo de trabajo",
    },

  //objeto de json que asigna los valores a cada clase en ingles usando el atributo "english"
    "english":
    {
        "menuHome": "Home",
        "menuUs": "About Us",
        "menuLogin": "Log In",
        "menuClasses": "Classes",
        "menuMembership": "Memberships",
        "menuGallery": "Gallery",
        "menuContact": "Contact",
        "description": "Check what customers say about our services and their experiences with us.",
        "titleOpinions": "Opinions",
        "titleNumbers": "Our work in numbers.",
        "experience": "Years of experience",
        "indClasses": "Invididual Classes",
        "customers": "Happy customers",
        "employees": "Employees",
    }
}