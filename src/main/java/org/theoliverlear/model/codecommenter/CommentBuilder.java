package org.theoliverlear.model.codecommenter;
//=================================-Imports-==================================

import org.springframework.stereotype.Component;

@Component
public class CommentBuilder {
    //============================-Variables-=================================
    String comment;
    Heading heading;
    //===========================-Constructors-===============================
    public CommentBuilder() {
        this.comment = "";
        this.heading = new Heading();
    }
    //=============================-Methods-==================================

    //-----------------------Get-Normalized-Indent----------------------------
    public static int getNormalizedIndent(int indentLevel) {
        if (indentLevel > 5) {
            indentLevel = 5;
        } else if (indentLevel < 0) {
            indentLevel = 0;
        }
        return indentLevel;
    }

    //---------------------------Build-Comment--------------------------------
    public void buildComment(HeadingType headingType, String textContent, int indentLevel) {
        indentLevel = getNormalizedIndent(indentLevel);
        this.heading.setHeadingType(headingType);
        this.heading.setText(textContent);
        this.heading.getEditor().setIndentLevel(indentLevel);
        this.heading.buildComment();
        this.comment = this.heading.getComment();
    }
    //=============================-Getters-==================================
    public String getComment() {
        return this.heading.getComment();
    }
}
