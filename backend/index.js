const express = require('express');

const app = express();

app.post('/', (request, response) => {
    return response.json({
        evento: 'Semana OmniStack 11.0',
        aluna: 'Ester Benitah'
    })
});

app.listen(3333)