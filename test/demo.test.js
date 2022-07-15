const { getUser, getSaludo } = require("./functions"); // require necesario para pasar, si lo cambiamos a es6 no sucederá

describe('Name of the group', () =>{
    test('test 1', () =>{
        expect(1===1).toBe(true)
    });
    test('test 2', () =>{
        
        //1.Arrage/Inicio
        const message1 ='Hola';
        //2.Act / Acciones (hacer "algo")
        const message2 = message1.trim()
        //3. Assert/ Observar el comportamiento esperado
        expect(message1).toBe(message2);
    });
    test('test 3 - getSaludo', () =>{
        const nombre = 'Fiamma';
        const message = getSaludo(nombre)
        expect(message).toBe(`Hola ${nombre}`)
    });
    test('test 4', () =>{
        const testUser = {
            
        uid:'ABC123',
        username:'Agosto'
        }

        const user = getUser();
        expect(testUser).toEqual(user);
    });

});