import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');

// Функція, яка буде викликана при вводі у формі
const handleFormInput = () => {
  const formData = {
    email: form.elements.email.value,
    message: form.elements.message.value,
  };

  // Збереження у локальне сховище з використанням throttle
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
};

// Відстеження події input з використанням lodash.throttle
form.addEventListener('input', throttle(handleFormInput, 500));

// Заповнення полів форми при завантаженні сторінки
document.addEventListener('DOMContentLoaded', () => {
  const savedData = localStorage.getItem('feedback-form-state');

  if (savedData) {
    const { email, message } = JSON.parse(savedData);
    form.elements.email.value = email;
    form.elements.message.value = message;
  }
});

// Очищення сховища та виведення у консоль при сабміті форми
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const formData = {
    email: form.elements.email.value,
    message: form.elements.message.value,
  };

  // Очищення сховища
  localStorage.removeItem('feedback-form-state');

  // Очищення полів форми
  form.reset();

  // Виведення у консоль об'єкта з даними
  console.log(formData);
});
