import {Tool} from "../models/tool/types";
import {
    codeCommenterToolImageAsset,
    saladToolImageAsset
} from "./imageAssets";
import {
    codeCommenterElementLink,
    saladMakerElementLink, smoothieElementLink
} from "./elementLinkAssets";

export const saladMakerDescription: string = `The Salad Maker is a tool that helps you create the signature salads of the Sigwarth household. Whether it is a small, medium, or large salad, this tool will help you make a recipe just right for you.`;

export const saladMakerTool: Tool = {
    name: "Salad Maker",
    description: saladMakerDescription,
    imageAsset: saladToolImageAsset,
    keywords: ["Food", "Health", "Calculator", "Recipe"],
    elementLink: saladMakerElementLink
};

export const codeCommenterDescription: string = `The Code Commenter is for programmers who want to make their code look like a document. It will generate comment headers that organize the page based on your needs and editor settings.`;

export const codeCommenterTool: Tool = {
    name: "Code Commenter",
    description: codeCommenterDescription,
    imageAsset: codeCommenterToolImageAsset,
    keywords: ["Code", "Programming", "Commenting"],
    elementLink: codeCommenterElementLink
};

export const smoothieBuilderDescription: string = `The Smoothie Builder is a tool that let's the world build Davy's famous smoothies! A smoothie need the right ingredients in the right proportions, and Smoothie Builder does just that. It shows you how to make a smoothie, no matter the size.`;

export const smoothieBuilderTool: Tool = {
    name: "Smoothie Builder",
    description: smoothieBuilderDescription,
    imageAsset: saladToolImageAsset,
    keywords: ["Food", "Portions", "Balancer", "Recipe"],
    elementLink: smoothieElementLink
};

export const toolAssets: Tool[] = [
    saladMakerTool,
    codeCommenterTool,
    smoothieBuilderTool
];