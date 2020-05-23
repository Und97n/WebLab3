export default class Model {
    constructor() {
        this.fields = [];
        this.rules = [];
    }

    getFieldById(id) {
        // There are some problems with `find`, so numbers
        return this.fields[this.fields.findIndex((x) => x.id == id)];
    }

    getRuleById(id) {
        // There are some problems with `find`, so numbers
        return this.rules[this.rules.findIndex((x) => x.id == id)];
    }

    addField(field) {
        this.fields.push(field);
    }

    addRule(rule) {
        this.rules.push(rule);
    }

    updateField(field) {
        let rule = this.getRuleById(field.ruleId);
        field.testRegexp(rule);
    }

    updateRule(rule) {
        if (rule.text == "") {
            // Just delete rule
            this.delRule(rule);
        } else {
            rule.setRegexp();
            let to_update = this.fields.filter((field) => field.ruleId == rule.id);
            to_update.forEach(element => element.testRegexp(rule));
        }
    }

    deleteField(field) {
        this.fields.splice(this.fields.indexOf(field), 1);
    }

    deleteRule(rule) {
        let to_delete = this.fields.filter((field) => field.ruleId == rule.id);

        to_delete.forEach(element => this.deleteField(element.id));
        this.rules.splice(this.rules.indexOf(rule), 1);
    }
}