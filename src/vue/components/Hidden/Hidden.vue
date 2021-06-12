<template>
    <div v-bind="props">
        <slot />
    </div>
</template>

<script>
export default {
    name: "Hidden",
    data() {
        const { ...props } = this.$props;
        return {
            props,
        };
    },
};
</script>
