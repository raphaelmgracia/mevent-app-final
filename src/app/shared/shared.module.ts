import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { AuthGuardService } from './services/auth-guard.service';
import { AuthService } from './services/auth.service';
import { ToastService } from './services/toast.service';
import { HeaderComponent } from './components/header/header.component';
import { StopPropagationDirective } from './directives/stop-propagation.directive';
/*
1. Créer nouveau projet avec
    app.module
    shared.module
    home.module
2. Modifier html home.html
3. Ajouter service authService dans shared/services
4. Importer sharedModule dans Home
5. Injecter authService dans HomeComponent depuis le contructor

*/


@NgModule({
  declarations: [
    // SignupService
    HeaderComponent,
    StopPropagationDirective,
  ],
  imports: [
    CommonModule,
    IonicModule,
  ],
  exports: [
    CommonModule,
    IonicModule,
  ],
  providers: [
    AuthGuardService,
    AuthService,
    ToastService,
  ]
})
export class SharedModule { }
