<script setup>
import { defineProps  } from 'vue';

const props = defineProps({
  totalBalance: {
    type: Number,
    required: true
  }
});
</script>


<template>
    <h4>Your Balance</h4>
    <h1 id="balance">${{ totalBalance }}</h1>
</template>