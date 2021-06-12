<template>
    <div v-bind="props">
        <slot />
    </div>
</template>

<script>
export default {
    name: "ButtonGroup",
    data() {
        const { ...props } = this.$props;
        return {
            props,
        };
    },
};
</script>
