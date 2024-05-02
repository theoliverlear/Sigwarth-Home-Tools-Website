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
}
