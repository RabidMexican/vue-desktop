<template>
    <div v-if="open" class="menu window flex">
        <div class="relative w-10 bg-highlight p-2 font-bold text-white">
            <p class="whitespace-nowrap absolute -left-7 bottom-12 transform -rotate-90">
                {{ title }}
            </p>
        </div>
        <ul class="w-48">
            <MenuItem 
                v-for="item in items"
                v-bind:key="item.name"
                :text="item.text"
                :image="item.image"
                :list="item.list" />
        </ul>
    </div>
</template>

<script>
    import MenuItem from './MenuItem'
    
    export default {
        name: 'StartMenu',
        components: {
            MenuItem,
        },
        props: {
            open: {
                type: Boolean,
                required: true,
            }
        },
        data() {
            return {
                title: 'RabidOS 98',
                items: [
                    {
                        text: 'Programs',
                        image: require('@/assets/menu-icons/program.png'),
                        list: [
                            'Word',
                            'Minesweeper',
                            'Calculator',
                            'WinDir',
                            'Putty SSH',
                        ]
                    },
                     {
                        text: 'Favorites',
                        image: require('@/assets/menu-icons/favorite.png'),
                        list: [
                            'My Favorites',
                            'All Favorites',
                            'Public Favorites',
                            'Group Favorites',
                        ]
                    },
                     {
                        text: 'Documents',
                        image: require('@/assets/menu-icons/document.png'),
                        list: [
                            'School',
                            'Work',
                            'Misc',
                            'Downloads',
                            'Temp',
                        ]
                    },
                     {
                        text: 'Settings',
                        image: require('@/assets/menu-icons/settings.png'),
                        list: [
                            'Control Panel',
                            'Printers',
                            'Taskbar & Start Menu',
                            'Folder Options...',
                            'Active Desktop',
                            'Windows Update',
                        ]
                    },
                     {
                        text: 'Find',
                        image: require('@/assets/menu-icons/find.png')
                    },
                     {
                        text: 'Help',
                        image: require('@/assets/menu-icons/help.png')
                    },
                    {
                        text: 'Run',
                        image: require('@/assets/menu-icons/run.png')
                    },
                    {
                        text: 'Log Off',
                        image: require('@/assets/menu-icons/logout.png')
                    },
                    {
                        text: 'Shutdown',
                        image: require('@/assets/menu-icons/shutdown.png')
                    },
                     
                ]
            }
        }
    }
</script>

<style scoped>
    li {
        height: 48px;
        padding: 0.5rem;
        display: flex;
        align-items: center;
    }
    li:hover {
        background-color: #000080;
        cursor: pointer;
        color: white;
    }
</style>