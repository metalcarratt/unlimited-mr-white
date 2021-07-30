<template>
    <Modal v-if="showPlayerEdit">
        <h1>Edit player</h1>
        <fieldset>
            <label>Name</label>
            <input type="text" v-model="name" />
        </fieldset>
        <button @click="$emit('close', {name})">Accept</button>
    </Modal>
</template>

<script>
import Modal from './Modal.vue';

export default {
    props: [ 'showPlayerEdit', 'selectedPlayer' ],
    components: { Modal },
    data() {
        return {
            name: ''
        }
    },
    watch: {
        selectedPlayer() {
            this.name = this.selectedPlayer.name;
        }
    },
    mounted() {
        this.name = this.selectedPlayer.name;
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
</style>