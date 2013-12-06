var Spike = function (options) {
    
  var parent = this,
      animation,
      el;
  
  this.settings = {
    rate: 100,
    loop: false,
    image: 'images/spike.gif',
    randomSpeed: false
  }
  
  for (key in options) {
    parent.settings[key] = options[key];
  }
  
  this.init = function () {
    
    el = document.createElement('img');
    
    el.src = parent.settings.image;
    el.style.position = 'absolute';
    el.style.top = Math.random() * 90 + '%';
    el.left = -200;
    el.style.left = el.left + 'px';
    
    
    document.body.appendChild(el);
    
    parent.start();
  }
  
  this.start = function () {
    
    var speed = parent.settings.randomSpeed ? Math.random() * parent.settings.rate : parent.settings.rate;
    
    animation = setInterval(function () {
      if (el.left < (window.innerWidth +200) ) {        
        
        el.style.left = el.left + 'px';
        el.left++;
        
      } else {
        
        parent.destroy();
        
        if (parent.settings.loop) {
          parent.init();
        }
        
      }
    }, speed );  
  }
  
  this.destroy = function () {
    clearInterval(animation);
    document.body.removeChild(el);
    
  }
  
  this.init();
}