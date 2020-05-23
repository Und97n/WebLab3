<template>
    <div>
        <label for="item">Enter a number of fields:</label>
        <p><input id="item" type="text" v-model="itemsCount" /></p>
        <p><button @click="add">Add</button></p>
    </div>    
</template>

<script>
// @ is an alias to /src

export default {
  name: 'AddFields',
    data () {
        return {
            itemsCount: 1
        }
    },
    methods: {
        add() {
            this.$store.dispatch('ADD_FIELDS', this.itemsCount);
            this.$router.push({name: 'Home'});
        }
    }
}

</script>

<style scoped>
    button {
        font-size: 15px;
        margin: 2px;
        cursor: pointer;
        background: #698694;
        color: white;
        border: none;
    }
</style>