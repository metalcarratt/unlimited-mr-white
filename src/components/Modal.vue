<template>
    <div class="modal">
        <slot></slot>
    </div>
</template>

<style scoped>
.modal {
    width: 380px;
    height: calc(100% - 20px);
    background-color: white;
    position: fixed;
    top: 0;
    margin: 10px;
    border: 1px solid black;
    border-radius: 8px;
}

@media (max-width: 400px) {
  .modal {
    width: calc(100% - 20px);
  }
}
</style>