#! /usr/bin/env node
const fs = require('fs')
//the below just tells us if we get an err (error) do something and if we get data do something else. 

fs.readFile(__dirname + '/info.json', 'utf8', function(err, data) {
    if (err) {
        console.log(err)
    } else {
        console.log(data)
        return data
    }
})