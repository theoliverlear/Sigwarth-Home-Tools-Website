import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";
import {SigwarthHomeToolsModule} from "./modules/sigwarth-home-tools.module";

platformBrowserDynamic().bootstrapModule(SigwarthHomeToolsModule)
    .catch(error => console.error(error));