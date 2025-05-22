package org.theoliverlear.communication.response;

import lombok.Data;

@Data
public class CodeCommentResponse {
    private String comment;
    public CodeCommentResponse(String comment) {
        this.comment = comment;
    }
}