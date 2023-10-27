<script setup>
import { ref } from 'vue'
import { VuePDF, usePDF } from '@tato30/vue-pdf'

const page = ref(1)
const title = ref([{ id: 'webauthn', name: '無密碼驗證' }])

const { pdf, pages } = usePDF('../../file/webauthn.pdf')
</script>

<template>
  <div v-for="{ id, name } of title" :key="id">
    <hr />
    <h1>{{ name }}</h1>
    <div class="flex justify-center items-center">
      <button class="button-example" @click="page = page > 1 ? page - 1 : page">
        Prev
      </button>
      <span class="dark:text-white">{{ page }} / {{ pages }}</span>
      <button
        class="button-example"
        @click="page = page < pages ? page + 1 : page"
      >
        Next
      </button>
    </div>
    <VuePDF :pdf="pdf" :page="page" fit-parent />
  </div>
</template>

<style>
.button-example {
  background-color: grey;
  color: white;
  padding: 10px;
  margin: 7px;
  border-radius: 4px;
  border: none;
  cursor: pointer;
}
</style>
