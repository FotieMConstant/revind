<template>
    <div v-bind="props">
        <slot />
    </div>
</template>

<script>
export default {
    name: "Button",
    data() {
        const { ...props } = this.$props;
        return {
            props,
        };
    },
};
</script>
