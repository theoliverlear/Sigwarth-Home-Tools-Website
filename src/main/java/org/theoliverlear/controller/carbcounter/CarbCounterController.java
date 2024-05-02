package org.theoliverlear.controller.carbcounter;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.theoliverlear.communication.CarbItemRequest;
import org.theoliverlear.communication.TotalCarbResponse;
import org.theoliverlear.model.carbcounter.CarbItem;

@Controller
@RequestMapping("/carb-counter")
public class CarbCounterController {
    @RequestMapping("/")
    public String carbCounter(Model model) {
        return "carb-counter";
    }
    @RequestMapping("/count")
    public synchronized ResponseEntity<TotalCarbResponse> count(@RequestBody CarbItemRequest request) {
        CarbItem carbItem = new CarbItem(request.getServingWeight(), request.getUnitsMeasured(), request.getCarbsPerServing());
        return new ResponseEntity<>(new TotalCarbResponse(carbItem.getCarbs()), HttpStatus.OK);
    }
}
