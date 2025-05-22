// nav-bar.component.ts 
import {Component, OnInit, ViewChild} from "@angular/core";
import {
    aboutElementLink,
    navBarBudgetElementLink,
    navBarMyAccountElementLink, navBarPaychecksElementLink, toolsElementLink
} from "../../../assets/elementLinkAssets";

@Component({
    selector: 'nav-bar',
    templateUrl: './nav-bar.component.html',
    styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {

    constructor() {

    }


    protected readonly navBarMyAccountElementLink = navBarMyAccountElementLink;
    protected readonly navBarPaychecksElementLink = navBarPaychecksElementLink;
    protected readonly navBarBudgetElementLink = navBarBudgetElementLink;
    protected readonly aboutElementLink = aboutElementLink;
    protected readonly toolsElementLink = toolsElementLink;
}
