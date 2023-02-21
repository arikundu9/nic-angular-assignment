import { Component, OnInit } from '@angular/core';
import { Observable, interval } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { ActivatedRoute, Router, NavigationStart } from "@angular/router";
import { LoginComponent } from '../login/login.component';

@Component({
    selector: 'app-tabs-component',
    templateUrl: './tabs-component.component.html',
    styleUrls: ['./tabs-component.component.scss'],
})
export class TabsComponentComponent implements OnInit {
    lgcomp: any = LoginComponent;
    stateData:any;
    C: any = console;
    lotsOfTabs = new Array(7).fill(0).map((_, index) => `Tab ${index}`);
    message$: Observable<string>;

    private messages = 'Paragraphs are the building blocks of papers. Many students define paragraphs in terms of length: a paragraph is a group of at least five sentences, a paragraph is half a page long, etc. In reality, though, the unity and coherence of ideas among sentences is what constitutes a paragraph. A paragraph is defined as “a group of sentences or a single sentence that forms a unit” (Lunsford and Connors 116). Length and appearance do not determine whether a section in a paper is a paragraph. For instance, in some styles of writing, particularly journalistic styles, a paragraph can be just one sentence long. Ultimately, a paragraph is a sentence or group of sentences that support one main idea. In this handout, we will refer to this as the “controlling idea,” because it controls what happens in the rest of the paragraph.';
    constructor(private router: Router,) {
        this.message$ = this.getResendObservable();
        // console.log((this.stateData = this.router.!getCurrentNavigation().extras.state));
    }

    ngOnInit(): void {
        console.log(this.lotsOfTabs);
    }

    resend() {
        this.message$ = this.getResendObservable();
    }

    private getResendObservable() {
        return interval(20).pipe(
            map((i) => this.messages.substring(0, i + 1)),
            take(this.messages.length)
        );
    }
}