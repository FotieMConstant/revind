<template>
    <div class="flex justify-center items-center h-screen flex-col">
        <b
            >I feel sorry about that you can't even count how many times you clicked a
            button</b
        >
        <p>
            But anyway you clicked
            <code class="text-green-500">{{ state.count }}</code> times
        </p>
        <button class="bg-green-500 p-2 rounded text-white" @click="state.count++">
            Count
        </button>
    </div>
</template>

<script setup>
import { defineProps, reactive } from "vue";

defineProps({
    msg: String,
});

const state = reactive({ count: 0 });
</script>
