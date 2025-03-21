// Quiz! Brian Suarez
 function esEquilibrada(expresion){
    let nuevaExpresion = [];
    let esEquilibrada = false;
    let incluyeLlaves = false;
    let incluyeCuadradas = false;
    let incluyeParentesis = false;
    // console.log(expresion, nuevaExpresion);
    for(let i = 0; i < expresion.length; i++){
        // console.log(expresion[i]);
        if (expresion[i] === "{" || expresion[i] === "}" || expresion[i] === "(" || expresion[i] === ")" || expresion[i] === "[" || expresion[i] === "]"){
            nuevaExpresion.push(expresion[i])
        }
    }
        if(nuevaExpresion.includes("{") && nuevaExpresion.includes("}")){
            // console.log("incluye las {}");
            incluyeLlaves = true;
        }else{
            console.log("NO incluye las {}");
            return esEquilibrada
        }
        if(nuevaExpresion.includes("[") && nuevaExpresion.includes("]")){
            // console.log("incluye las []");
            incluyeCuadradas = true
        }else{
            console.log("NO incluye las []");
            return esEquilibrada
        }
        if(nuevaExpresion.includes("(") && nuevaExpresion.includes(")")){
            // console.log("incluye las ()");
            incluyeParentesis = true
        }else{
            console.log("NO incluye las ()");
            return esEquilibrada
        }
        if(incluyeLlaves == true || incluyeCuadradas == true || incluyeParentesis == true){
            
        }
}
let expresion1= "{hola[soy(expres}io]n)";
let expresion2 = "{hola[soyexpres}io]n)";
if (esEquilibrada(expresion1) == true){
    console.log("La expresion NO es Equilibrada");
}else{
    console.log("La expresion NO es Equilibrada");
}
console.log(esEquilibrada(expresion1)); // True
console.log(esEquilibrada(expresion2)); // false