package org.theoliverlear.controller.smoothie;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/smoothie")
public class SmoothieController {
    @RequestMapping("/")
    public String smoothie() {
        return "smoothie";
    }
}
