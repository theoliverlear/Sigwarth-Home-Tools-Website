import * as bootstrap from 'bootstrap';
import 'jquery-touchswipe';
import {loadPage} from "./globalScript";

$(document).ready(function() {
    if (loadPage(document.body, 'home')) {
        $('#features-section').swipe({
            swipe: function (event, direction, distance, duration, fingerCount, fingerData) {
                if (direction == 'left') $(this).carousel('next');
                if (direction == 'right') $(this).carousel('prev');
            },
            allowPageScroll: 'vertical'
        });
        new bootstrap.Carousel(document.getElementById('features-section'));
    }
});
