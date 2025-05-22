package org.theoliverlear.controller.smoothie;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.theoliverlear.communication.request.SmoothieRequest;
import org.theoliverlear.communication.response.SmoothieResponse;
import org.theoliverlear.model.smoothie.Smoothie;

@RestController
@RequestMapping("/api/smoothie")
public class SmoothieController {
    private Smoothie smoothie;
    @Autowired
    public SmoothieController(Smoothie smoothie) {
        this.smoothie = smoothie;
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
