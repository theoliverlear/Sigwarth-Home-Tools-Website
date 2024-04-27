package org.theoliverlear.controller;

import com.google.common.util.concurrent.RateLimiter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import java.util.concurrent.TimeUnit;

@Controller
public class HomeController {
    private final RateLimiter RATE_LIMITER;
    @Autowired
    public HomeController(RateLimiter rateLimiter) {
        this.RATE_LIMITER = rateLimiter;
    }
    @RequestMapping("/")
    public String home() {
        boolean isRateLimited = this.RATE_LIMITER.tryAcquire(500, TimeUnit.MILLISECONDS);
        if (isRateLimited) {
            return "home";
        } else {
            return "too-many-requests";
        }
    }
}
