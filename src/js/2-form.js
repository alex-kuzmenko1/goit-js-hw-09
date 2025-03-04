const form = document.querySelector(".feedback-form");
const input = document.querySelector("input");
const textarea = document.querySelector("textarea");
const localStorageKey = "feedback-form-state";

const formData = {
    email: "",
    message: "",
}

const saveData = localStorage.getItem(localStorageKey);
if(saveData) {
try{
    const parsedData = JSON.parse(savedData);
            if (parsedData.email) emailInput.value = parsedData.email;
            if (parsedData.message) messageInput.value = parsedData.message;
            formData.email = parsedData.email 
            formData.message = parsedData.message  
        } catch (error) {
            console.error("Error parsing data:", error);
}
}
form.addEventListener("input", (event) => {
    formData[event.target.name] = event.target.value;
    localStorage.setItem(localStorageKey, JSON.stringify(formData));
});

form.addEventListener("submit", (event) =>{
    event.preventDefault();
    if(!formData.email || formData.message){
        alert("Fill all fields.");
        return
    }
console.log("Form Data Submitted", formData);
localStorage.removeItem(localStorageKey);
form.reset();
formData.email = "";
formData.message = "";

});