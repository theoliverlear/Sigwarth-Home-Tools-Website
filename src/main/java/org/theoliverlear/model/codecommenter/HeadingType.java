package org.theoliverlear.model.codecommenter;

public enum HeadingType {
    THIN("//", "", "-"),
    THICK("//", "", "="),
    HTML("<!--", "-->", "-"),
    CSS("/*", "*/", "-"),
    THIN_HASH("#", "", "-"),
    THICK_HASH("#", "", "=");
    public final String PRE_ARTIFACT;
    public final String POST_ARTIFACT;
    public final String SEPARATOR_CHAR;
    HeadingType(String PRE_ARTIFACT, String POST_ARTIFACT, String SEPARATOR_CHAR) {
        this.PRE_ARTIFACT = PRE_ARTIFACT;
        this.POST_ARTIFACT = POST_ARTIFACT;
        this.SEPARATOR_CHAR = SEPARATOR_CHAR;
    }
    public static HeadingType fromName(String name) {
        return switch (name) {
            case "THIN" -> HeadingType.THIN;
            case "THICK" -> HeadingType.THICK;
            case "HTML" -> HeadingType.HTML;
            case "CSS" -> HeadingType.CSS;
            case "THIN_HASH" -> HeadingType.THIN_HASH;
            case "THICK_HASH" -> HeadingType.THICK_HASH;
            default -> HeadingType.THIN;
        };
    }
}
