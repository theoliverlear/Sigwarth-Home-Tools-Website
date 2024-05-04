package org.theoliverlear.controller.codecommenter;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.theoliverlear.communication.CodeCommentRequest;
import org.theoliverlear.model.codecommenter.CommentBuilder;
import org.theoliverlear.model.codecommenter.HeadingType;


@RequestMapping("/code-commenter")
@Controller
public class CodeCommenterController {
    CommentBuilder commentBuilder = new CommentBuilder();
    @RequestMapping("/")
    public String index() {
        return "code-commenter";
    }
    @RequestMapping("/generate")
    public ResponseEntity<String> generate(@RequestBody CodeCommentRequest codeCommentRequest) {
        HeadingType headingType = HeadingType.fromName(codeCommentRequest.getType());
        String textContent = codeCommentRequest.getTextContent().trim();
        int indentLevel = codeCommentRequest.getIndentLevel();
        if (indentLevel > 5) {
            indentLevel = 5;
        } else if (indentLevel < 0) {
            indentLevel = 0;
        }
        this.commentBuilder.buildComment(headingType, textContent, indentLevel);
        return new ResponseEntity<>(this.commentBuilder.getComment(), HttpStatus.OK);
    }
}
