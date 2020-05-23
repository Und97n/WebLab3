<template>
    <div class="home">

    <ModelT
        :fields="$store.state.model.fields" 
        :rules="$store.state.model.rules"
        @deleteField="deleteField"
        @deleteRule="deleteRule"
        @updateField="updateField"
        @updateRule="updateRule"/>
    <button @click="addFields">Add fields</button>
    <button @click="addRule">Add rule</button>
    </div>
</template>

<script>

import ModelT from '../components/ModelT.vue'

export default {
    name: 'Home',
    components: { ModelT },
    data() {
        return {
        
        }
    },

    methods: {
        addFields() {
            this.$router.push({name:'AddFields'});
        },
        addRule() {
            this.$router.push({name:'AddRule'});      
        },
        deleteField(field) {
            this.$store.dispatch('DELETE_FIELD', field);
        },
        deleteRule(rule) {
            this.$store.dispatch('DELETE_RULE', rule);
        },
        updateField(field) {
            this.$store.dispatch('UPDATE_FIELD', field);
        },
        updateRule(rule) {
            this.$store.dispatch('UPDATE_RULE', rule)
        }
    }
}
</script>
<style scoped>
    * {
        margin: 10;
        padding: 10;
        left: 50%;
        text-color: white;
    }

    home {
        color: white;
        background-color: #698694;
    }


    button {
        font-size: 15px;
        margin: 2px;
        cursor: pointer;
        background: #698694;
        color: white;
        border: none;
    }
</style>