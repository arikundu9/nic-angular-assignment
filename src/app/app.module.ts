import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatMenuModule } from '@angular/material/menu';

import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { MainLayoutComponent } from './components/main-layout/main-layout.component';
import { AddCostingComponent } from './components/add-costing/add-costing.component';
import { TabsComponentComponent } from './components/tabs-component/tabs-component.component';
import { DefaultTabComponent } from './components/default-tab/default-tab.component';

@NgModule({
    declarations: [AppComponent, LoginComponent, MainLayoutComponent, AddCostingComponent, TabsComponentComponent, DefaultTabComponent],
    imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule, MatToolbarModule, MatIconModule, MatGridListModule, MatTabsModule, MatButtonToggleModule, MatSidenavModule, MatButtonModule, MatListModule, MatFormFieldModule, MatSelectModule, MatInputModule, MatRadioModule, ReactiveFormsModule, MatMenuModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
