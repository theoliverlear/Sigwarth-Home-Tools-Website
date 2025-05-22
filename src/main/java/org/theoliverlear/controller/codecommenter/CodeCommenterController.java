package org.theoliverlear.controller.codecommenter;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.theoliverlear.communication.request.CodeCommentRequest;
import org.theoliverlear.model.codecommenter.CommentBuilder;
import org.theoliverlear.model.codecommenter.HeadingType;

@RequestMapping("/api/code-commenter")
@RestController
public class CodeCommenterController {
    CommentBuilder commentBuilder;
    @Autowired
    public CodeCommenterController(CommentBuilder commentBuilder) {
        this.commentBuilder = commentBuilder;
    }

    @RequestMapping("/generate")
    public ResponseEntity<String> generate(@RequestBody CodeCommentRequest codeCommentRequest) {
        HeadingType headingType = HeadingType.fromName(codeCommentRequest.getType());
        String textContent = codeCommentRequest.getTextContent().trim();
        int indentLevel = codeCommentRequest.getIndentLevel();
        this.commentBuilder.buildComment(headingType, textContent, indentLevel);
        return new ResponseEntity<>(this.commentBuilder.getComment(), HttpStatus.OK);
    }
}