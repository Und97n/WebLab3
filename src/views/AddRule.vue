<template>
    <div>
        <label for="item">Enter a regexp:</label>
        <p><input id="item" type="text" v-model="itemTitle" /></p>
        <p><button @click="add">Add</button></p>
    </div>    
</template>

<script>
// @ is an alias to /src

export default {
    name: 'AddRule',
    data () {
        return {
            itemTitle: ''
        }
    },
    methods: {
        add() {
            this.$store.dispatch('ADD_RULE', this.itemTitle);
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