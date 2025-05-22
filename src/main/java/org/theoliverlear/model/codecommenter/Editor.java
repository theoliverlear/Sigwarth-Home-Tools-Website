package org.theoliverlear.model.codecommenter;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class Editor {
    private int indentLevel;
    private int indentSize;
    private int lineLength;
    //===========================-Constructors-===============================
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
}
