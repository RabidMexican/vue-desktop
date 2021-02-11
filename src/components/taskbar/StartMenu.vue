<template>
    <div v-if="open" class="menu window flex">
        <div class="relative w-10 bg-highlight p-2 font-bold text-white">
            <p class="whitespace-nowrap absolute -left-7 bottom-12 transform -rotate-90">
                {{ title }}
            </p>
        </div>
        <ul class="w-48">
            <li>
                <img src="@/assets/menu-icons/program.png">
                <span class="pl-2">Programs</span>
            </li>
            <li>
                <img src="@/assets/menu-icons/favorite.png">
                <span class="pl-2">Favorites</span>
            </li>
            <li>
                <img src="@/assets/menu-icons/document.png">
                <span class="pl-2">Documents</span>
            </li>
            <li>
                <img src="@/assets/menu-icons/settings.png">
                <span class="pl-2">Settings</span>
            </li>
            <li>
                <img src="@/assets/menu-icons/find.png">
                <span class="pl-2">Find</span>
            </li>
            <li>
                <img src="@/assets/menu-icons/help.png">
                <span class="pl-2">Help</span>
            </li>
            <li>
                <img src="@/assets/menu-icons/run.png">
                <span class="pl-2">Run</span>
            </li>
            <li>
                <img src="@/assets/menu-icons/logout.png">
                <span class="pl-2">Log Off</span>
            </li>
            <li>
                <img src="@/assets/menu-icons/shutdown.png">
                <span class="pl-2">Shut Down</span>
            </li>
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
        display: flex;
        align-items: center;
    }
    li:hover {
        background-color: #000080;
        cursor: pointer;
        color: white;
    }
    img {
        height: 2rem;
    }
</style>