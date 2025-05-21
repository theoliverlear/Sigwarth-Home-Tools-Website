export interface ImageAsset {
    src: string;
    alt: string;
}

export function getImagePath(fileName: string): string {
    return imageAssetPath + fileName;
}

export function getLogoImagePath(fileName: string): string {
    return logoImageAssetPath + fileName;
}

export function getIconImagePath(fileName: string): string {
    return iconImageAssetPath + fileName;
}

export function getToolImagePath(fileName: string): string {
    return toolImageAssetPath + fileName;
}

export function getSmoothieToolImagePath(fileName: string): string {
    return smoothieToolAssetPath + fileName;
}

const imageAssetPath: string = 'assets/images/';
const logoImageAssetPath: string = imageAssetPath + 'logo/';
const iconImageAssetPath: string = imageAssetPath + 'icon/';
const toolImageAssetPath: string = imageAssetPath + 'tools/';
const smoothieToolAssetPath: string = toolImageAssetPath + 'smoothie/';

export const logoImageAsset: ImageAsset = {
    src: getLogoImagePath('logo.png'),
    alt: 'Logo'
};

export const dropdownIconImageAsset: ImageAsset = {
    src: getIconImagePath('dropdown_icon.svg'),
    alt: 'Dropdown Icon'
};

export const calculatorToolImageAsset: ImageAsset = {
    src: getToolImagePath('calculator.png'),
    alt: 'Calculator Tool'
};

export const smoothieToolImageAsset: ImageAsset = {
    src: getToolImagePath('smoothie.svg'),
    alt: 'Smoothie Tool'
};

export const codeCommenterToolImageAsset: ImageAsset = {
    src: getToolImagePath('code_commenter.svg'),
    alt: 'Code Commenter Tool'
};

export const saladToolImageAsset: ImageAsset = {
    src: getToolImagePath('salad.svg'),
    alt: 'Salad Tool'
};

export const calendarToolImageAsset: ImageAsset = {
    src: getToolImagePath('calendar.png'),
    alt: 'Calendar Tool'
};

export const saladLettuceImageAsset: ImageAsset = {
    src: getToolImagePath('lettuce.svg'),
    alt: 'Salad Lettuce'
};

export const saladPepperoniImageAsset: ImageAsset = {
    src: getToolImagePath('pepperoni.svg'),
    alt: 'Salad Pepperoni'
};

export const saladCheeseImageAsset: ImageAsset = {
    src: getToolImagePath('cheese.svg'),
    alt: 'Salad Cheese'
};

export const saladCroutonImageAsset: ImageAsset = {
    src: getToolImagePath('crouton.svg'),
    alt: 'Salad Crouton'
};

export const saladDressingImageAsset: ImageAsset = {
    src: getToolImagePath('dressing.svg'),
    alt: 'Salad Dressing'
};

export const cancelIconImageAsset: ImageAsset = {
    src: getIconImagePath('cancel_icon.svg'),
    alt: 'Cancel Icon'
};

export const smoothieAppleImageAsset: ImageAsset = {
    src: getSmoothieToolImagePath('apple.svg'),
    alt: 'Smoothie Apple'
};

export const smoothieFruitBasketImageAsset: ImageAsset = {
    src: getSmoothieToolImagePath('fruit_basket.svg'),
    alt: 'Smoothie Fruit Basket'
};

export const smoothieYogurtBowlImageAsset: ImageAsset = {
    src: getSmoothieToolImagePath('yogurt_bowl.svg'),
    alt: 'Smoothie Yogurt Basket'
};