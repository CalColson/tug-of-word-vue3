<template>
  <div id="site-header">
    <!-- left side items -->
    <h3 id="sh--name">tug of word</h3>
    <h6 class="sh--nav-item">play</h6>
    <h6 class="sh--nav-item">about</h6>
    <h6 class="sh--nav-item">contact</h6>

    <!-- right side items -->
    <div id="sh--light-dark-toggle">
      <FontAwesomeIcon class="sh--fa-icon" :icon="['far', 'sun']"></FontAwesomeIcon>
      <VueformToggle v-model="isDarkMode" @change="(e) => onDarkModeChanged(!!e)" />
      <FontAwesomeIcon class="sh--fa-icon" :icon="['far', 'moon']"></FontAwesomeIcon>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps<{
  isInitiallyDarkMode: boolean
}>()

const isDarkMode = ref(props.isInitiallyDarkMode)

function onDarkModeChanged(isDarkModeToggled : boolean) {
  // console.log(`isDarkModeToggled: ${isDarkModeToggled}`)
  if (isDarkModeToggled) {
    document.querySelector('body')?.classList.add('dark')
  } else {
    document.querySelector('body')?.classList.remove('dark')
  }
}
</script>

<style lang="scss" scoped>
#site-header {
  height: 15vh;

  padding: 0 1rem;

  color: $text-light;
  background-color: $primary;

  display: flex;
  align-items: center;
  gap: 3rem;

  #sh--light-dark-toggle {
    margin-left: auto;
  }

  .sh--fa-icon {
    margin-left: 0.5rem;
    margin-right: 0.5rem;
  }
}
</style>