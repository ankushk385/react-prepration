let str = "abcabcdefasrta";

let freq = {};
let ch;
for (let i = 0; i < str.length; i++) {
  ch = str[i];
  if (freq[ch]) {
    freq[ch]++;
  } else {
    freq[ch] = 1;
  }
}
console.log(freq);
