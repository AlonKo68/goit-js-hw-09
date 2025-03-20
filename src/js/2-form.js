const form = document.querySelector('.feedback-form');

const formData = {
    email: "",
    message: "",
};

const LS_KEY = "feedback-form-state";

form.addEventListener('input', handlerInput);
form.addEventListener('submit', handlerSubmit);

function saveToStorage() {
    localStorage.setItem(LS_KEY, JSON.stringify(formData));
}

function handlerInput() {
    formData.email = form.email.value.trim();
    formData.message = form.message.value.trim();
    saveToStorage();
}

function handlerSubmit(evt) {
    evt.preventDefault()
    if (form.email.value === "" || form.message.value === "") {
        alert('Fill please all fields');
        return;
    }
    console.log(formData);
    form.reset();
    localStorage.removeItem(LS_KEY);
}

const getForm = localStorage.getItem(LS_KEY);
const parseItem = JSON.parse(getForm) ?? "";

form.email.value = parseItem.email ?? '';
form.message.value = parseItem.message ?? '';
formData.email = parseItem.email ?? '';
formData.message = parseItem.message ?? '';
