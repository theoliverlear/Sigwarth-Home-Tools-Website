package org.theoliverlear.component.websocket.salad;

import org.springframework.stereotype.Component;
import org.theoliverlear.communication.request.SaladRequest;
import org.theoliverlear.communication.response.SaladResponse;
import org.theoliverlear.component.websocket.WebSocketHandler;
import org.theoliverlear.model.salad.Salad;


@Component
public class SaladWebSocketHandler extends WebSocketHandler<SaladRequest, SaladResponse> {

    @Override
    public SaladResponse makeResponse(SaladRequest request) {
        Salad salad = new Salad(request.getLettuceGrams());
        return new SaladResponse(
                salad.getLettuceGrams(),
                salad.getPepperoniGrams(),
                salad.getCheeseGrams(),
                salad.getCroutonsGrams(),
                salad.getDressingGrams(),
                salad.getCarbs()
        );
    }
}