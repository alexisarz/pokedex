<template>
    <button :class="{'btn btn-danger': !disabled, 'btn btn-secondary': disabled}">
        <i v-if="icon" :class="icon"></i>
        {{ text }}
    </button>
</template>

<script>
export default{
    name: 'BtnCommon',
    props: {
        text: String,
        disabled: Boolean,
        icon: String

    }
}
</script>

<style scoped>
    button{
        border-radius: 20px;
    }
</style>