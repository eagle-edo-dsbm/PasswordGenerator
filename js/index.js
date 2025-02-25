const result = document.querySelector('.newPassword');
const passwordGenerator = document.querySelector('.passwordGenerator');
const letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-_";

console.log(letters[Math.floor(Math.random()*64)]);

passwordGenerator.addEventListener('click', function(){
    let password = '';
    for (let i = 0; i < 22; i++) {
        const randomLetter = letters[Math.floor(Math.random()*64)];
        password += randomLetter;
        
    }
    result.value = password;
})