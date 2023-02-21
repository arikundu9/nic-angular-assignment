import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { MainLayoutComponent } from './components/main-layout/main-layout.component';
import { TabsComponentComponent } from './components/tabs-component/tabs-component.component';

const routes: Routes = [
    { path: '', component: MainLayoutComponent, children: [
        { path: 'login', component: LoginComponent,
            children: [
                {
                    path: '',
                    component: LoginComponent,
                    outlet: 'tab_1'
                },
                {
                    path: '',
                    component: MainLayoutComponent,
                    outlet: 'tab_2'
                }
            ]
        },
        { path: 'tabs', component: TabsComponentComponent,
            children: [
                {
                    path: '',
                    component: LoginComponent,
                    outlet: 'tab_1'
                },
                {
                    path: '',
                    component: MainLayoutComponent,
                    outlet: 'tab_2'
                }
            ]
        }
        ]
    }];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
