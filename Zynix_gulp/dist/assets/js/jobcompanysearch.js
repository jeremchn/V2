(function () {
    "use strcit";

    /* non linear slider */
    var nonLinearSlider = document.getElementById('nonlinear');
    noUiSlider.create(nonLinearSlider, {
        connect: true,
        behaviour: 'tap',
        start: [100, 500],
        range: {
            // Starting at 500, step the value by 500,
            // until 4000 is reached. From there, step by 1000.
            'min': [0],
            'max': [1000]
        }
    });
    var nodes = [
        document.getElementById('lower-value'), // 0
        document.getElementById('upper-value')  // 1
    ];
    // Display the slider value and how far the handle moved
    // from the left edge of the slider.
    nonLinearSlider.noUiSlider.on('update', function (values, handle, unencoded, isTap, positions) {
        nodes[handle].innerHTML = values[handle];
    });
})();