import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'login', loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)},
  {
    path: 'chat',
    loadChildren: () => import('./chat/chat.module').then( m => m.ChatPageModule)
  },
  {
    path: 'report-work',
    loadChildren: () => import('./report-work/report-work.module').then( m => m.ReportWorkPageModule)
  },
  {
    path: 'report-incident',
    loadChildren: () => import('./report-incident/report-incident.module').then( m => m.ReportIncidentPageModule)
  },
  {
    path: 'last-incidents',
    loadChildren: () => import('./last-incidents/last-incidents.module').then( m => m.LastIncidentsPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
