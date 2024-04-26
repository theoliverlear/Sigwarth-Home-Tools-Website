package org.theoliverlear.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/carbcounter")
public class CarbCounterController {
    @RequestMapping("/")
    public String carbCounter() {
        return "carb-counter";
    }
}
