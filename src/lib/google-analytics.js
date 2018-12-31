export default (...args) => {
  if (typeof window.gtag === 'function') {
    window.gtag(...args);
  }
};
