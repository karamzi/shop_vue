<template>
    <div class="cntr">
        <label class="label-cbx">
            <input @click="onCheckBox" type="checkbox" class="invisible">
            <div class="checkbox">
                <svg width="20px" height="20px" viewBox="0 0 20 20">
                    <path d="M3,1 L17,1 L17,1 C18.1045695,1 19,1.8954305 19,3 L19,17 L19,17 C19,18.1045695 18.1045695,19 17,19 L3,19 L3,19 C1.8954305,19 1,18.1045695 1,17 L1,3 L1,3 C1,1.8954305 1.8954305,1 3,1 Z"></path>
                    <polyline points="4 11 8 15 16 6"></polyline>
                </svg>
            </div>
            <span>{{ name }}</span>
        </label>
    </div>
</template>

<script>
    export default {
        name: "CheckBox",
        props: {
            name: {
                default() {
                    return ''
                }
            },
            type: {
                default() {
                    return ""
                }
            }
        },
        methods: {
            onCheckBox() {
                this.$emit('checkBox', this.name, this.type)
            }
        }
    }
</script>

<style scoped>
    .cntr {
        margin-bottom: 10px;
    }

    .label-cbx {
        user-select: none;
        cursor: pointer;
        margin-bottom: 0;
    }
    .label-cbx input:checked + .checkbox {
        border-color: #20C2E0;
    }
    .label-cbx input:checked + .checkbox svg path {
        fill: #20C2E0;
    }
    .label-cbx input:checked + .checkbox svg polyline {
        stroke-dashoffset: 0;
    }
    .label-cbx:hover .checkbox svg path {
        stroke-dashoffset: 0;
    }
    .label-cbx .checkbox {
        position: relative;
        top: 2px;
        float: left;
        margin-right: 15px;
        width: 20px;
        height: 20px;
        border: 2px solid #C8CCD4;
        border-radius: 3px;
    }
    .label-cbx .checkbox svg {
        position: absolute;
        top: -2px;
        left: -2px;
    }
    .label-cbx .checkbox svg path {
        fill: none;
        stroke: #20C2E0;
        stroke-width: 2;
        stroke-linecap: round;
        stroke-linejoin: round;
        stroke-dasharray: 71px;
        stroke-dashoffset: 71px;
        transition: all 0.6s ease;
    }
    .label-cbx .checkbox svg polyline {
        fill: none;
        stroke: #FFF;
        stroke-width: 2;
        stroke-linecap: round;
        stroke-linejoin: round;
        stroke-dasharray: 18px;
        stroke-dashoffset: 18px;
        transition: all 0.3s ease;
    }
    .label-cbx > span {
        pointer-events: none;
        vertical-align: middle;
        display: block;
        margin-top: 3px;
    }

    .invisible {
        position: absolute;
        z-index: -1;
        width: 0;
        height: 0;
        opacity: 0;
    }
</style>