<template>
    <div class="container" :style="styleContainer()">
        <div v-for="(tile, i) in tiles" :key="tile.id" :data-id="tile.id" class="tile rounded-sm"
            :style="styleTile(tile)"></div>
    </div>
</template>

<style scoped>
.container {
    position: relative;
    background-color: black;
}

.tile {
    position: absolute;
    background-repeat: no-repeat;
    transition: all 250ms ease-in-out;
    transition-timing-function: cubic-bezier(1, -0.6, 0.61, 1.37);
}
</style>

<script setup lang="ts">
import { onMounted, onUnmounted, ref, type CSSProperties } from 'vue';

/* 
 * the grid image, this shows an image as a grid of tiles
 *
 * the following props are available:
 * 
 * imageUrl: the url of the image IMAGE SHOULD BE SQUARE or ALMOST SQUARE (width = height)!!!!!!
 * rows: the number of rows, default 10
 * columns: the number of columns, default 10
 * gap: the gap between the tiles, default 4
 * width: in pixels, default 640
 * height: in pixels, default 640
 * 
 * the tiles are shuffled or otherwise animated
 * every 2 seconds
 * 
 * to adjust the animation change the value of the transition-timing-function
 * and the transition duration in the style of the tile
 * 
 */ 
const { imageUrl, rows, columns, width, height, gap } =
    withDefaults(
        defineProps<{ 
            imageUrl: string, 
            rows?: number, 
            columns?: number,
            width?: number,
            height?: number,
            gap?: number }>(), {
        rows: 10,
        columns: 10,
        width: 480,
        height: 480,
        gap: 1,
    })

const mounted = ref(false)

type Tile = {
    id: number
    index: number // index in the image (image rect)
    order: number // order in which the tiles are displayed
}


const tilewidth = width / columns
const tileheight = height / rows

/* shuffle util func */
function shuffle<T>(array: T[]) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]
    }
}

/* make the tiles */
const tiles = ref(Array.from(Array(rows * columns).keys()).map(i => (
    {
        id: i + 1,
        index: i,
        order: i,
    } satisfies Tile)))

/* get the style for a tile, the order changes during the animation */
const styleTile = (tile: Tile) => {
    const sx = tile.order % columns
    const sy = Math.floor(tile.order / columns)
    const tx = tile.index % columns
    const ty = Math.floor(tile.index / columns)
    const m = mounted.value
    return {
        left: m ? (sx * (tilewidth + gap)) + 'px' : (width / 2 - tilewidth / 2) + 'px',
        top: m ? (sy * (tileheight + gap)) + 'px' : (height / 2 - tileheight / 2) + 'px',
        width: tilewidth + 'px',
        height: tileheight + 'px',
        backgroundPosition: `-${tx * tilewidth}px -${ty * tileheight}px`,
        backgroundSize: `${width}px ${height}px`,
        backgroundImage: "url(" + imageUrl + ")"
    } satisfies CSSProperties
}

/* get the style for the container */
const styleContainer = () => {
    return {
        width: (width + (columns - 1) * gap) + 'px',
        height: (height + (rows - 1) * gap) + 'px',
        gap: gap + 'px',
    } satisfies CSSProperties
}

const animationCounter = ref(0)
onMounted(() => {
    setTimeout(() => {
        mounted.value = true
    }, 100)
    const timer = setInterval(() => {
        const newTiles = [...tiles.value]
        const order = Array.from(Array(tiles.value.length).keys()).map(i => i)
        if (animationCounter.value % 2 != 0) {
            shuffle(order)
        }
        newTiles.forEach((tile, i) => {
            tile.order = order[i]
        })
        tiles.value = newTiles
        animationCounter.value++
    }, 2_000)
    onUnmounted(() => {
        clearInterval(timer)
        mounted.value = false
    })
})

</script>
