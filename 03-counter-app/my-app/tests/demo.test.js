describe('Pruebas en DemoComponent', () => { 
    test('Esta prueba no debe fallar', () => { 
        if (0 === 1){
            throw new Error(' No se puede dividir entre cero');
        }
     })
    
    test('Prueba de espacios en blanco', () => { 
        // 1. Inicializacion
    
        const message1 = ' Hola mundo';
    
        // 2. Estimulo
    
        const message2 = message1.trim();
    
    
        //3. Observar el comportamiento esperado
        expect(message1).toBe(message2);
        })
    
 })
