var promises = []
var arrow = (start = 1, end = 15) => {
    for (var i = start; i <= end; i++) {
        const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
        promises.push(fetch(url).then(res => res.json()))  
    }}
Promise.all(promises).then(results => {
    console.log()
})
