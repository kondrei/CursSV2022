import jsonfile from 'jsonfile';
import fs from 'fs';

class Score {
    constructor(fileName) {
        this.fileName = fileName;
    }

    readFile() {
        if (fs.existsSync(this.fileName)) {
            return jsonfile.readFileSync(this.fileName);
        }
        else return false
    }

    addName(data) {
        if (this.readFile()) {
            let dataMerge = this.readFile().concat(data);
            jsonfile.writeFileSync(this.fileName, dataMerge);
        } else {

            jsonfile.writeFileSync(this.fileName, data);
        }
    }

    countScore() {
        let counts = {};
        this.readFile().forEach(element => { //unique key
            counts[element] = (counts[element] || 0) + 1;
        });
        return Object.fromEntries( //sort desc
            Object.entries(counts).sort((a, b) => b[1] - a[1])
        )
    }
}
export default Score;


// const score = new Score('score.json');
// score.addName('andrei')
// console.log(score.countScore())
