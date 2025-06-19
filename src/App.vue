<script setup>
// import { ref, computed } from "vue";
import { ref, computed, onMounted, watch } from "vue";
import Header from "./components/Header.vue";
import Balance from "./components/Balance.vue";
import IncomeExpense from "./components/IncomeExpense.vue";
import AddTransaction from "./components/AddTransaction.vue";
import TransactionList from "./components/TransactionList.vue";

import { useToast } from "vue-toastification";

const toast = useToast();

const transactions = ref([]);

// Load data from localStorage when component mounts
onMounted(() => {
  const savedTransactions = localStorage.getItem("transactions");
  if (savedTransactions) {
    transactions.value = JSON.parse(savedTransactions);
  }
});

// Watch for changes in transactions and save to localStorage
watch(
  transactions,
  (newTransactions) => {
    localStorage.setItem("transactions", JSON.stringify(newTransactions));
  },
  { deep: true }
);

//Get Total Balance
const totalBalance = computed(() => {
  return transactions.value.reduce((acc, transaction) => {
    return acc + transaction.amount;
  }, 0);
});

//Get Income
const Income = computed(() => {
  return transactions.value
    .filter((transaction) => transaction.amount > 0)
    .reduce((acc, transaction) => {
      return acc + transaction.amount;
    }, 0)
    .toFixed(2);
});

//Get Expenses
const Expenses = computed(() => {
  return transactions.value
    .filter((transaction) => transaction.amount < 0)
    .reduce((acc, transaction) => {
      return acc + transaction.amount;
    }, 0)
    .toFixed(2);
});

// Add Transaction Handler
const handleTransactionSubmitted = (transactionData) => {
  transactions.value.push({
    id: generateUniqueId(),
    text: transactionData.text,
    amount: transactionData.amount,
  });

  toast.success("Transaction added successfully!");
};

// Function to generate a unique ID
const generateUniqueId = () => {
  return Math.floor(Math.random() * 1000000);
};

// Delete Transaction Handler
const handleTransactionDeleted = (id) => {
  transactions.value = transactions.value.filter(
    (transaction) => transaction.id !== id);
  toast.success("Transaction deleted successfully!");
};
</script>

<template>
  <Header />
  <div class="container">
    <Balance :totalBalance="+totalBalance" />
    <IncomeExpense :Income="+Income" :Expenses="+Expenses" />
    <AddTransaction
    @transactionSubmitted="handleTransactionSubmitted"
    />
    <TransactionList
      :transactions="transactions"
      @transactionDeleted="handleTransactionDeleted"
    />
  </div>
</template>
