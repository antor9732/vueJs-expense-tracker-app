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
    <h4 class="balance-title">Your Balance:</h4>
    <h1 id="balance">{{ totalBalance < 0 ? '-' : '' }}${{ Math.abs(totalBalance) }}</h1>
</template>