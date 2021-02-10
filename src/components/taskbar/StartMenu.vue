<template>
    <div v-if="open" class="menu window flex">
        <div class="relative w-10 bg-highlight p-2 font-bold text-white">
            <p class="whitespace-nowrap absolute -left-7 bottom-12 transform -rotate-90">
                {{ title }}
            </p>
        </div>
        <ul class="w-48">
            <li>Programs</li>
            <li>Favourites</li>
            <li>Documents</li>
            <li>Settings</li>
            <li>Find</li>
            <li>Help</li>
            <li>Run</li>
            <li>Log Off</li>
            <li>Shut Down</li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'StartMenu',
        props: {
            open: {
                type: Boolean,
                required: true,
            }
        },
        data() {
            return {
                title: 'RabidOS 98'
            }
        }
    }
</script>

<style scoped>
    li {
        height: 48px;
        padding: 0.5rem;
    }
    li:hover {
        background-color: #000080;
        cursor: pointer;
        color: white;
    }
</style>