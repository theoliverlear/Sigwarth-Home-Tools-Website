import * as bootstrap from 'bootstrap';
import 'jquery-touchswipe';
import {loadPage} from "./globalScript";

$(document).ready(function() {
    if (loadPage(document.body, 'home')) {
        let carousel = new bootstrap.Carousel(document.getElementById('features-section'));
        $('#features-section').swipe({
            swipe: function (event, direction, distance, duration, fingerCount, fingerData) {
                if (direction == 'left') carousel.next();
                if (direction == 'right') carousel.prev();
            },
            allowPageScroll: 'vertical'
        });
    }
});
