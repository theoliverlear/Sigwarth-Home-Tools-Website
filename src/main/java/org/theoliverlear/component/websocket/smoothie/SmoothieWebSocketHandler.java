package org.theoliverlear.component.websocket.smoothie;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.theoliverlear.communication.request.SmoothieRequest;
import org.theoliverlear.communication.response.SmoothieResponse;
import org.theoliverlear.component.websocket.WebSocketHandler;
import org.theoliverlear.model.smoothie.Smoothie;

@Component
public class SmoothieWebSocketHandler extends WebSocketHandler<SmoothieRequest, SmoothieResponse> {
    @Autowired
    private Smoothie smoothie;

    @Override
    public SmoothieResponse makeResponse(SmoothieRequest request) {
        this.smoothie.getAppleJuice().setWeight(request.getAppleJuiceWeight());
        this.smoothie.getYogurt().setWeight(request.getYogurtWeight());
        this.smoothie.getFrozenFruit().setWeight(request.getFrozenFruitWeight());
        this.smoothie.setNumDrinks(request.getNumDrinks());
        return new SmoothieResponse(this.smoothie);
    }
}