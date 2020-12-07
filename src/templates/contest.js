var body = document.querySelector('body');
var fontSelect = document.querySelectorAll('[data-font]');

// Load a Google font by name
var loadFont = function(font) {
  WebFont.load({
    google: {
      families: [font]
    }
  });
};

// Add an event listener for each button
// When a button is clicked, get the font name, load the font, and set the new font family
for (var i = 0; i < fontSelect.length; i++) {
  fontSelect[i].addEventListener('click', function() {
    var font = this.getAttribute('data-font');
    loadFont(font);
    body.style.fontFamily = font;
  });
}
