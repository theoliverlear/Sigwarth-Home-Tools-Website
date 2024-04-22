package org.theoliverlear;

import com.google.common.util.concurrent.RateLimiter;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class SigwarthHomeToolsApplication {
    public static void main(String[] args) {
        SpringApplication.run(SigwarthHomeToolsApplication.class, args);
    }
    @Bean
    public RateLimiter rateLimiter() {
        return RateLimiter.create(1.0);
    }
}
