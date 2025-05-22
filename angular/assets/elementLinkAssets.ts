import {TargetType} from "../models/html/TargetType";
import {TextElementLink} from "../models/link/TextElementLink";
import {TagType} from "../models/html/TagType";
import {ElementLink} from "../models/link/ElementLink";

export const navBarHomeElementLink = new ElementLink('/',
    TargetType.SELF);


export const aboutElementLink = new TextElementLink('/about',
    TargetType.SELF,
    false,
    'About',
    TagType.H5);

export const toolsElementLink = new TextElementLink('/tools',
    TargetType.SELF,
    false,
    'Tools',
    TagType.H5);

export const smoothieElementLink = new TextElementLink('/tools/smoothie',
    TargetType.SELF,
    false,
    'Smoothie',
    TagType.H5);

export const codeCommenterElementLink = new TextElementLink('/tools/code-commenter',
    TargetType.SELF,
    false,
    'Code Commenter',
    TagType.H5);

export const carbCounterElementLink = new TextElementLink('/tools/carb-counter',
    TargetType.SELF,
    false,
    'Carb Counter',
    TagType.H5);

export const saladMakerElementLink = new TextElementLink('/tools/salad',
    TargetType.SELF,
    false,
    'Salad Maker',
    TagType.H5);

export const toolsElementLinks: TextElementLink[] = [
    smoothieElementLink,
    codeCommenterElementLink,
    // TODO: Uncomment when the component is ready.
    // carbCounterElementLink,
    saladMakerElementLink
];

export const navBarBudgetElementLink = new TextElementLink('/budget',
    TargetType.SELF,
    false,
    'Budget',
    TagType.H5);
export const navBarPaychecksElementLink = new TextElementLink('/paychecks',
    TargetType.SELF,
    false,
    'Paychecks',
     TagType.H5);
export const navBarMyAccountElementLink = new TextElementLink('/authorize',
    TargetType.SELF,
    false,
    'My Account',
    TagType.H5);