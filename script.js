function generate() {
    // alert("The projects is 80% complete just write the main function in the script.js")
    // Its the concept to write something in an input 
    // pwd.value = "The Password"
    let pwd = document.getElementById('text')

    var chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*(){}[];:_-<>"
    let copytext = document.querySelector('.copied-text')
    var passwordlength = 13;
    var password = ""
    for (let i = 0; i < passwordlength; i++) {
        var randomNumber = Math.floor(Math.random() * chars.length);
        password += chars.substring(randomNumber, randomNumber + 1)

    }
    pwd.value = password
}
document.querySelector('.far').addEventListener("click", copytext)
function copytext(params) {
    /* Get the text field */
    var copyText = document.getElementById("text");

    /* Select the text field */
    copyText.select();
    copyText.setSelectionRange(0, 99999); /* For mobile devices */

    /* Copy the text inside the text field */
    let pwd = document.getElementById('text')
    // var passwordlength = 13;
    // var password = ""
    // var chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*(){}[];:_-<>"
    // for (let i = 0; i < passwordlength; i++) {
    //     var randomNumber = Math.floor(Math.random() * chars.length);
    //     password += chars.substring(randomNumber, randomNumber + 1)

    // }
    if (pwd.value == "") {
        
    } else {
        pwd.value = copyText.value
    
        navigator.clipboard.writeText(copyText.value);
        
        /* Alert/ display the copied text */
        let copiedtext = document.querySelector('.copied-text')
        copiedtext.style.display = "block"
        let ctext = document.querySelector('.copy-text')
        ctext.innerHTML = "New Password Copied: " + copyText.value
        setInterval(() => {
            let copytext = document.querySelector('.copied-text')
            copytext.style.display = "none"
        }, 3000);
    }



}
