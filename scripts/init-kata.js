const fs = require('fs');
const {spawnSync} = require("child_process");
const spawn = require('child_process').spawn;

const nameOfNewKata = process.argv[2];
if (!nameOfNewKata) {
    console.error('Undefined name of kata');
    process.exit(1);
}

const path = `${__dirname}/../${nameOfNewKata}`;
if (fs.existsSync(path)) {
    console.error(`directory ${nameOfNewKata} already exists`);
    process.exit(2);
}

fs.mkdirSync(path);


spawnSync('npm', ['init', '-y'], {
    cwd: path,
    shell: true,
    stdio: 'inherit'
});

spawnSync('npm', ['install', '-D',
    "@types/jest",
    "jest",
    "ts-jest",
    "typescript"
], {
    cwd: path,
    shell: true,
    stdio: 'inherit'
});

spawnSync('npx', ['tsc', '--init'], {
    cwd: path,
    shell: true,
    stdio: 'inherit'
});

spawnSync('npx', ['jest', '--init'], {
    cwd: path,
    shell: true,
    stdio: 'inherit'
});

spawnSync('npm', ['init', '@eslint/config'], {
    cwd: path,
    shell: true,
    stdio: 'inherit'
});

