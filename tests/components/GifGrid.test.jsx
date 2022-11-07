import { render, screen } from '@testing-library/react';
import { GifGrid } from '../../src/components/GifGrid';
import { useFetchGifs } from '../../src/hooks/useFetchGifs';

jest.mock('../../src/hooks/useFetchGifs');

describe('Pruebas de <GifGrid />', () => { 

    const category = 'Heart';

    test('debe mostrar loading inicialmente', () => { 

        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        });

        render(<GifGrid category={ category }/>);   
        expect( screen.getByText('Cargando...') );
        expect( screen.getByText( category ) );
     });

    test('debe mostrar items al cargar imágenes con useFetchGifs', () => { 
        
        const gifs = [
            {
                id:'ABC',
                title: 'Heart by me',
                url: 'https://localhost.imagen01.jpg'
            },
            {
                id:'123',
                title: 'Corazón 1234',
                url: 'https://localhost.corazon.jpg'
            }
        ];

        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false
        });

        render(<GifGrid category={ category }/>);
        expect( screen.getAllByRole('img').length).toBe(2);
     });
 });