const { getHeroeByIdAsync } = require("../../src/base-pruebas/09-promesas");

describe('Pruebas en 09-promesas', () => { 
    test('getHeroesByIdAsync retorna la promesa del heroe', (done) => { 
        
        const id = 1;

        getHeroeByIdAsync(id)
        .then( hero => {
            expect(hero).toEqual(
                {
                    id: 1,
                    name: 'Batman',
                    owner: 'DC'
                }
            );
            done();
        })

     })
 })