<template>
    <div class="window w-full fixed bottom-0 h-10 px-1 flex items-center justify-between">
        <StartButton v-on:click="this.$emit('toggle-menu')"/>
        <Clock/>
    </div>
</template>

<script>
    import StartButton from './StartButton';
    import Clock from './Clock';

    export default {
        name: 'Taskbar',
        components: {
            StartButton,
            Clock,
        },
        emits: ['toggle-menu'],
    }
</script>