<template>
    <div class="cutout h-7 px-2 flex items-center text-xs">
        <img v-if="!mute" @click="toggle" src="@/assets/menu-icons/sound.png" alt="sound">
        <img v-if="mute" @click="toggle" src="@/assets/menu-icons/mute.png" alt="sound">
        {{ hour + ':' + minute + ':' + second }}
    </div>
</template>

<script>
    export default {
        name: 'Clock',
        data() {
            return {
                hour: 0,
                minute: 0,
                second: 0,
                mute: false,
            }
        },
        mounted() {
            this.getTime();
            this.timer = setInterval(this.getTime, 1000);
        },
        methods: {
            getTime() {
                let now = new Date()
                this.hour = this.format(now.getHours())
                this.minute = this.format(now.getMinutes())
                this.second = this.format(now.getSeconds())
            },
            format(number) {
                number = number.toString();
                if(number.length < 2) return '0' + number
                return number
            },
            toggle() {
                this.mute = !this.mute
            }
        }
    }
</script>

<style scoped>
    img {
        height: 1.25rem;
    }
    img:hover {
        cursor: pointer;
    }
</style>
