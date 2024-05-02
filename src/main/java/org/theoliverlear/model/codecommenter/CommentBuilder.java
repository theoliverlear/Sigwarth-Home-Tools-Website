package org.theoliverlear.model.codecommenter;
//=================================-Imports-==================================

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

    //---------------------------Build-Comment--------------------------------
    public void buildComment(HeadingType headingType, String textContent, int indentLevel) {
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
