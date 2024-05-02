package org.theoliverlear.model.codecommenter;

public class Editor {
    private int indentLevel;
    private int indentSize;
    private int lineLength;
    //----------------------------Constructors--------------------------------
    public Editor() {
        this.indentLevel = 0;
        this.indentSize = 4;
        this.lineLength = 78;
    }
    public Editor(int indentSize, int lineLength) {
        this.indentLevel = 0;
        this.indentSize = indentSize;
        this.lineLength = lineLength;
    }
    public Editor(int indentLevel, int indentSize, int lineLength) {
        this.indentLevel = indentLevel;
        this.indentSize = indentSize;
        this.lineLength = lineLength;
    }
    //------------------------------Getters-----------------------------------
    public int getIndentLevel() {
        return this.indentLevel;
    }
    public int getIndentSize() {
        return this.indentSize;
    }
    public int getLineLength() {
        return this.lineLength;
    }
    //------------------------------Setters-----------------------------------
    public void setIndentLevel(int indentLevel) {
        this.indentLevel = indentLevel;
    }
    public void setIndentSize(int indentSize) {
        this.indentSize = indentSize;
    }
    public void setLineLength(int lineLength) {
        this.lineLength = lineLength;
    }
}
