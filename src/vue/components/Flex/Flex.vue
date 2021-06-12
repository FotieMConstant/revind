<template>
    <div v-bind="props">
        <slot />
    </div>
</template>

<script>
export default {
    name: "Flex",
    data() {
        const { ...props } = this.$props;
        return {
            props,
        };
    },
};
</script>
