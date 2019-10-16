import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { FormComponent } from './components/form/form.component'
import { TaskComponent } from './components/task/task.component'
import { InfoComponent } from './components/info/info.component'

const routes: Routes = [

  {
    path: 'estudio',
    component: TaskComponent
  },
  {
    path: 'estudio/info',
    component: InfoComponent
  },
  {
    path: 'estudio/contacto',
    component: FormComponent
  },
  
  {
    path: '',
    redirectTo: '/estudio',
    pathMatch: 'full'
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
