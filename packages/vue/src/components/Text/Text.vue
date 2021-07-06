<template>
    <div v-bind="props">
        <slot />
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: "Text",
    data() {},
});
</script>
