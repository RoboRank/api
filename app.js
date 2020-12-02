const express = require('express');
const cors = require('cors');
const cpp = require('compile-run').cpp;
const fs = require('fs');

const app = express();
app.use(cors());
app.use(express.json());
const port = 3001;

joint_solutions = [
    "revolute",
    "prismatic",
    "spherical",
    "revolute",
    "universal",
    "1", "5", "4"
]

cspace_solutions = [
    "S2", "E2", "T2", "S2 X S1", "E2", "E2"
]

app.post('/joints', (req, res) => {
    fs.writeFile("./test.cpp", req.body.code, function (err) {
        if (err) return console.log(err);
    });
    let resultPromise = cpp.runFile("./test.cpp");
    resultPromise
        .then(result => {
            answers = result.stdout.split("\n")
            let correct = true;
            let incorrect = []
            answers.forEach((ans, i) => {
                if (ans !== joint_solutions[i]) {
                    incorrect.push(ans);
                    correct = false;
                }
            })

            if (incorrect.length == 0) {
                incorrect.push("Congratulations, great work!");
            }

            res.json({
                correct: correct,
                incorrect: incorrect
            })
        })
        .catch(err => {
            console.log(err);
        });
})

app.post('/cspace', (req, res) => {
    fs.writeFile("./test.cpp", req.body.code, function (err) {
        if (err) return console.log(err);
    });
    let resultPromise = cpp.runFile("./test.cpp");
    resultPromise
        .then(result => {
            answers = result.stdout.split("\n")
            let correct = true;
            let incorrect = []
            answers.forEach((ans, i) => {
                if (ans !== cspace_solutions[i]) {
                    incorrect.push(ans);
                    correct = false;
                }
            })

            if (incorrect.length == 0) {
                incorrect.push("Congratulations, great work!");
            }

            res.json({
                correct: correct,
                incorrect: incorrect
            })
        })
        .catch(err => {
            console.log(err);
        });
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})