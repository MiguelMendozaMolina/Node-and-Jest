import { exportAllDeclaration } from "@babel/types";
import { equal } from "assert";

describe('Prueba', () => {
    describe('suma', () => {
        /* recibe dos parametros argumentos y funcion */
        it('suma 2 numeros', () => {
            const suma = (a , b) => {
                return a + b 
            }

            expect(suma(1,2)).toEqual(3)
        })
    })

})