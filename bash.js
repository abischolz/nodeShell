// output prompt 
process.stdout.write('prompt > ');

const pwd = require('./pwd.js');


// stdin 'data' event fires when user types in line
process.stdin.on('data', (data) => {
    const cmd = data.toString().trim();
    if (cmd === 'pwd') {
        pwd();
    } else {
        process.stdout.write('You typed: ' + cmd);
    }
    process.stdout.write('\nprompt > ');
})