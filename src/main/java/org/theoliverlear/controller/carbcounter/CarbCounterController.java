package org.theoliverlear.controller.carbcounter;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.theoliverlear.communication.request.CarbItemRequest;
import org.theoliverlear.communication.response.TotalCarbResponse;
import org.theoliverlear.model.carbcounter.CarbItem;

@RestController
@RequestMapping("/api/carb-counter")
public class CarbCounterController {
    @RequestMapping("/count")
    public synchronized ResponseEntity<TotalCarbResponse> count(@RequestBody CarbItemRequest request) {
        CarbItem carbItem = new CarbItem(request.getServingWeight(), request.getUnitsMeasured(), request.getCarbsPerServing());
        return new ResponseEntity<>(new TotalCarbResponse(carbItem.getCarbs()), HttpStatus.OK);
    }
}
