<template>
    <div class="h-screen bg-desktop">
        <Window name="A Window." class="top-12 right-12">
            <Folder name="Downloads"/>
            <Folder name="tmp"/>
        </Window>
        <Folder name="Documents" :light="true"/>
        <Folder name="Ironing" :light="true"/>
        <Folder name="Photos" :light="true"/>
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
