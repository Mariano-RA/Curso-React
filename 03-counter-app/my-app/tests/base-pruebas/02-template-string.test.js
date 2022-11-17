import { getSaludo } from "../../src/base-pruebas/base-pruebas/02-template-string"

describe('Pruebas en el archivo 02 template string', () => { 
    test('getSaludo debe retornar hola nano', () => { 

        const name = 'Nano';
        const message = getSaludo(name);

        expect(message).toBe(`Hola ${name}`)

     })
 })