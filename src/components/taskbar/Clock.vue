<template>
    <div class="cutout px-1">
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
            }
        },
        mounted() {
            this.getTime();
            this.timer = setInterval(this.getTime, 1000);
        },
        methods: {
            getTime() {
                let now = new Date();
                this.hour = this.format(now.getHours());
                this.minute = this.format(now.getMinutes());
                this.second = this.format(now.getSeconds());
            },
            format(number) {
                number = number.toString();
                if(number.length < 2) return '0' + number;
                return number;
            }
        }
    }
</script>
