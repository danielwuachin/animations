export const floatingPlaceholder = {
  id: 1,
  name: "Floating placeholder",
  path: "floating-placeholder",
  image: "/html-css-js/floating-placeholder.png",
  description: "Floating placeholder in a form",
  component: false,
  html: `<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Animated Registration Form</title>
    <link rel="stylesheet" href="style.css">
  </head>
  <body>
    <form action="">
      <h2>New Account</h2>
      <div class="inputBox">
        <input type="text" required>
        <label>Username</label>
      </div>
      <div class="inputBox">
        <input type="text" required>
        <label>Email</label>
      </div>
      <div class="inputBox">
        <input type="password" required>
        <label>Create &nbsp; password</label>
      </div>
      <div class="inputBox">
        <input type="password" required>
        <label>Confirm &nbsp; password</label>
      </div>
      <div class="inputBox">
        <input type="submit" value="Create">
      </div>
      <p class="forget">Already have an account? <a href="#">Login</a></p>
    </form>
  </body>
  </html>`,
  css: `@import url("https://fonts.googleapis.com/css?family=Poppins:200,300,400,500,600,700,800,900&display=swap");

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Poppins", sans-serif;
  }
  
  :root {
    --clr: #0ab3ff;
    --clr-dark: #1c2630;
  }
  
  body {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--clr-dark);
  }
  
  form {
    background: #29313c;
    padding: 60px 80px 60px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    text-align: center;
  }
  
  form h2 {
    color: #fff;
    font-weight: 500;
    text-transform: uppercase;
    font-size: 1.25em;
    letter-spacing: 0.1em;
    margin-bottom: 50px;
  }
  
  .inputBox {
    position: relative;
    width: 300px;
    margin-bottom: 40px;
  }
  
  .inputBox input {
    position: relative;
    width: 100%;
    padding: 10px 0;
    background: transparent;
    border: none;
    border-bottom: 2px solid #999;
    outline: none;
    color: #fff;
    font-size: 1em;
    text-transform: uppercase;
    letter-spacing: 0.15em;
  }
  
  .inputBox label {
    position: absolute;
    left: 0;
    padding: 10px 0;
    pointer-events: none;
    color: #999;
    text-transform: uppercase;
  }
  
  .inputBox label span {
    position: relative;
    display: inline-flex;
    letter-spacing: 0.05em;
    transition: 0.2s ease-in-out;
  }
  
  /* seleccionamos los hermanos del input focus, que son los span que agreagmos con JS y los cuales cada letra tiene un delay para hacer la animacion en cascada por letra */
  .inputBox input:focus ~ label span,
  .inputBox input:valid ~ label span {
    color: var(--clr);
    letter-spacing: 0.15em;
    transform: translateY(-25px);
    
  }
  
  /* esto coloca la linea azul al estar focus o valid en el input */
  .inputBox input:focus,
  .inputBox input:valid {
    border-bottom: 2px solid var(--clr);
  }
  
  .inputBox input[type="submit"] {
    background: var(--clr);
    border: none;
    padding: 15px;
    border-radius: 50px;
    color: var(--clr-dark);
    font-weight: 600;
    font-size: 1.15em;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    cursor: pointer;
    transition: 0.5s;
  }
  
  .inputBox input[type="submit"]:hover {
    letter-spacing: 0.35em;
  }
  
  form p {
    color: #fff;
    text-transform: uppercase;
  }
  
  form p a {
    color: var(--clr);
    font-weight: 500;
    text-decoration: none;
  }`,
  js: 'let label = document.querySelectorAll(\'label\');\n\n' +
  '// hacemos un span por cada letra y agregamos un delay a cada letra por cada index, asi se van subiendo una por una\n' +
  'label.forEach((item) => {\n' +
  '  item.innerHTML = item.innerText\n' +
  '    .split(\'\')\n' +
  '    .map((letter, i) => `<span style="transition-delay:${i * 50}ms">${letter}</span>`)\n' +
  '    .join(\'\');\n' +
  '});'
,
};
