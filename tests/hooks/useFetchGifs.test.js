import { renderHook, waitFor } from '@testing-library/react';
import { useFetchGifs } from '../../src/hooks/useFetchGifs';

// jest.mock('../../src/hooks/useFetchGifs');

describe('Pruebas en hook useFetchGifs ', () => { 

   test('debe retornar el estado inicial ', () => { 

        const { result } = renderHook( () => useFetchGifs('Heart') );
        const { images, isLoading } = result.current;

        expect( images.length ).toBe(0);
        expect( isLoading ).toBeTruthy();

    });
    
    test('debe retorna un arreglo de imagenes e isLoading = false ', async() => { 

        const { result } = renderHook( () => useFetchGifs('Heart') );
        
        await waitFor(
            () => expect( resul.current.images.length ).toBeGreaterThan(0) 
        );

        const { images, isLoading } = result.current;

        expect( images.length ).toBeGreaterThan(0);
        expect( isLoading ).toBeFalsy();

        });
 });