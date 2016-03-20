///<reference path="typings/main.d.ts" />

var generators = require('yeoman-generator');

module.exports = generators.Base.extend({
    constructor: function() {
        generators.Base.apply(this,arguments);
        
        this.option
    } 
});