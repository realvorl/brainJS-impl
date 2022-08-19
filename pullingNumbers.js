// https://www.lottozahlenonline.de/statistik/beide-spieltage/lottozahlen-archiv.php?j=1955
draw = document.getElementById("gewinnzahlen")
draw = Array.from(draw.children)
year = [];
draw = draw.filter(c => c.tagName == "DIV")
for (let index = 1; index < draw.length; index++) {
    let thisDraw = draw[index]
    let pulledDraw = {
        "drawNo": parseInt(thisDraw.children[0].innerHTML),
        "drawDate": thisDraw.children[1].innerHTML,
        "numbers":
            [
                parseInt(thisDraw.children[2].innerHTML),
                parseInt(thisDraw.children[3].innerHTML),
                parseInt(thisDraw.children[4].innerHTML),
                parseInt(thisDraw.children[5].innerHTML),
                parseInt(thisDraw.children[6].innerHTML),
                parseInt(thisDraw.children[7].innerHTML)
            ],
        "super": parseInt(thisDraw.children[8].innerHTML)
    }
    year.push(pulledDraw);
}
console.log(JSON.stringify(year))
