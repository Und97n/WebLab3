export default class Rule {
    constructor(id, text) {
        this.id = id;
        this.text = text;
        this.regexp = new RegExp(text);
    }

    setRegexp() {
        this.regexp = new RegExp(this.text);
    }
}