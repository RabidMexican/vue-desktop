<template>
    <div class="window w-full fixed bottom-0 h-10 px-1 flex items-center justify-between">
        <WinButton text="Start" icon="/assets/windows-logo.png"/>
        <Clock/>
    </div>
</template>

<script>
    import WinButton from './WinButton';
    import Clock from './Clock';

    export default {
        name: 'Taskbar',
        components: {
            WinButton,
            Clock,
        }
    }
</script>