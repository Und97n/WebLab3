export default class Field {
    constructor(id, ruleId) {
        this.id = id;

        this.text = "";
        this.ruleId = ruleId;
        this.styleObject = {
            borderColor: 'gray',
        };
    }

    testRegexp(rule) {
        const bcolor = rule.regexp.test(this.text) ? 'green' : 'red';
        this.styleObject = {
            borderColor: bcolor
        }
    }
}