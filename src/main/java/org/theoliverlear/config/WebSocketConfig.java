package org.theoliverlear.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.socket.config.annotation.*;
import org.springframework.web.socket.server.support.DefaultHandshakeHandler;
import org.theoliverlear.component.websocket.codecommenter.CodeCommenterWebSocketHandler;
import org.theoliverlear.component.websocket.salad.SaladWebSocketHandler;
import org.theoliverlear.component.websocket.smoothie.SmoothieWebSocketHandler;

@Configuration
@EnableWebSocket
public class WebSocketConfig implements WebSocketConfigurer {
    private final SaladWebSocketHandler saladWebSocketHandler;
    private final CodeCommenterWebSocketHandler codeCommenterWebSocketHandler;
    private final SmoothieWebSocketHandler smoothieWebSocketHandler;
    @Autowired
    public WebSocketConfig(SaladWebSocketHandler saladWebSocketHandler,
                           CodeCommenterWebSocketHandler codeCommenterWebSocketHandler,
                           SmoothieWebSocketHandler smoothieWebSocketHandler) {
        this.saladWebSocketHandler = saladWebSocketHandler;
        this.codeCommenterWebSocketHandler = codeCommenterWebSocketHandler;
        this.smoothieWebSocketHandler = smoothieWebSocketHandler;
    }

    @Override
    public void registerWebSocketHandlers(WebSocketHandlerRegistry registry) {
        registry.addHandler(this.saladWebSocketHandler, "/ws/salad")
                .addHandler(this.codeCommenterWebSocketHandler, "/ws/code-commenter")
                .addHandler(this.smoothieWebSocketHandler, "/ws/smoothie")
                .setAllowedOrigins("*")
                .setHandshakeHandler(new DefaultHandshakeHandler());
    }
}
