import {Route} from "@angular/router";
import {HomeComponent} from "../../components/pages/home/home.component";
import {
    CarbCounterComponent
} from "../../components/pages/carb-counter/carb-counter.component";
import {
    CodeCommenterComponent
} from "../../components/pages/code-commenter/code-commenter.component";
import {
    SaladMakerComponent
} from "../../components/pages/salad-maker/salad-maker.component";
import {
    SmoothieBuilderComponent
} from "../../components/pages/smoothie-builder/smoothie-builder.component";
import {ToolsComponent} from "../../components/pages/tools/tools.component";

export const carbCounterRoute: Route = {
    path: "tools/carb-counter",
    component: CarbCounterComponent,
    data: {
        meta: {
            title: "Carb Counter | SHT"
        }
    }
};

export const codeCommenterRoute: Route = {
    path: "tools/code-commenter",
    component: CodeCommenterComponent,
    data: {
        meta: {
            title: "Code Commenter | SHT"
        }
    }
};

export const homeRoute: Route = {
    path: "",
    component: HomeComponent,
    data: {
        meta: {
            title: "Sigwarth Home Tools"
        }
    }
};

export const saladMakerRoute: Route = {
    path: "tools/salad",
    component: SaladMakerComponent,
    data: {
        meta: {
            title: "Salad Maker | SHT"
        }
    }
};

export const smoothieBuilderRoute: Route = {
    path: "tools/smoothie",
    component: SmoothieBuilderComponent,
    data: {
        meta: {
            title: "Smoothie Builder | SHT"
        }
    }
};

export const toolsRoute: Route = {
    path: "tools",
    component: ToolsComponent,
    data: {
        meta: {
            title: "Tools | SHT"
        }
    }
};

export const routes: Route[] = [
    carbCounterRoute,
    codeCommenterRoute,
    homeRoute,
    saladMakerRoute,
    smoothieBuilderRoute,
    toolsRoute
];