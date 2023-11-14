import './style.css';
import alpineLogo from '/alpine_long.svg';
import viteLogo from '/vite.svg';
import Alpine from 'alpinejs';

window.Alpine = Alpine;
Alpine.data('app', () => ({
  viteLogo,
  alpineLogo,
  count: 0,
})
)
Alpine.start();
