<template>
  <Desktop/>
  <Taskbar/>
</template>

<script>
  import Desktop from './components/Desktop.vue'
  import Taskbar from './components/Taskbar.vue'

  export default {
    name: 'App',
    components: {
      Desktop,
      Taskbar,
    }
  }
</script>
