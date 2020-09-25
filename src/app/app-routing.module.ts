import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccessorModule } from './accessor/accessor.module';
import { AccessorFormComponent } from './accessor/accessor-form/accessor-form.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'accessor'
  },
  {
    path: 'accessor',
    component: AccessorFormComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule, AccessorModule]
})
export class AppRoutingModule { }
