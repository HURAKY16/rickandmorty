import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RickAndMortyComponent } from './rick-and-morty/rick-and-morty.component';

const routes: Routes = [{ path: 'Bienvenido', component: RickAndMortyComponent }, // Define la ruta correctamente
  { path: '', redirectTo: '/Bienvenido', pathMatch: 'full' }, // Redirección a ruta por defecto
  { path: '**', redirectTo: '/Bienvenido' } // Ruta para páginas no encontradas (opcional)
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
