<template>
    <div v-if="open" class="menu window flex">
        <div class="relative w-10 bg-highlight p-2 font-bold text-white">
            <p class="whitespace-nowrap absolute -left-7 bottom-12 transform -rotate-90">
                {{ title }}
            </p>
        </div>
        <div class="menu-items w-48 py-4">
            <div>Programs</div>
            <div>Favourites</div>
            <div>Documents</div>
            <div>Settings</div>
            <div>Find</div>
            <div>Help</div>
            <div>Run</div>
            <div>Log Off</div>
            <div>Shut Down</div>
        </div>
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
                title: 'RabidOS \'98'
            }
        }
    }
</script>

<style scoped>
    .menu-items div {
        height:48px;
        padding: 0 12px;
    }
    .menu-items div:hover {
        background-color: #000080;
        cursor: pointer;
        color: white;
    }
</style>