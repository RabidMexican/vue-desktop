<template>
    <div class="w-24 p-2 text-center">
        <img src="@/assets/folder.png" :alt="name" class="w-12 m-auto">
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
                required: true,
            }
        }
    }
</script>

<style scoped>
    .img:hover {
        cursor: pointer;
    }
</style>