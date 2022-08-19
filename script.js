const net = new brain.NeuralNetwork({
    inputSize: 4,
    hiddenLayers: [49],
    outputSize: 6,
});

let TData = [];

import { year1955 } from './DE/1955.js'
import { year1956 } from './DE/1956.js'
import { year1957 } from './DE/1957.js'
import { year1958 } from './DE/1958.js'
import { year1959 } from './DE/1959.js'
import { year1960 } from './DE/1960.js'
import { year1961 } from './DE/1961.js'
import { year1962 } from './DE/1962.js'
import { year1963 } from './DE/1963.js'
import { year1964 } from './DE/1964.js'
import { year1965 } from './DE/1965.js'
import { resultsOf } from './training.js'

let trainingSession = [];

trainingSession = trainingSession.concat(resultsOf(year1955));
trainingSession = trainingSession.concat(resultsOf(year1955));
trainingSession = trainingSession.concat(resultsOf(year1956));
trainingSession = trainingSession.concat(resultsOf(year1957));
trainingSession = trainingSession.concat(resultsOf(year1958));
trainingSession = trainingSession.concat(resultsOf(year1959));
trainingSession = trainingSession.concat(resultsOf(year1960));
trainingSession = trainingSession.concat(resultsOf(year1961));
trainingSession = trainingSession.concat(resultsOf(year1962));
trainingSession = trainingSession.concat(resultsOf(year1963));
trainingSession = trainingSession.concat(resultsOf(year1964));
trainingSession = trainingSession.concat(resultsOf(year1965));

//console.log(trainingSession);

net.train(resultsOf(year1955).concat(resultsOf(year1956)));

const diagram = document.getElementById("diagram");
diagram.innerHTML = brain.utilities.toSVG(net);

let button = document.getElementById("submit")

button.onmouseup = function () {
    console.log(document.getElementById('count').value);
    let testInput = {
        count: parseInt(document.getElementById('count').value),
        day: parseInt(document.getElementById('day').value),
        month: parseInt(document.getElementById('month').value),
        year: parseInt(document.getElementById('year').value)
    }
    let testOutput = net.run(testInput);
    let out = Array.from(testOutput).map(e => Math.trunc(e * 100));
    console.log('input', testInput);
    console.log('output', out);
    document.getElementById("_1").value = out[0];
    document.getElementById("_2").value = out[1];
    document.getElementById("_3").value = out[2];
    document.getElementById("_4").value = out[3];
    document.getElementById("_5").value = out[4];
    document.getElementById("_6").value = out[5];
}
