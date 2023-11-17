// Додайте імпорт бібліотеки та lodash.throttle
import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

// Ініціалізуємо плеєр
const vimeoPlayer = new Player(document.getElementById('vimeo-player'));

// Створіть функцію, яка зберігатиме час відтворення у локальному сховищі
const saveCurrentTime = time => {
  localStorage.setItem('videoplayer-current-time', time);
};

// Отримайте збережений час відтворення з локального сховища
const getSavedTime = () => {
  return localStorage.getItem('videoplayer-current-time') || 0;
};

// Створіть функцію, яка буде викликатися при оновленні часу відтворення
const handleTimeUpdate = throttle(data => {
  saveCurrentTime(data.seconds);
}, 1000);

// Встановіть обробник подій на відстеження події timeupdate
vimeoPlayer.on('timeupdate', handleTimeUpdate);

// Задайте збережений час відтворення при завантаженні сторінки
vimeoPlayer.setCurrentTime(getSavedTime()).then(() => {
  // Розпочніть відтворення після встановлення часу
  vimeoPlayer.play();
});
