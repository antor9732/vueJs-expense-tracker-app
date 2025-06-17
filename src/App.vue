<script setup>
import { ref, computed } from "vue";
import Header from "./components/Header.vue";
import Balance from "./components/Balance.vue";
import IncomeExpense from "./components/IncomeExpense.vue";
import AddTransaction from "./components/AddTransaction.vue";
import TransactionList from "./components/TransactionList.vue";

const transactions = ref([
  { id: 1, text: "Cash", amount: -19.99 },
  { id: 2, text: "Paycheck", amount: 299.88 },
  { id: 3, text: "Book", amount: -40 },
  { id: 4, text: "Camera", amount: 200 },
]);

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


</script>

<template>
  <Header />
  <div class="container">
    <Balance :totalBalance="totalBalance" />
    <IncomeExpense :Income="Income" :Expenses="Expenses"/>
    <TransactionList :transactions="transactions" />
    <AddTransaction />
  </div>
</template>
