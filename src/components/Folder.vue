<template>
    <div class="w-24 p-2 text-center">
        <img src="/assets/folder.png" :alt="name" class="folder w-12 m-auto">
        <p class="text-center text-gray-200">
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
                require: true,
            }
        }
    }
</script>

<style scoped>
    .folder:hover {
        cursor: pointer;
    }
</style>