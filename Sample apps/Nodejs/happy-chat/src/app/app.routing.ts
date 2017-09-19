import { Routes, RouterModule } from '@angular/router';
import { DemoComponent } from './demo/demo.component';

const APP_ROUTES: Routes = [
    { path: '', redirectTo: 'demo', pathMatch: 'full' },
    { path: 'demo', component: DemoComponent },
    { path: '*', redirectTo: 'demo' }
]

export const routing = RouterModule.forRoot(APP_ROUTES);