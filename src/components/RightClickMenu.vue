<template>
    <div v-show="show" class="window w-48 text-sm absolute" v-bind:style="{ top:y+'px', left:x+'px' }">
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
    </div>
</template>

<script>
    export default {
        name: 'RightClickMenu',
        props: {
            show: {
                type: Boolean,
                required: true,
            },
            x: {
                type: Number,
                required: true,
            },
            y: {
                type: Number,
                required: true,
            }
        },
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
        },
    }
</script>

<style scoped>
    li {
        padding: 4px 4px;
    }
    li:hover {
        color: white;
        cursor: pointer;
        background-color: #000080;
    }
</style>