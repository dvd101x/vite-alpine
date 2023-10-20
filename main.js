import './style.css';
import javascriptLogo from './javascript.svg';
import viteLogo from '/vite.svg';
import Alpine from 'alpinejs';

window.Alpine = Alpine;
Alpine.data('app', () => ({
  viteLogo,
  javascriptLogo,
  count: 0,
})
)
Alpine.start();