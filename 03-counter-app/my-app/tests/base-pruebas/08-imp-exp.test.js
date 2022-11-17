import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp";
import heroes from "../../src/data/heroes";

describe('Pruebas en 08-imp', () => { 
    test('getHeroeById debe retornar un heroe por ID', () => { 
        const id = 1;

        const heroe = getHeroeById(id);

        expect(heroe).toEqual(
            {
                id: 1,
                name: 'Batman',
                owner: 'DC'
            }
        )
    })

    test('getHeoreById debe retornar undefined si no existe', () => { 
        
        const id = 100;
        const hero = getHeroeById(id);

        expect(hero).toBe( undefined );
     })

     test('getHeroeByOwner debe retornar el heroe por el owner', () => { 

        const owner = 'DC'
        const heroe =  getHeroesByOwner(owner);

        // expect(heroe).toEqual(
        //     [
        //         {
        //             id: 1,
        //             name: 'Batman',
        //             owner: 'DC'
        //         },
        //         {
        //             id: 3,
        //             name: 'Superman',
        //             owner: 'DC'
        //         },
        //         {
        //             id: 4,
        //             name: 'Flash',
        //             owner: 'DC'
        //         }
        //     ]
        // )

        expect(heroe).toEqual(heroes.filter( (heroe) => heroe.owner === owner ))

        expect(heroe.length).toBe(3);
      })
 })