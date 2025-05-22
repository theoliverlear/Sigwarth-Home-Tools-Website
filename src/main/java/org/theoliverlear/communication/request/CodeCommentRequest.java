package org.theoliverlear.communication.request;

import lombok.Data;

@Data
public class CodeCommentRequest {
    private String type;
    private String textContent;
    private int indentLevel;

    public CodeCommentRequest() {
        this.type = "";
        this.textContent = "";
        this.indentLevel = 0;
    }

    public CodeCommentRequest(String type, String textContent, int indentLevel) {
        this.type = type;
        this.textContent = textContent;
        this.indentLevel = indentLevel;
    }
}
