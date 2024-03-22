const readline = require('readline');
const validator = require("validator")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

pertanyaan = ["nama", "no telp", "email"]
pesanErorr = ["format nama salah", "format telephon harus indonesia", "format email salah"]
validasi = [null, validator.isMobilePhone, validator.isEmail]

function informasi(index, pertanyaan, pesanErorr, validator, output) {
    rl.question(`Masukkan ${pertanyaan[index]}:`,(hasil) => {
        if(validator[index] == null || validator[index](hasil)) {
            output.push(hasil);
            index = index + 1;
            if (index < pertanyaan.length) {
                informasi(index, pertanyaan, pesanErorr, validator, output);
            } else {
                for (let i=0; i < output.length; i = i + 1) {
                    console.log(`${output[i]}`);
                }
                rl.close();
            }
        } else {
            console.log(pesanErorr[index]);
            informasi(index, pertanyaan, pesanErorr, validator, output);
        }
    })
}

output = [];

module.exports = {informasi};