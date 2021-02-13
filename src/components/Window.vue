<template>
    <div
        ref="window"
        v-if="visible"  
        class="window absolute w-48 resize overflow-hidden min-w-md min-h-xs z-10"
        :style="'top:' + posY + 'rem; right: ' + posX + 'rem;'">
        <div class="bg-highlight pl-4 pr-1 py-1 font-bold text-sm flex items-center">
            <header class="text-gray-200" v-on:mousedown="dragMouseDown">{{ name }}</header>
            <button class="window h-6 w-6 font-bold ml-auto mr-1" @click="help">?</button>
            <button class="window h-6 w-6 font-bold" @click="visible=false">X</button>
        </div>
        <div class="h-full w-full cutout">
            <div class="h-full w-full bg-gray-200 p-2">
                <slot/>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Window',
        props: {
            name: {
                type: String,
                required: true,
            },
            posX: {
                type: Number,
                required: true,
            },
            posY: {
                type: Number,
                required: true,
            }
        },
        data: function () {
            return {
                visible: true,
                mouseX: undefined,
                mouseY: undefined,
            }
        },
        methods: {
            help: function() {
                alert("Look... I mean... like, honestly, what could you actually need help with?")
            },
            dragMouseDown: function (event) {
                event.preventDefault()
                // get the mouse cursor position at startup:
                this.mouseX = event.mouseX
                this.mouseY = event.mouseY
                document.onmousemove = this.elementDrag
                document.onmouseup = this.closeDragElement
            },
            elementDrag: function (event) {
                //calculate new potions
                let movementX = this.mouseX - event.clientX
                let movementY = this.mouseY - event.clientY
                // update mouse position
                this.mouseX = event.clientX
                this.mouseY = event.clientY
                // set the element's new position:
                this.$refs.window.style.top = (this.$refs.window.offsetTop - movementY) + 'px'
                this.$refs.window.style.left = (this.$refs.window.offsetLeft - movementX) + 'px'
            },
            closeDragElement () {
                document.onmouseup = null
                document.onmousemove = null
            }
        },
    }
</script>

<style scoped>
    header:hover {
        cursor: pointer;
    }
</style>