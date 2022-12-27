import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
    selector: 'app-add-costing',
    templateUrl: './add-costing.component.html',
    styleUrls: ['./add-costing.component.scss'],
})
export class AddCostingComponent implements OnInit {
    costingDtl: any = {};

    constructor(public dialog: MatDialog, @Inject(MAT_DIALOG_DATA) public data: { data: any }) {}

    ngOnInit(): void {
        this.costingDtl = this.data.data;
    }

    close() {
        this.dialog.closeAll();
    }
}
