function logout(button) {
    console.log("button clicked", button);
    button.innerText = "Logout";
}

function hide(button) {
    button.remove();
}