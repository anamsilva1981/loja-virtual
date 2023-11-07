import { enableProdMode, importProvidersFrom } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { provideAnimations } from '@angular/platform-browser/animations';
// import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

import { environment } from './environments/environment';
import { AppComponent } from './app/app.component';
import { AppRoutingModule } from './app/app-routing.module';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

if (environment.production) {
  enableProdMode();
}



bootstrapApplication(AppComponent, {
  providers: [
      importProvidersFrom(BrowserModule, AppRoutingModule,  FormsModule),
      provideAnimations(),
      provideHttpClient(withInterceptorsFromDi()),
  ]
})
  .catch(err => console.error(err));
function provideHttpClient(arg0: any): import("@angular/core").Provider | import("@angular/core").ImportedNgModuleProviders {
  throw new Error('Function not implemented.');
}

function withInterceptorsFromDi(): any {
  throw new Error('Function not implemented.');
}

