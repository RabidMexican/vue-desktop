<template>
    <ul ref="list" class="window absolute w-48 -right-48 top-0 text-black">
        <li v-for="item in list" v-bind:key="item" class="text-sm px-2 py-1 flex items-center">
            <img :src="getRandomIcon()" :alt="item.name" class="h-4 pr-2"/>
            <span>{{ item }}</span>
        </li>
    </ul>
</template>

<script>
    const icons = [
        require('@/assets/menu-icons/config.png'),
        require('@/assets/menu-icons/display.png'),
        require('@/assets/menu-icons/document.png'),
        require('@/assets/menu-icons/favorite.png'),
        require('@/assets/menu-icons/find.png'),
        require('@/assets/menu-icons/help.png'),
        require('@/assets/menu-icons/network.png'),
        require('@/assets/menu-icons/program.png'),
        require('@/assets/menu-icons/run.png'),
        require('@/assets/menu-icons/settings.png'),
    ]

    export default {
        name: 'MenuList',
        props: {
            list: {
                type: Array,
                required: false,
            }
        },
        methods: {
            getRandomIcon() {
                const random = Math.floor(Math.random() * icons.length)
                return icons[random]
            }
        }
    }
</script>

<style scoped>
    li:hover {
        color: white;
        cursor: pointer;
        background-color: #000080;
    }
</style>