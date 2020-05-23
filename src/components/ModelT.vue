<template>
    <div class="main">
        <h4>Fields:</h4>
        <div id="fields-lst">
            <table border="0"></table>
            <tr v-for="field in fields" :key="field.id">
                <td><button @click="deleteField(field)">x</button></td>
                <td>
                <input @input="updateField(field)"
                        v-bind:style="field.styleObject"
                        style="border-color: red"
                        type="text"
                        v-model="field.text"></td>
                <td>{{ field.applied }}</td>
            </tr>
        </div>
        <h4>Rules:</h4>
        <div id="rules-lst">
            <table border="0"></table>
            <tr v-for="rule in rules" :key="rule.id">
                <td><button @click="deleteRule(rule)">x</button></td>
                <td style="color: gray">
                    <input type="text"
                            @input="updateRule(rule)" 
                            v-model="rule.text">
                </td>
            </tr>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ModelT',
    props: {
        fields: Array,
        rules: Array
    },
    methods: {
        deleteField(field) {
            this.$emit('deleteField', field);
        },
        deleteRule(rule) {
            this.$emit('deleteRule', rule);
        },
        updateField(field, ) {
            this.$emit('updateField', field);
        },
        updateRule(rule) {
            this.$emit('updateRule', rule)
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    main {
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
