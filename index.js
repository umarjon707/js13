
let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
let alphabet_reversed = "";

let alphabet_arr = [
    {
        idx: 1,
        leter: "A"
    }
]

for (let i = 0; i < alphabet.length; i++) {
    alphabet_arr.push({
        idx: i + 1,
        leter: alphabet[i]
    });
}

for (let i = alphabet.length - 1; i >= 0; i--) {
    alphabet_reversed += alphabet[i];
}

console.log(alphabet_arr);
console.log(alphabet_reversed);

