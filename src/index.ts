import {Application, Container, Sprite, TextStyle, Text} from 'pixi.js'

// Init Application
const app = new Application({
    width: 800,
    height: 600,
    resolution: window.devicePixelRatio || 1
});

// Add to DOM
document.body.appendChild(app.view);

// Container 1
const container = new Container();
app.stage.addChild(container);

// Container 2
const container2 = new Container();
app.stage.addChild(container2);

// Sprite 1
const sprite = Sprite.from('../sprite/generic.png');
container.addChild(sprite);

// Sprite 2
const sprite2 = Sprite.from('../sprite/generic.png');
sprite2.x = app.screen.width / 2;
container2.addChild(sprite2);

// Text style
const style = new TextStyle({
    fontFamily: 'Arial',
    fontSize: 20,
    fontWeight: 'bold',
    fill: '#ffffff'
});

// Text 1 - Top Left
const text = new Text('Center', style);
sprite.addChild(text);

// Text 2 - Center ?
const text2 = new Text('Center', style);
text2.anchor.set(0.5);
sprite2.addChild(text2);