import {ImageAsset} from "../../../../assets/imageAssets";
import {TextElementLink} from "../../../../models/link/TextElementLink";
import {ElementLink} from "../../../../models/link/ElementLink";

export type CarouselTool = {
    imageAsset: ImageAsset;
    title: string;
    elementLink: TextElementLink | ElementLink;
};