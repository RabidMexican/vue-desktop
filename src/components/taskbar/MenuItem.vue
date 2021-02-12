<template>
    <li @mouseover="showList" @mouseleave="hideList">
        <div class="flex items-center">
            <img :src="image" class="h-10 pr-2">
            <span class="pl-2">{{ text }}</span>
        </div>
        <span  v-if="list" class="text-lg">🢒</span>
        <MenuList v-show="list && listOpen" :list="list"/>
    </li>
</template>

<script>
    import MenuList from './MenuList'

    export default {
        name: 'MenuItem',
        components: {
            MenuList,
        },
        props: {
            text: {
                type: String,
                required: true,
            },
            image: {
                required: true,
            },
            list: {
                type: Array,
                required: false,
            }
        },
        data() {
            return {
                listOpen: false,
            }
        },
        methods: {
            showList() {
                this.listOpen = true
            },
            hideList() {
                this.listOpen = false
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
        justify-content: space-between;
    }
    li:hover {
        background-color: #000080;
        cursor: pointer;
        color: white;
    }
</style>