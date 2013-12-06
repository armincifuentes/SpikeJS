#SpikeJS

##Introduction
SpikeJS is a little piece of framework-agnostic javascript to render and animate an image flying across your browser window. Perhaps the easiest way to picture it, is if you think of Nyan Cat space-diving across your window.

##Installation
Just copy and reference `spike.js` in your HTML like so:


    <header>
      <script src="spikejs/spike.js"></script>
    </header>
    
##Initialize
Fire up SpikeJS with a simple line of code, and watch the darn thing pass by:

    var mySpike = new Spike();
    
##Options
For now, SpikeJS supports a few options, which can be passed with an object for the first (and only) argument:

    var settings = {
      rate: 10,
      loop: true
    };
    
    var mySpike = new Spike(settings);
    
Now, a list and definitions of the available options:

Option | Default value | Description
--- | --- | ---
rate | **100** | *(int)* Interval in milliseconds at wich Spike moves forward. Consider it will always move 1px at a time.
loop | **false** | *(bool)* When Spike reaches the end of the window, should a new one be created?
image | **'images/spike.gif'** | *(string)* Specifies the URL where the image to be used is located. Relative to the document.
randomSpeed | **false** | *(bool)* When a new Spike is created, should it directly use `rate` or multiply it by Math.rand()? Useful when you have many Spikes running at once and want to have them moving at different random speeds.

##Example
Clone or download this repo and take a look at `index.html`

##Gotchas and TODOs
* Its working with a static width of 200px for the source image. This is used to calculate where to draw the image at start, and when the image is off the screen.
* The vertical and horizontal position of the image are always calculated relative to the window size.
* The image is always appended to `<body>`
* The script should pause when the window has lost focus
