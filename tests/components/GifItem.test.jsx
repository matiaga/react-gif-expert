import { render, screen } from '@testing-library/react';
import { GifItem } from '../../src/components/GifItem';

describe('Pruebas en <GifIem />', () => { 
    const { id, title, url } = {
        "id": "9DU1U5YrpouTNZIOik",
        "title": "Happy I Love You GIF by Sam Omo",
        "url": "https://media1.giphy.com/media/9DU1U5YrpouTNZIOik/giphy.gif?cid=3089cb8deut3jbvu4f4x1s0ol1t9kvcx0d78hh8sv5kchoby&rid=giphy.gif&ct=g"
      };

    test('match con snapshot', () => { 
        const { container } = 
            render(<GifItem title={ title } url={ url } />);
        expect( container ).toMatchSnapshot();
     });
    
    test('debe mostrar imagen con el URL y ALT indicado', () => { 
        render(<GifItem title={ title } url={ url } />);
        // expect( screen.getByRole('img').src ).toBe(url);
        // expect( screen.getByRole('img').alt ).toBe(title);
        const { src, alt } = screen.getByRole('img');
        expect( src ).toBe( url );
        expect( alt ).toBe( title );
     });
    
    test('debe mostrar el título del componente', () => { 
        render(<GifItem title={ title } url={ url } />);
        expect(screen.getByText( title )).toBeTruthy();
     });    

 })