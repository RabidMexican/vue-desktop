<template>
    <div class="h-screen bg-desktop">
        <Folder name="Documents"/>
        <Folder name="Ironing"/>
        <Folder name="Photos"/>
        <StartMenu class="absolute bottom-10" :open="menuOpen"/>
        <Taskbar @toggle-menu="menuOpen = !menuOpen"/>
    </div>
</template>

<script>
    import StartMenu from './components/taskbar/StartMenu'
    import Taskbar from './components/taskbar/Taskbar';
    import Folder from './components/Folder'

    export default {
        name: 'Desktop',
        components: {
            StartMenu,
            Taskbar,
            Folder,
        },
        data() {
            return {
                menuOpen: false,
            }
        }
    }
</script>
