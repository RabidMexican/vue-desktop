<template>
    <div class="h-screen bg-desktop">
        <Window 
            v-for="window in windows" 
            v-bind:key="window.id" 
            :name="window.name" 
            :posX="window.pos"
            :posY="window.pos">
            <Folder
                @open-window="openWindow"
                v-for="folder in window.folders" 
                v-bind:key="folder.id"
                :name="folder.name"/>
        </Window>
        <Folder name="Documents" @open-window="openWindow" :light="true"/>
        <Folder name="Ironing" @open-window="openWindow" :light="true"/>
        <Folder name="Photos" @open-window="openWindow" :light="true"/>
        <StartMenu class="absolute bottom-10" :open="menuOpen"/>
        <Taskbar @toggle-menu="menuOpen = !menuOpen"/>
    </div>
</template>

<script>
    import Folder from './components/Folder'
    import RightClickMenu from './components/RightClickMenu'
    import StartMenu from './components/taskbar/StartMenu'
    import Taskbar from './components/taskbar/Taskbar'
    import Window from './components/Window'

    export default {
        name: 'Desktop',
        components: {
            Folder,
            StartMenu,
            Taskbar,
            RightClickMenu,
            Window,
        },
        data() {
            return {
                currentId: 3,
                windowPos: 1,
                menuOpen: false,
                windows: [],
            }
        },
        methods: {
            openWindow(data) {
                let window = {
                    id: this.currentId,
                    pos: this.windowPos,
                    name: data.name,
                    folders: data.folders
                }
                this.windows.push(window)
                this.update()
            },
            update() {
                this.currentId++
                this.windowPos += 0.5
            },
        }
    }
</script>
