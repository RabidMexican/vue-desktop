<template>
    <div class="h-screen bg-desktop">
        <StartMenu class="absolute bottom-10" :open="menuOpen"/>
        <Taskbar @toggle-menu="menuOpen = !menuOpen"/>
    </div>
</template>

<script>
    import StartMenu from './components/StartMenu'
    import Taskbar from './components/Taskbar';

    export default {
        name: 'Desktop',
        components: {
            StartMenu,
            Taskbar,
        },
        data() {
          return {
            menuOpen: false,
          }
        }
    }
</script>
