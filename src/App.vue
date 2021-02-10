<template>
    <div class="h-screen bg-desktop">
        <Window name="A Window." class="top-12 right-12">
            <h3>A Window</h3>
            <p>This is a window</p>
        </Window>
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
    import Window from './components/Window'

    export default {
        name: 'Desktop',
        components: {
            StartMenu,
            Taskbar,
            Folder,
            Window,
        },
        data() {
            return {
                menuOpen: false,
            }
        }
    }
</script>
