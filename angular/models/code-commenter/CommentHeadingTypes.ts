import {CommentHeadingType} from "./types";

export namespace CommentHeadingTypes {
    export const THIN: CommentHeadingType = {
        name: 'THIN',
        example: '//--------Heading--------'
    };

    export const THICK: CommentHeadingType = {
        name: 'THICK',
        example: '//=======-Heading-======='
    };

    export const HTML: CommentHeadingType = {
        name: 'HTML',
        example: '<!--------Heading------->'
    };

    export const HTML_THICK: CommentHeadingType = {
        name: 'HTML_THICK',
        example: '<!--=====-Heading-=====->'
    };

    export const THIN_HASH: CommentHeadingType = {
        name: 'THIN_HASH',
        example: '#---------Heading--------'
    };

    export const THICK_HASH: CommentHeadingType = {
        name: 'THICK_HASH',
        example: '#========-Heading-======='
    };

    export const CSS: CommentHeadingType = {
        name: 'CSS',
        example: '/*--------Heading------*/'
    };

    export const CSS_THICK: CommentHeadingType = {
        name: 'CSS_THICK',
        example: '/*=======-Heading-=====*/'
    };

    export function getAll(): CommentHeadingType[] {
        return [
            THIN,
            THICK,
            HTML,
            HTML_THICK,
            THIN_HASH,
            THICK_HASH,
            CSS,
            CSS_THICK
        ];
    }
    export function getAllNames(): string[] {
        return getAll().map((heading: CommentHeadingType): any => heading.name);
    }

    export function getAllExamples(): string[] {
        return getAll().map((heading: CommentHeadingType): any => heading.example);
    }

    export function getByExample(example: string): CommentHeadingType {
        example = example.trim();
        const heading: CommentHeadingType = getAll().find((heading: CommentHeadingType): boolean => heading.example === example);
        return heading ? heading : THIN;
    }

    export function getNameByExample(example: string): string {
        example = example.trim();
        const heading: CommentHeadingType = getAll().find((heading: CommentHeadingType): boolean => heading.example === example);
        return heading ? heading.name : '';
    }
}