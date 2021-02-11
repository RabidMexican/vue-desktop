<template>
    <div class="w-24 p-2 text-center" @dblclick="openWindow()" @click="selected = !selected">
        <img src="@/assets/folder.png" :alt="name" class="w-14 p-2 m-auto mb-1" v-bind:class="{ 'blue' : selected }">
        <p class="text-sm text-center px-1" v-bind:class="{ 'text-gray-200' : light, 'bg-highlight text-gray-200' : selected }">
            {{ name }}
        </p>
    </div>
</template>

<script>
    export default {
        name: 'Folder',
        emits: ['open-window'],
        props: {
            name: {
                type: String,
                required: true,
            },
            light: {
                type: Boolean,
                required: false,
            }
        },
        data() {
            return{
                selected: false,
                window: {
                    name: this.name,
                    folders: [],
                }
            }
        },
       
        methods: {
            openWindow() {
                this.$emit('open-window', this.window)
            },
            getRandomFolderName() {
                const names = ["Docs", "Temp", "Downloads", "Porn", "Cats", "Pics", "Web", "Secrets", "Keys", "School"]
                const random = Math.floor(Math.random() * names.length)
                return names[random]
            },
        },

        mounted() {
            const n = Math.floor(Math.random() * 3) + 1 
            for(let i = 0; i < n; i++) {
                let folder = {
                    id: i,
                    name: this.getRandomFolderName(),
                }
                this.window.folders.push(folder)
            }
        }
    }
</script>

<style scoped>
    img:hover {
        cursor: pointer;
    }
    .blue {
        filter: grayscale(100%) sepia(100%) hue-rotate(270deg) saturate(1)
    }
</style>