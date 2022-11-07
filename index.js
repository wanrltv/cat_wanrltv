const catMe = require('cat-me')

function cat() {
    for (let i = 0; i < 3; i++) {
        console.log(catMe());
    }
}

cat()