<script setup>
import { defineProps  } from 'vue';

const props = defineProps({
  Income: {
    type: Number,
    required: true
  },
  Expenses: {
    type: Number,
    required: true
  }

});
</script>
<template>
    <div class="inc-exp-container">
    <div>
      <h4>Income</h4>
      <p id="money-plus" class="money plus">+${{ Income }}</p>
    </div>
    <div>
      <h4>Expense</h4>
      <p id="money-minus" class="money minus">-${{ Expenses }}</p>
    </div>
  </div>
</template>