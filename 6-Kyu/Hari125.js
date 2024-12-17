// Calculate Hypotenuse of Right-angled Triangle (386)

function calculateHypotenuse(a, b) {
    if(Number.isNaN(a) || Number.isNaN(b) || Math.min(a,b) <= 0 || typeof(a) != 'number' || typeof(b) != 'number'){
       throw new Error();
    }
  
    return Number(Math.sqrt(a**2+b**2).toFixed(3));   
}