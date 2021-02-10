<template>
    <button class="window px-4 flex items-center font-bold">
        <img v-if="icon" :src="icon" class="h-4 inline pr-1"/>
        {{ text }}
    </button>
</template>

<script>
    export default {
        name: 'StartButton',
        props: {
            text: {
                type: String,
                required: true,
            },
            icon: {
                type: String,
                required: false,
            }
        }
    }
</script>