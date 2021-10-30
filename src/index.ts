import {Application, Container, Sprite, TextStyle, Text} from 'pixi.js'

const app = new Application({
    width: 800,
    height: 600,
    resolution: window.devicePixelRatio || 1
});

document.body.appendChild(app.view);

const container = new Container();

app.stage.addChild(container);


const sprite = Sprite.from('../sprite/generic.png');

container.addChild(sprite);

const style = new TextStyle({
    fontFamily: 'Arial',
    fontSize: 20,
    fontWeight: 'bold',
    fill: '#ffffff'
})

const text = new Text('Center', style);
text.anchor.set(0.5);
sprite.addChild(text);