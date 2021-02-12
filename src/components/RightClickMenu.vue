<template>
    <menu class="window w-48">
        <ul>
            <li v-for="item in items.top" v-bind:key="item">
                {{ item }}
            </li>
            <div class="cutout h-0"/>
            <li v-for="item in items.middle" v-bind:key="item">
                {{ item }}
            </li>
            <div class="cutout h-0"/>
            <li v-for="item in items.bottom" v-bind:key="item">
                {{ item }}
            </li>
        </ul>
    </menu>
</template>

<script>
    export default {
        name: 'RightClickMenu',
        data() {
            return {
                items: {
                    top: [
                        'Active Desktop',
                        'Arrange Icons',
                        'Line Up Icons',
                    ],
                    middle: [
                        'New',
                        'Refresh',
                        'Paste',
                    ],
                    bottom: [
                        'Properties'
                    ],
                }
            }
        }
    }
</script>

<style scoped>
    li:hover {
        color: white;
        cursor: pointer;
        background-color: #000080;
    }
</style>