<template>
    <div class="w-24 p-2 text-center" @click="selected = !selected">
        <img src="@/assets/folder.png" :alt="name" class="w-14 p-2 m-auto mb-1" v-bind:class="{ 'blue' : selected }">
        <p class="text-sm text-center px-1" v-bind:class="{ 'text-gray-200' : light, 'bg-highlight text-gray-200' : selected }">
            {{ name }}
        </p>
    </div>
</template>

<script>
    export default {
        name: 'Folder',
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
                selected: false
            }
        }
    }
</script>

<style scoped>
    img:hover {
        cursor: pointer;
    }
    .blue {
        filter: grayscale(100%) sepia(100%) hue-rotate(270deg) saturate(1);
    }
</style>