<script setup>
import { ref } from "vue";
import { useToast } from "vue-toastification";

const text = ref("");
const amount = ref("");
const type = ref("");

const emit = defineEmits(["TransactionSubmitted"]);

const toast = useToast();

const onSubmit = () => {
  if (!text.value || !amount.value || !type.value) {
    toast.error("Please add transaction Name amount & type");
    return;
  }

  const transactionData = {
    id: Math.floor(Math.random() * 1000000),
    text: text.value,
    amount: type.value === 'income' 
      ? parseFloat(amount.value) 
      : -parseFloat(amount.value), // Make expense negative
    type: type.value
  };

  emit("TransactionSubmitted", transactionData);

  // Reset form
  text.value = "";
  amount.value = "";
  type.value = "";
};
</script>

<template>
  <h3 class="add-transaction-title">Add new transaction</h3>
  <form id="form" @submit.prevent="onSubmit">
    <div class="form-control">
      <label class="input-title" for="text">Write your Income/Expense Name:</label>
      <input type="text" id="text" v-model="text" placeholder="Enter text..." />
    </div>
    <div class="form-control">
      <label class="input-title" for="amount"
        >Income/Expense Amount:</label
      >
      <input
        type="text"
        v-model="amount"
        id="amount"
        placeholder="Enter amount..."
      />
    </div>
    <div class="income-expense-btn">
      <label class="input-title" 
      for="input-title"
      >Transaction Types:</label>
      <div class="form-control">
        <label>
          <input
            type="radio"
            id="incomeBtn"
            value="income"
            v-model="type"
            name="type"
          />
          (+) Income
        </label>
        <label>
          <input
            type="radio"
            id="expenseBtn"
            value="expense"
            v-model="type"
            name="type"
          />
          (-) Expense
        </label>
      </div>
    </div>
    <button class="btn">Add transaction</button>
  </form>
</template>
