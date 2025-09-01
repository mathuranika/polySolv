const fs = require('fs');

/**
 * @param {object} rootData
 * @returns {number} 
 */
function parseRoot(rootData) {
    if (rootData && typeof rootData.base !== 'undefined' && typeof rootData.value !== 'undefined') {
        const base = parseInt(rootData.base);
        return parseInt(rootData.value, base);
    }
    return rootData;
}

/**
 * @param {string} filePath 
 */
function solveForC(filePath) {
    try {
       
        const jsonData = fs.readFileSync(filePath, 'utf8');
        const data = JSON.parse(jsonData);

       
        const kValue = data.keys.k;
        const polynomialDegree = kValue - 1;

        console.log(`The problem requires ${kValue} roots, indicating a polynomial of degree ${polynomialDegree}.`);

       
        const root1 = data.keys.n; 
        const root2Data = data[String(kValue)]; 
        const root2 = parseRoot(root2Data); 

        console.log(`The roots are: ${root1} and ${root2}.`);

        
        const c = root1 * root2;

        console.log(`The value of c is: ${c}`);

    } catch (error) {
        console.error("An error occurred:", error.message);
    }
}

const filePath = 'test1.json';

solveForC(filePath);