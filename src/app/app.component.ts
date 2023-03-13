import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ShortcutInput, ShortcutEventOutput } from 'ng-keyboard-shortcuts';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
    shortcuts: ShortcutInput[] = [];
    constructor() {}

    ngOnInit(): void {
        this.shortcuts.push(
            {
                key: 'q',
                label: 'Help',
                description: 'Question mark',
                command: (e) => console.log('q button mark pressed', { e }),
                preventDefault: true,
            },
            {
                key: ['up up down down left right left right b a enter'],
                label: 'Sequences Codes',
                description: 'Konami code!',
                command: (output: ShortcutEventOutput) => console.log('Konami code!!!', output),
            },
            {
                key: ['a r k enter'],
                label: 'Sequences Codes',
                description: 'ARK code!',
                command: (output: ShortcutEventOutput) => alert('Welcome Mr.ARK'),
            },
            {
                key: ['cmd + b'],
                label: 'Help',
                description: 'Cmd + b',
                command: (e) => console.log(e),
                preventDefault: true,
            }
        );
    }
}
