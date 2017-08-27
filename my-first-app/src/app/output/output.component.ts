import {Component} from '@angular/core';
import {StringGenerator} from './StringGenerator'

@Component({
 selector: 'fix-output',
 template: `
    <p> non angular output<\p>
    <p> field output: {{field}}<\p>
    <p> method output: {{methodOutput()}}<\p>
    <p> method output, but random string. Refresh to check it out!: <b>{{randomOutput()}} </b><\p>
 `
})
/* Case sensitive!! */
export class Output{
    field = "This is a field in my class";

    methodOutput() {
        return "this is a string from method output";
    }

    randomOutput() {
        let generator = new StringGenerator(0,2);

        return generator.generateRandomString();
    }

}