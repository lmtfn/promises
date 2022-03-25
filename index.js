const fs = require("fs/promises");

function soma(num1, num2) {
    return new Promise(async (resolve, reject) => {
        let Type1 = typeof num1;
        let Type2 = typeof num2;
        const soma = num1 + num2;
        
        if (Type1 !== "number" || Type2 !== "number") {
            return reject(console.log("Não são números"));
        }
  
        await fs.appendFile("resultado.txt", `${num1} + ${num2} = ${soma}\n`);
        resolve(console.log(soma));
    });
  }
  
  soma(53, 17);