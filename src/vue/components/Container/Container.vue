<template>
    <div v-bind="props">
      <slot/>
    </div>
</template>

<script>
export default {
  name: "Container",
  data() {
    const {...props} = this.$props;
    return {
      props
    };
  }
};
</script>
