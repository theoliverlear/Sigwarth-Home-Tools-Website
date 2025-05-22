import {
    CarouselTool
} from "../components/elements/carousel-tool/models/types";
import {
    calculatorToolImageAsset,
    codeCommenterToolImageAsset,
    saladToolImageAsset,
    smoothieToolImageAsset
} from "./imageAssets";
import {
    carbCounterElementLink, codeCommenterElementLink, saladMakerElementLink,
    smoothieElementLink
} from "./elementLinkAssets";

export const carbCounterTool: CarouselTool = {
    imageAsset: calculatorToolImageAsset,
    title: 'Carb Counter',
    elementLink: carbCounterElementLink
};

export const smoothieBuilderTool: CarouselTool = {
    imageAsset: smoothieToolImageAsset,
    title: 'Smoothie Builder',
    elementLink: smoothieElementLink
};

export const codeCommenterTool: CarouselTool = {
    imageAsset: codeCommenterToolImageAsset,
    title: 'Code Commenter',
    elementLink: codeCommenterElementLink
};

export const saladBuilderTool: CarouselTool = {
    imageAsset: saladToolImageAsset,
    title: 'Salad Builder',
    elementLink: saladMakerElementLink
};

export const carouselTools: CarouselTool[] = [
    // TODO: Uncomment when component is ready.
    // carbCounterTool,
    smoothieBuilderTool,
    codeCommenterTool,
    saladBuilderTool
];