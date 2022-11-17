const { getImagen } = require("../../src/base-pruebas/11-async-await")

describe('Pruebas en 11-async-API', () => { 
   test('getImagen debe retornar URL de la imagen', async () => { 

        const url = await getImagen();
        console.log(url)

        expect(typeof url).toBe('string');

    }) 
 })