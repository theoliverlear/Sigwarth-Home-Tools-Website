import {ImageAsset} from "../../assets/imageAssets";
import {TextElementLink} from "../link/TextElementLink";
import {ElementLink} from "../link/ElementLink";

export type Tool = {
    name: string;
    description: string;
    imageAsset: ImageAsset;
    keywords: string[];
    elementLink: TextElementLink | ElementLink;
}