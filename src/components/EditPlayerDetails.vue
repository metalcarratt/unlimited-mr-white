<template>
    <Modal v-if="showPlayerEdit">
        <h1>Edit player</h1>
        <fieldset>
            <label>Name</label>
            <input type="text" v-model="name" />
        </fieldset>
        <div class="imageList">
            <img
                v-for="(image, imageIter) in images"
                :key="imageIter"
                :src="image"
                :class="selectedImage === image ? 'selected' : ''"
                @click="selectedImage = image"
            />
        </div>
        <button @click="$emit('close', {name, selectedImage})">Accept</button>
    </Modal>
</template>

<script>
import Modal from './Modal.vue';
import Names from '@/unlimited/mrwhite/data/names.js';

export default {
    props: [ 'showPlayerEdit', 'selectedPlayer' ],
    components: { Modal },
    data() {
        return {
            name: '',
            selectedImage: ''
        }
    },
    watch: {
        selectedPlayer() {
            this.update();
        }
    },
    computed: {
        images() {
            return Names.getAllImages();
        }
    },
    mounted() {
        this.update();
    },
    methods: {
        update() {
            this.name = this.selectedPlayer.name;
            this.selectedImage = this.selectedPlayer.profile;
        }
    }
}
</script>

<style scoped>
.modal h1 {
  background-color: transparent;
}

.modal fieldset label {
    text-align: left;
}

.modal fieldset input {
    width: calc(100% - 8px);
}

.modal button {
    width: calc(100% - 20px);
}

.imageList {
    overflow: scroll;
    height: calc(100% - 210px);
}

.modal img {
    max-width: 60px;
    max-height: 60px;
    padding: 4px;
    border: 4px solid white;
}

.modal img:hover {
    cursor: pointer;
}

.modal img.selected {
    border: 4px solid #aaaa10;
}
</style>