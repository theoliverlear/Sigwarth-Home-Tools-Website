package org.theoliverlear.controller.carbcounter;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.theoliverlear.communication.CarbItemRequest;
import org.theoliverlear.communication.TotalCarbResponse;
import org.theoliverlear.model.CarbItem;

import java.util.concurrent.CopyOnWriteArrayList;

@Controller
@RequestMapping("/carb-counter")
public class CarbCounterController {
    CopyOnWriteArrayList<CarbItem> carbItems = new CopyOnWriteArrayList<>();
    @RequestMapping("/")
    public String carbCounter(Model model) {
        model.addAttribute("totalCarbs", 0);
        model.addAttribute("carbOutput", 0);
        return "carb-counter";
    }
    @RequestMapping("/add")
    public synchronized ResponseEntity<String> add(@RequestBody CarbItemRequest request) {
        CarbItem carbItem = new CarbItem(request.getServingWeight(), request.getUnitsMeasured(), request.getCarbsPerServing());
        this.carbItems.add(carbItem);
        return new ResponseEntity<>("Item added", HttpStatus.CREATED);
    }
    @RequestMapping("/total")
    public synchronized ResponseEntity<TotalCarbResponse> total() {
        System.out.println(carbItems);
        System.out.println(this.carbItems.size());
        int totalCarbs = 0;
        for (CarbItem carbItem : this.carbItems) {
            totalCarbs += carbItem.getCarbs();
        }
        return new ResponseEntity<>(new TotalCarbResponse(totalCarbs), HttpStatus.OK);
    }
    @RequestMapping("/update/{itemNumber}")
    public synchronized ResponseEntity<String> update(@RequestBody CarbItemRequest request, @PathVariable int itemNumber) {
        System.out.println("Item number: " + itemNumber);
        System.out.println("Size before: " + this.carbItems.size());
        int index = itemNumber - 1;
        CarbItem carbItem = this.carbItems.get(index);
        carbItem.setServingWeight(request.getServingWeight());
        carbItem.setWeightUnits(request.getUnitsMeasured());
        carbItem.setCarbsPerServing(request.getCarbsPerServing());
        carbItem.calculateCarbs();

        System.out.println("Size after: " + this.carbItems.size());
        return new ResponseEntity<>("Item updated", HttpStatus.OK);
    }
    @RequestMapping("/remove/{itemNumber}")
    public synchronized ResponseEntity<String> removeItem(@PathVariable int itemNumber) {
        int index = itemNumber - 1;
        if (index >= 0 && index < this.carbItems.size()) {
            this.carbItems.remove(index);
            return new ResponseEntity<>("Item removed", HttpStatus.OK);
        } else {
            return new ResponseEntity<>("Item not found", HttpStatus.NOT_FOUND);
        }
    }
    @RequestMapping("/count")
    public synchronized ResponseEntity<TotalCarbResponse> count(@RequestBody CarbItemRequest request) {
        CarbItem carbItem = new CarbItem(request.getServingWeight(), request.getUnitsMeasured(), request.getCarbsPerServing());
        this.carbItems.add(carbItem);
        return new ResponseEntity<>(new TotalCarbResponse(carbItem.getCarbs()), HttpStatus.OK);
    }
}
