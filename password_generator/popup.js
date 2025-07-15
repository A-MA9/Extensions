function generatePassword(length) {
    const charset = "abcdefghijklmnopqrstuvwxyz";
    const specialChars = "!@#$%^&*()_+";
    const caps = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "0123456789";
    let password = "";
    const n_specialChars = 2;
    
    const n_caps = 2;
    const n_numbers = 2;
    const n_charset = length - n_specialChars - n_caps - n_numbers;

    for (let i = 0; i < n_caps; i++) {
        const randomIndex = Math.floor(Math.random() * caps.length);
        password += caps[randomIndex];
    }
    for (let i = 0; i < n_specialChars; i++) {
        const randomIndex = Math.floor(Math.random() * specialChars.length);
        password += specialChars[randomIndex];
    }
    for (let i = 0; i < n_numbers; i++) {
        const randomIndex = Math.floor(Math.random() * numbers.length);
        password += numbers[randomIndex];
    }
    for (let i = 0; i < n_charset; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
    }
    return password;
}

const lengthValue = document.getElementById("lengthValue");
const lengthSlider = document.getElementById("length");
const passwordField = document.getElementById("password");
const toast = document.getElementById("toast");

lengthSlider.addEventListener("input",() => {
    lengthValue.textContent = lengthSlider.value;
});

document.getElementById("generate").addEventListener("click",() =>{
    const pass = generatePassword(Number(lengthSlider.value));
    passwordField.value = pass;
});

document.getElementById("copy").addEventListener("click",()=>{
    passwordField.select();
    document.execCommand("copy");
    

    toast.classList.add("show");
    setTimeout(() => {
        toast.classList.remove("show");
    }, 3000);
});