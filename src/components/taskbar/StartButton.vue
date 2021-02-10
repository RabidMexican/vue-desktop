<template>
    <button class="window px-2 flex items-center justify-between font-bold">
        <img src="@/assets/windows-logo.png" class="h-5 inline pr-1"/>
        {{ text }}
    </button>
</template>

<script>
    export default {
        name: 'StartButton',
        data() {
            return {
                text: 'Start'
            }
        }
    }
</script>