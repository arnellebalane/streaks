<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style>
:root {
  --primary-color: #2d9cdb;
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

html {
  font-size: 62.5%;
}

body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, Helvetica, Arial, sans-serif,
    'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
  font-size: 1.6rem;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #555;
  background-color: #f5f5f5;
}

a,
input,
button {
  font: inherit;
  color: inherit;
}
</style>
