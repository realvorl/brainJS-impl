export function resultsOf(year) {
    let sessions = [];
    year.forEach(element => {
        let session = {
            input: takeInputFrom(element),
            output: element.numbers.map(e => e / 100)
        }
        sessions.push(session);
    });
    return sessions;
}

function takeInputFrom(draw) {
    let dateComponents = draw.drawDate.split(".");
    let ret = {
        count: draw.drawNo,
        day: parseInt(dateComponents[0]),
        month: parseInt(dateComponents[1]),
        year: parseInt(dateComponents[2])
    }
    return ret;
}