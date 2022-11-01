function solve(json) {

    let parsed = JSON.parse(json);

    let comumnNames = Object.keys(parsed[0]);
    let values = parsed.map(obj => Object.values(obj));

    let result = '<table>\n';

    appendHeaders(comumnNames);
    appendValuse(values);

    result += '</table>'

    function appendHeaders(comumnNames) {
        result += `    <tr>`

        for (let comumnName of comumnNames) {
            result += `<th>${comumnName}</th>`
        }

        result += `</tr>\n`;
    }

    function appendValuse(values) {

        for (let value of values) {
            result += `    <tr>`;
            result += `<td>${escape(value[0])}</td><td>${escape(value[1])}</td>`;
            result += `</tr>\n`;
        }
    }

    function escape(value) {
        return value.toString().replace('<', '&lt;').replace('>', '&gt;');
    }
    console.log(result);
}
solve('[{"Name":"Stamat","Score":5.5},{"Name":"Rumen","Score":6}]');