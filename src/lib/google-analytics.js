export default (...args) => {
  if (typeof window.ga === 'function') {
    window.ga(...args);
  }
};
