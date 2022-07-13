import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'drop-down-with-search',
    templateUrl: './drop-down-with-search.component.html',
    styleUrls: ['./drop-down-with-search.component.scss']
})
export class DropDownWithSearchComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

    searchList(e: any) {
        if (e !== undefined) {
            let term = "";
            if (e.target.value.length > 0) {
                term = e.target.value;
            }
            if (term !== undefined && term !== "" && term != null) {
                console.log(this.copyDemandList);
                if (term.length > 0) {
                    this.demandList = this.copyDemandList.filter((data: any) => {
                        return data.demandDesc.toLowerCase().indexOf(term.toLowerCase()) >= 0 || data.demandCd.toLowerCase().indexOf(term.toLowerCase()) >= 0;
                    });
                    const exists: boolean = this.demandList.length > 0;
                    if (exists) {
                        this.budGVKFrm.controls.cDemandCode.clearValidators();
                        this.budGVKFrm.controls.cDemandCode.updateValueAndValidity();
                    } else {
                        this.budGVKFrm.controls.cDemandCode.setErrors({ erArisesDC: true });
                    }
                }
            } else {
                this.demandList = this.copyDemandList;
            }
        }
    }

    onSelectionDone() {

    }
    onElementSelect(event: any, dataElement: any) {

    }

}
