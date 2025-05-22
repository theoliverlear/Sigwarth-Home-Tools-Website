package org.theoliverlear.component.websocket.codecommenter;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.theoliverlear.communication.request.CodeCommentRequest;
import org.theoliverlear.communication.response.CodeCommentResponse;
import org.theoliverlear.component.websocket.WebSocketHandler;
import org.theoliverlear.model.codecommenter.CommentBuilder;
import org.theoliverlear.model.codecommenter.HeadingType;

@Component
public class CodeCommenterWebSocketHandler extends WebSocketHandler<CodeCommentRequest, CodeCommentResponse> {
    @Autowired
    private CommentBuilder commentBuilder;

    @Override
    public CodeCommentResponse makeResponse(CodeCommentRequest request) {
        HeadingType headingType = HeadingType.fromName(request.getType());
        String textContent = request.getTextContent().trim();
        int indentLevel = request.getIndentLevel();
        this.commentBuilder.buildComment(headingType, textContent, indentLevel);
        return new CodeCommentResponse(this.commentBuilder.getComment());
    }
}