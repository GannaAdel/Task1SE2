const express = require('express');
const app = express();
const students = [
    { name: 'Ganna', age: 20 },
    { name: 'Nada', age: 22 },
    { name: 'Menna', age: 16 },
    { name: 'Mohamed', age: 12 }
  ];
const studentFunc = (request , response) => {

    let result = "<ul>";
    for(let i=0; i<students.length ; i++){
        const student=students[i];
        result += '<li>' +student.name +'</li>';
    }
     result += "</ul>";
     response.send(result);
};

app.get('/students',studentFunc);

app.listen(3000);