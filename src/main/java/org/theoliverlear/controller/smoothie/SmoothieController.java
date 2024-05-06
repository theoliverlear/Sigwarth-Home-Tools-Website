package org.theoliverlear.controller.smoothie;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.theoliverlear.communication.SmoothieRequest;
import org.theoliverlear.communication.SmoothieResponse;
import org.theoliverlear.model.smoothie.Smoothie;

@Controller
@RequestMapping("/smoothie")
public class SmoothieController {
    private Smoothie smoothie = new Smoothie();
    @RequestMapping("/")
    public String smoothie() {
        return "smoothie";
    }
    @RequestMapping("/update")
    public ResponseEntity<SmoothieResponse> updateSmoothie(@RequestBody SmoothieRequest smoothieRequest) {
        this.smoothie.getAppleJuice().setWeight(smoothieRequest.getAppleJuiceWeight());
        this.smoothie.getYogurt().setWeight(smoothieRequest.getYogurtWeight());
        this.smoothie.getFrozenFruit().setWeight(smoothieRequest.getFrozenFruitWeight());
        this.smoothie.setNumDrinks(smoothieRequest.getNumDrinks());
        return new ResponseEntity<>(new SmoothieResponse(this.smoothie), HttpStatus.OK);
    }
}
