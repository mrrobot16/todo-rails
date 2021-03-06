import { bootstrap } from '@angular/platform-browser-dynamic';
import 'rxjs/Rx';
import { enableProdMode } from '@angular/core';
import { TodoClientAppComponent, environment } from './app/';

if (environment.production) {
  enableProdMode();
}

bootstrap(TodoClientAppComponent);
