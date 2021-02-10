<template>
    <div class="window w-full fixed bottom-0 h-10 flex items-center">
        <WinButton text="Start" icon="/assets/windows-logo.png"/>
    </div>
</template>

<script>
    import WinButton from './WinButton';

    export default {
        name: 'Taskbar',
        components: {
            WinButton
        }
    }
</script>