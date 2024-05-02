package org.theoliverlear.controller.codecommenter;

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
    public String generate(Model model, @RequestBody CodeCommentRequest codeCommentRequest) {
        HeadingType headingType = switch (codeCommentRequest.getType()) {
            case "THIN" -> HeadingType.THIN;
            case "THICK" -> HeadingType.THICK;
            case "HTML" -> HeadingType.HTML;
            case "CSS" -> HeadingType.CSS;
            case "THIN_HASH" -> HeadingType.THIN_HASH;
            case "THICK_HASH" -> HeadingType.THICK_HASH;
            default -> HeadingType.THIN;
        };
        String textContent = codeCommentRequest.getTextContent();
        int indentLevel = codeCommentRequest.getIndentLevel();
        this.commentBuilder.buildComment(headingType, textContent, indentLevel);
        model.addAttribute("comment", this.commentBuilder.getComment());
        return "code-commenter-fragment";
    }
}
