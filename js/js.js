const cards = document.getElementById('cards')
const templateCard = document.getElementById('template-card').content
const fragment = document.createDocumentFragment()



document.addEventListener('DOMContentLoaded', e => {

    fetchData()
    const links = document.querySelectorAll(".sidebar-link");
    const popup = document.getElementById("popup");
    const popupBody = document.getElementById("popup-body");
    const closeBtn = document.querySelector(".close-btn");

    // Mostrar popup al hacer clic en un enlace
    links.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const popupContent = link.getAttribute("data-popup");
    
            if (popupContent === "login") {
                popupBody.innerHTML = `
                    <h2>Login</h2>
                    <form id="login-form">
                        <input type="text" id="username" placeholder="Usuario" required>
                        <input type="password" id="password" placeholder="Contraseña" required>
                        <button type="submit" id="login-button">Iniciar Sesión</button>
                        <button type="button" id="register-button">Registrarse</button>
                    </form>
                `;
    
                const loginForm = document.getElementById("login-form");
                const registerButton = document.getElementById("register-button");
    
                // Manejo del formulario de login
                loginForm.addEventListener("submit", handleLogin);
    
                // Redirigir al formulario de registro
                registerButton.addEventListener("click", () => {
                    popupBody.innerHTML = `
                        <h2>Registro</h2>
                        <form id="register-form">
                            <input type="text" id="name" placeholder="Nombre" required>
                            <input type="email" id="email" placeholder="Correo electrónico" required>
                            <input type="password" id="password" placeholder="Contraseña" required>
                            <button type="submit">Registrarse</button>
                        </form>
                    `;
    
                    // Manejo del formulario de registro
                    const registerForm = document.getElementById("register-form");
                    registerForm.addEventListener("submit", handleRegister);
                });
            } else {
                popupBody.textContent = `Has seleccionado: ${popupContent}`;
            }
    
            popup.style.display = "flex";
        });
    });
    
    // Función para manejar el login
    function handleLogin(event) {
        event.preventDefault();
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;
        console.log("Iniciando sesión con:", username, password);
        // Aquí va la lógica para validar el login
    }
    
    // Función para manejar el registro
    function handleRegister(event) {
        event.preventDefault();
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        console.log("Registrando usuario:", name, email, password);
        // Aquí va la lógica para registrar al usuario
    }
    

    // Cerrar popup
    closeBtn.addEventListener("click", () => {
        popup.style.display = "none";
    });

    // Cerrar popup al hacer clic fuera de él
    popup.addEventListener("click", (e) => {
        if (e.target === popup) {
            popup.style.display = "none";
        }
    });

    // Función para manejar el login
    function handleLogin(e) {
        e.preventDefault();
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        // Simulación de autenticación
        if (username === "admin" && password === "1234") {
            alert("¡Inicio de sesión exitoso!");
            popup.style.display = "none";
        } else {
            alert("Credenciales incorrectas. Inténtalo de nuevo.");
        }
    }
    console.log(e)
});

// Traer productos
const fetchData = async () => {
    const res = await fetch('../api.json');
    const data = await res.json();
    //console.log(data)
    pintarCards(data)
}
// Pintar productos
const pintarCards = data => {
    data.forEach(item => {
        templateCard.querySelector('h2').textContent = item.nombre
        templateCard.querySelector('p1 strong').textContent = item.trabajo
        templateCard.querySelector('p2 strong').textContent = item.precio
        templateCard.querySelector('p3').textContent = item.numero
        templateCard.querySelector('p4 strong').textContent = item.valoracion
        templateCard.querySelector('img').setAttribute("src", item.descripcion)
        const clone = templateCard.cloneNode(true)
        fragment.appendChild(clone)
    })
    cards.appendChild(fragment)
}

