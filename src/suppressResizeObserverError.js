// src/suppressResizeObserverError.js

const observerErrMsg = 'ResizeObserver loop completed with undelivered notifications.';

const patchConsoleError = () => {
  const originalConsoleError = console.error;
  console.error = (...args) => {
    if (args[0] && typeof args[0] === 'string' && args[0].includes(observerErrMsg)) {
      return;
    }
    originalConsoleError(...args);
  };
};

const patchWindowError = () => {
  window.addEventListener('error', (e) => {
    if (e.message === observerErrMsg) {
      e.stopImmediatePropagation();
    }
  });
};

patchConsoleError();
patchWindowError();
