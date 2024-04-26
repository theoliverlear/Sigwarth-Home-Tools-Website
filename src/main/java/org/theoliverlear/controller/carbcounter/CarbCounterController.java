package org.theoliverlear.controller.carbcounter;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.theoliverlear.communication.CarbCounterRequest;
import org.theoliverlear.model.CarbCalculator;

@Controller
@RequestMapping("/carbcounter")
public class CarbCounterController {
    @RequestMapping("/")
    public String carbCounter() {
        return "carb-counter";
    }
    @RequestMapping("/count")
    public String count(@RequestBody CarbCounterRequest request, Model model) {
        double unitsPerServing = request.getUnitsPerServing();
        double unitsMeasured = request.getUnitsMeasured();
        double carbsPerServing = request.getCarbsPerServing();
        double carbs = CarbCalculator.calculateCarbs(unitsMeasured, unitsPerServing, carbsPerServing);
        model.addAttribute("carbOutput", carbs);
        return "carb-counter";
    }
}
