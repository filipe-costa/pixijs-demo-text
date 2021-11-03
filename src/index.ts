import {Application, Container, Sprite, TextStyle, Text, Loader} from 'pixi.js'

// Init Application
const app = new Application({
    width: 800,
    height: 600,
    resolution: window.devicePixelRatio || 1
});

// Add to DOM
document.body.appendChild(app.view);

const loader = new Loader();
loader.add(['../sprite/generic.png'])
    .load(() => {
        // Container 1
        // const container = new Container();
        // app.stage.addChild(container);

        // Container 2
        const container2 = new Container();
        app.stage.addChild(container2);

        // // Sprite 1
        // const sprite = Sprite.from('../sprite/generic.png');
        // container.addChild(sprite);

        // Sprite 2
        const sprite2 = Sprite.from('../sprite/generic.png');
        container2.addChild(sprite2);

        // Text style
        const style = new TextStyle({
            fontFamily: 'Arial',
            fontSize: 20,
            fontWeight: 'bold',
            fill: '#ffffff',
            align: 'center'
        });

        // Text 1 - Top Left
        // const text = new Text('Center', style);
        // sprite.addChild(text);

        // Text 2 - Center ?
        const text2 = new Text('Center', style);
        sprite2.addChild(text2);
        text2.anchor.set(0.5);
        sprite2.anchor.set(0.5);
        sprite2.x = sprite2.width / 2;
        sprite2.y = sprite2.height / 2;

        console.log(`sprite2: ${sprite2.width}, ${sprite2.height}`);
        console.log(`container2: ${container2.width}, ${container2.height}`);
        console.log(`text2: ${text2.width}, ${text2.height}`);
    })

