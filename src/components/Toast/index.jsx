import VanillaToasts from 'vanillatoasts';

import './toast.css';

const Toast = (text, type) => {
  VanillaToasts.create({
    text,
    type,
    timeout: 2000,
  });
};

export default Toast;
