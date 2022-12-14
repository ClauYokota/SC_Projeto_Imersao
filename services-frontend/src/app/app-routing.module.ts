import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// localhost:4200 -> localhost:4200/funcionarios

const routes: Routes = [
  {
    path: 'funcionarios',
    title: 'Funcionários',
    loadChildren: () => import('./funcionarios/funcionarios.module').then(m => m.FuncionariosModule)
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'funcionarios',
    
  },
  {
    path: 'auth',
    title:'Login',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path:'cargos',
    title:'Cargos',
    loadChildren: () => import('./cargos/cargos.module').then(m => m.CargosModule)
  },
  {
    path:'clientes',
    title:'Clientes',
    loadChildren: () => import('./clientes/clientes.module').then(m => m.ClientesModule)
  },
  {
    path:'chamados',
    title:'Chamados',
    loadChildren: () => import('./chamados/chamados.module').then(m => m.ChamadosModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
