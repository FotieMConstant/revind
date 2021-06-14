<template>
    <div class="flex justify-center items-center h-screen flex-col">
        <b
            >I feel sorry about that you can't even count how many times you clicked a
            button</b
        >
        <p>
            But anyway you clicked
            <code class="text-green-dark">{{ count }}</code> times
        </p>
        <button class="bg-green-dark p-2 rounded text-white" @click="countUp">
            Count
        </button>
        <ul>
            <li
                v-for="route in routes"
                :key="route.component.name"
                class="list-disc text-left"
            >
                <router-link :to="route.path">{{
                    route.component.name.replace("Comp", "").toLowerCase()
                }}</router-link>
            </li>
        </ul>
    </div>
</template>

<script>
import { routes } from "./routes";
export default {
    name: "Home",
    data() {
        return {
            routes,
            count: 0,
        };
    },
    methods: {
        countUp() {
            this.$data.count++;
        },
    },
};
</script>
