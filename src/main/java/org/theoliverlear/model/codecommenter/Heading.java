package org.theoliverlear.model.codecommenter;

public class Heading {
    //============================-Variables--================================
    private HeadingType headingType;
    private String text;
    private boolean isIndentCorrected;
    private Editor editor;
    private String comment;
    //==========================-Constructors--===============================
    public Heading() {
        this.headingType = HeadingType.THIN;
        this.text = "";
        this.isIndentCorrected = true;
        this.editor = new Editor();
    }
    public Heading(HeadingType headingType, String text, boolean isIndentCorrected) {
        this.headingType = headingType;
        this.text = text;
        this.isIndentCorrected = isIndentCorrected;
        this.editor = new Editor();
    }
    public Heading(String text, Editor editor) {
        this.headingType = HeadingType.THIN;
        this.text = text;
        this.isIndentCorrected = true;
        this.editor = editor;
    }
    public Heading(HeadingType headingType, String text, Editor editor) {
        this.headingType = headingType;
        this.text = text;
        this.isIndentCorrected = true;
        this.editor = editor;
    }
    //=============================-Methods--=================================

    //---------------------------Build-Comment--------------------------------
    public void buildComment() {
        String titleHeader = this.text;
        titleHeader = normalizeHeadingText(titleHeader);
        titleHeader = "-" + titleHeader + "-";
        int headingLength = titleHeader.length();
        int lineLength = this.editor.getLineLength();
        lineLength -= this.headingType.PRE_ARTIFACT.length();
        lineLength -= this.headingType.POST_ARTIFACT.length();
        int titleAdjust = lineLength - headingLength;
        int indentAdjust = this.editor.getIndentLevel() * this.editor.getIndentSize();
        titleAdjust -= indentAdjust;
        int left;
        int right;
        if (this.isIndentCorrected) {
            left = titleAdjust / 2;
            right = titleAdjust - left;
            left -= (indentAdjust / 2);
            right += (indentAdjust / 2);
        } else {
            left = titleAdjust / 2;
            right = titleAdjust - left;
        }
        String leftThinHeading = this.headingType.SEPARATOR_CHAR.repeat(left);
        String rightThinHeading = this.headingType.SEPARATOR_CHAR.repeat(right);
        this.concatCommentParts(leftThinHeading, titleHeader, rightThinHeading);
    }
    //-----------------------Concat-Comment-Parts-----------------------------
    public void concatCommentParts(String leftHeading, String titleHeader,
                                   String rightHeading) {
        this.comment = "%s%s%s%s%s".formatted(this.headingType.PRE_ARTIFACT, leftHeading,
                                              titleHeader, rightHeading,
                                              this.headingType.POST_ARTIFACT);
    }
    //----------------------Normalize-Heading-Text----------------------------
    public static String normalizeHeadingText(String heading) {
        heading = heading.trim();
        String[] words = heading.split(" ");
        StringBuilder normalizedHeading = new StringBuilder();
        for (int i = 0; i < words.length; i++) {
            String word = words[i];
            if (!word.isEmpty()) {
                normalizedHeading.append(word.substring(0, 1).toUpperCase());
                normalizedHeading.append(word.substring(1).toLowerCase());
                if (i < words.length - 1) {
                    normalizedHeading.append("-");
                }
            }
        }
        return normalizedHeading.toString();
    }
    //=============================-Getters-==================================
    public HeadingType getHeadingType() {
        return this.headingType;
    }
    public String getText() {
        return this.text;
    }
    public boolean getIsIndentCorrected() {
        return this.isIndentCorrected;
    }
    public Editor getEditor() {
        return this.editor;
    }
    public String getComment() {
        return this.comment;
    }
    //=============================-Setters-==================================
    public void setHeadingType(HeadingType headingType) {
        this.headingType = headingType;
    }
    public void setText(String text) {
        this.text = text;
    }
    public void setIsIndentCorrected(boolean isIndentCorrected) {
        this.isIndentCorrected = isIndentCorrected;
    }
    public void setEditor(Editor editor) {
        this.editor = editor;
    }
    public void setComment(String comment) {
        this.comment = comment;
    }
}
