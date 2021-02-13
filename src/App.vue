<template>
    <div 
        class="h-screen bg-desktop" 
        @mouseup.right="openRightClickMenu" 
        @click="[closeMenu(), closeRightClickMenu()]">
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
        <div class="flex flex-wrap">
            <Folder 
                v-for="folder in folders" 
                v-bind:key="folder.name" 
                :name="folder.name"
                @open-window="openWindow" :light="true"
                class=""/>
        </div>
        <StartMenu 
            class="absolute bottom-10" 
            :open="menuOpen"/>
        <RightClickMenu
            @sort-desktop="sortFolders()"
            :show="rightClickOpen" 
            :x="rightClickX" 
            :y="rightClickY"/>
    </div>
    <Taskbar @toggle-menu="toggleMenu()"/>
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
            RightClickMenu,
            StartMenu,
            Taskbar,
            Window,
        },
        data() {
            return {
                currentId: 3,
                windowPos: 1,
                menuOpen: false,
                rightClickOpen: false,
                rightClickX: 0,
                rightClickY: 0,
                windows: [],
                folders: [
                    { name: 'Documents' },
                    { name: 'Photos' },
                    { name: 'Work' },
                    { name: 'Backup' },
                    { name: 'Email' },
                    { name: 'School' },
                    { name: 'Files' }
                ],
                folderOrder: true,
            }
        },
        methods: {
            closeAllMenus() {
                this.closeMenu()
                this.closeRightClickMenu()
            },
            toggleMenu() {
                this.menuOpen = !this.menuOpen
            },
            closeMenu() {
                console.log("closing menu")
                this.menuOpen = false
            },
            openWindow(data) {
                let window = {
                    id: this.currentId,
                    pos: this.windowPos,
                    name: data.name,
                    folders: data.folders
                }
                this.windows.push(window)
                this.currentId++
                this.windowPos += 0.5
            },
            openRightClickMenu(event) {
                this.rightClickX = event.clientX
                this.rightClickY = event.clientY
                this.rightClickOpen = true
            },
            closeRightClickMenu() {
                this.rightClickOpen = false
            },
            sortFolders() {
                if(this.folderOrder) this.folders.sort(this.compareAsc)
                else this.folders.sort(this.compareDesc)
                this.folderOrder = !this.folderOrder
            },
            compareAsc( a, b ) {
                if ( a.name < b.name ) return -1
                if ( a.name > b.name ) return 1
                return 0
            },
            compareDesc( a, b ) {
                if ( a.name > b.name ) return -1
                if ( a.name < b.name ) return 1
                return 0
            }
        },
        mounted() {
            // disable normal right click
            window.addEventListener('contextmenu', function (e) {
                e.preventDefault()
            }, false);
        }
    }
</script>
