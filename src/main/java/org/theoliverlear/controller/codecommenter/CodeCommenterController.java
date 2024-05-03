package org.theoliverlear.controller.codecommenter;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
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
        String textContent = codeCommentRequest.getTextContent();
        int indentLevel = codeCommentRequest.getIndentLevel();
        this.commentBuilder.buildComment(headingType, textContent, indentLevel);
        return new ResponseEntity<>(this.commentBuilder.getComment(), HttpStatus.OK);
    }
}
