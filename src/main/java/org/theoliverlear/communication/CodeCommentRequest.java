package org.theoliverlear.communication;

import lombok.Data;

@Data
public class CodeCommentRequest {
    String type;
    String textContent;
    int indentLevel;
    public CodeCommentRequest(String type, String textContent, int indentLevel) {
        this.type = type;
        this.textContent = textContent;
        this.indentLevel = indentLevel;
    }
}
