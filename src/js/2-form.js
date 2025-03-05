const form = document.querySelector(".feedback-form");
const emailInput = form.querySelector("input");
const messageInput = form.querySelector("textarea");
const localStorageKey = "feedback-form-state";

let formData = {
    email: "",
    message: "",
};


const savedData = localStorage.getItem(localStorageKey);
if (savedData) {
    try {
        const parsedData = JSON.parse(savedData);
        formData = { 
            email: parsedData.email || "", 
            message: parsedData.message || "" 
        };
        emailInput.value = formData.email;
        messageInput.value = formData.message;
    } catch (error) {
        console.error("Error parsing data:", error);
    }
}

form.addEventListener("input", (event) => {
    formData[event.target.name] = event.target.value;
    localStorage.setItem(localStorageKey, JSON.stringify(formData));
});
form.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!formData.email || !formData.message) { 
        alert("Fill all fields.");
        return;
    }

    console.log("Form Data Submitted:", formData);

    localStorage.removeItem(localStorageKey);
    form.reset();
    formData = { email: "", message: "" }; 
});
