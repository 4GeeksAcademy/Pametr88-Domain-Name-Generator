let pronoun = ['the', 'our'];
let adj = ['great', 'big'];
let noun = ['jogger', 'racoon', 'puedes'];
let dom = ['.com','.net','.us','.io','.er','.es'];
var counter = 0;
for(let i=0; i<pronoun.length; i++){
    for(let j=0; j< adj.length; j++){
        for(let k=0; k<noun.length; k++){
            for(let l=0; l<dom.length;l++){                                  
            console.log(`${pronoun[i]}${adj[j]}${noun[k]}${dom[l]}`);
            counter = counter+1;            
            }
        }
    }
}
console.log(counter);