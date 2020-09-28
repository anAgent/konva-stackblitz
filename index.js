// Import stylesheets
import './style.css';


const _data = {
    attrs: {
        width: 578,
        height: 200
    },
    className: 'Stage',
    children: [
        {
            attrs: {},
            className: 'Layer',
            children: [
                // {
                //     attrs: {
                //         x: 100,
                //         y: 100,
                //         sides: 2,
                //         radius: 90,
                //         fill: 'red',
                //         stroke: 'black',
                //         strokeWidth: 4
                //     },
                //     className: 'RegularPolygon'
                // },
                  {
                    attrs: {
                        x: 100,
                        y: 100,
                        sides: 2,
                        radius: 80,
                        fill: 'white',
                        stroke: 'black',
                        strokeWidth: 1
                    },
                    className: 'RegularPolygon'
                },
                {
                    attrs: {
                        x: 200,
                        y: 100,
                        sides: 2,
                        radius: 80,
                        fill: 'white',
                        stroke: 'black',
                        strokeWidth: 1
                    },
                    className: 'RegularPolygon'
                }
            ]
        }
    ]
};


// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

// Load Data
 var json = JSON.stringify(_data);

      // create node using json string
  var stage = Konva.Node.create(json, 'container');
