<script setup>
import { useModal } from "@/stores";
const modal = useModal();
</script>
<template>
  <div v-show="modal.isOpen">
    <div class="modal fade show" id="login-modal" style="display: block">
      <div class="modal-dialog">
        <div class="modal-content">
          <button
            class="modal-close icofont-close"
            data-bs-dismiss="modal"
            @click.prevent="modal.toggleModal()"
          ></button>
          <slot/>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.modal {
  background-color: rgba(10, 10, 10, 0.45);
}
</style>