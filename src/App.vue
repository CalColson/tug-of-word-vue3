<template>
  <header id="app-header">
    <nav>
      <SiteHeader :is-initially-dark-mode="false" />
    </nav>
  </header>
  <main id="app-main">
    <RouterView />
  </main>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import SiteHeader from './components/SiteHeader.vue'
</script>

<!-- vueform toggle styles -->
<style src="@vueform/toggle/themes/default.css"></style>
<style lang="scss">
</style>

<!-- app styles -->
<style lang="scss">
html {
  --toggle-bg-on: #{$accent};
  --toggle-border-on: #{$accent};
}
// fonts

// google fonts
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap");

// local downloads
@font-face {
  font-family: "Noto Sans";
  src: local("Noto Sans"), url("./assets/fonts/noto-sans/NotoSans-Light.ttf");
  font-weight: 300;
  font-style: normal;
}
@font-face {
  font-family: "Noto Sans";
  src: local("Noto Sans"), url("./assets/fonts/noto-sans/NotoSans-Regular.ttf");
  font-weight: 400;
  font-style: normal;
}
@font-face {
  font-family: "Noto Sans";
  src: local("Noto Sans"), url("./assets/fonts/noto-sans/NotoSans-SemiBold.ttf");
  font-weight: 600;
  font-style: normal;
}

*,
*::before,
*::after {
  margin: 0;
  padding: 0;

  box-sizing: border-box;
}

::-webkit-scrollbar {
  width: 1rem;
}
::-webkit-scrollbar-track {
  background: $primary-dark;
}
::-webkit-scrollbar-thumb {
  background: $primary-light;
}

#app {
  min-height: 100vh;

  color: $text;
  background-color: $bg;

  font-family: 'Noto Sans', sans-serif;

  &.dark {
    color: $text-light;
    background-color: $bg-dark;
  }
}
#app-header {
  height: 15vh;

  nav {
    height: 100%;
  }
}
#app-main {
  min-height: 85vh;
}
</style>
