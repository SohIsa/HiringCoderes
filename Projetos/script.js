const form = document.getElementById('formulario')

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let nome = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    console.log(nome,email)
    let data = {
        nome,
        email,
    }
    let convertData = JSON.stringify(data);

    localStorage.setItem('lead', convertData)

    
})