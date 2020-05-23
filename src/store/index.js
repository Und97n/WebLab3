import Vue from 'vue'
import Vuex from 'vuex'
import Model from '@/cls/model/Model.js'
import Rule from '../cls/model/Rule'
import Field from '../cls/model/Field'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        model: new Model()
    },
    mutations: { // cannot be asynchronous! (always sync)
        ADD_RULE: (state, text) => {
            state.model.addRule(new Rule(Math.round(Math.random()*100000), text));
        },

        ADD_FIELDS: (state, fieldsNumber) => {
            if (state.model.rules.length == 0) {
            alert("No rules are defined");
            } else {
            for (let i = 0; i < fieldsNumber; ++i) {
                var rl = Math.floor(Math.random()*state.model.rules.length);
                console.log("Rule for new field: " + rl);
                const field = new Field(Math.round(Math.random()*100000), state.model.rules[rl].id);
                state.model.addField(field);
            }
            }
        },
        DELETE_FIELD: (state, field) => {
            state.model.deleteField(field);
        },
        DELETE_RULE: (state, rule) => {
            state.model.deleteRule(rule);
        },
        UPDATE_FIELD: (state, field) => {
            state.model.updateField(field);
        },
        UPDATE_RULE: (state, rule) => {
            state.model.updateRule(rule);
        }
    },
    actions: { // can be asynchronous!
        ADD_RULE: (context, text) => {
            context.commit('ADD_RULE', text);
        },
        ADD_FIELDS: (context, numb) => {
            context.commit('ADD_FIELDS', numb);
        },
        DELETE_FIELD: (context, field) => {
            context.commit('DELETE_FIELD', field);
        },
        DELETE_RULE: (context, rule) => {
            context.commit('DELETE_RULE', rule);
        },
        UPDATE_FIELD: (context, field) => {
            context.commit('UPDATE_FIELD', field);
        },
        UPDATE_RULE: (context, rule) => {
            context.commit('UPDATE_RULE', rule);
        }
    },
    modules: {
    }
})
