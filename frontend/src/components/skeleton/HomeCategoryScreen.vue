<script setup>
const props = defineProps({
  dataAmount: {
    type: Number,
    required: true,
    default: 10,
  },
});
</script>
<template>
  <div class="col" v-for="(data, index) in dataAmount" :key="index">
    <div class="product-card">
      <ul>
        <li>
          <a class="suggest-card" href="javascrpt::void(0)">
            <img src="@/assets/images/category/cat.jpg" alt="" />
            <div class="ssc-line w-100"></div>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>
