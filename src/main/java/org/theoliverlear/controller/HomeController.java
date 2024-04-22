package org.theoliverlear.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.concurrent.Semaphore;

@Controller
public class HomeController {
    private final Semaphore SEMAPHORE;
    public HomeController(Semaphore semaphore) {
        this.SEMAPHORE = semaphore;
    }
    @RequestMapping("/")
    public String home() {
        if (this.SEMAPHORE.tryAcquire()) {
            try {
                return "home";
            } finally {
                this.SEMAPHORE.release();
            }
        } else {
            return "too-many-requests";
        }
    }
}
