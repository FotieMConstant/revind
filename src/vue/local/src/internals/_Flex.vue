<template>
    <div>
        <h1 className="font-bold text-3xl text-center">The Flex component</h1>
        <br />
        <br />
        <hr />
        <Flex justify-content="center">
            <h1>Should be center</h1>
        </Flex>
        <br />
        <hr />
        <Flex direction="column" align-items="center">
            <span>Should be</span>
            <span>Vertically aligned & centered</span>
        </Flex>
        <Flex
            wrap="wrap"
            justify-content="start"
            align-items="center"
            align-content="center"
        >
            <div
                v-for="(el, i) in mock"
                :key="i"
                className="h-20 w-1/4 border border-black border-solid rounded-md"
            >
                Should wrap, justify at start, align in center & content position center |
                Index {{ i }}
            </div>
        </Flex>
    </div>
</template>

<script>
import Flex from "../../../components/Flex/Flex.vue";

export default {
    name: "FlexComp",
    components: {
        Flex,
    },
    data() {
        return {
            mock: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        };
    },
};
</script>
