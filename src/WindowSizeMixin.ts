// useWindowSizeMixin.js
import { ref, onMounted, onUnmounted } from 'vue';

export default {
    data() {
        return {
            windowWidth: window.innerWidth,
            windowHeight: window.innerHeight,
        };
    },
    methods: {
        updateWindowSize() {
            this.windowWidth = window.innerWidth;
            this.windowHeight = window.innerHeight;
        },
    },
    mounted() {
        this.updateWindowSize();
        window.addEventListener('resize', this.updateWindowSize);
    },
    unmounted() { window.removeEventListener('resize', this.updateWindowSize); },
};
