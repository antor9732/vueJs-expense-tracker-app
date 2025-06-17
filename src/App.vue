<script>
import Header from './components/Header.vue';
import Balance from './components/Balance.vue';
import IncomeExpense from './components/IncomeExpense.vue';
import AddTransaction from './components/AddTransaction.vue';
import TransactionList from './components/TransactionList.vue';

export default {
    name: 'App',
    components: {
        Header,
        Balance,
        IncomeExpense,
        AddTransaction,
        TransactionList
    }
};
</script>

<template>
    <div class="container">
        <Header />
        <Balance />
        <IncomeExpense />
        <TransactionList />
        <AddTransaction />
    </div>

</template>