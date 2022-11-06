import { useState } from 'react';

export const AddCategory = ({ onNewCategory }) => {
  
  const [inputValue, setInputValue] = useState('One Punch');

  const onInputChange = ({target}) => {
    // console.log(event.target.value);
    setInputValue(target.value);
  }
  
  const onSubmit = (event) => {
    event.preventDefault();
    if( inputValue.trim().length <= 1 ) return;

    // setCategories(cat => [inputValue, ...cat]);
    onNewCategory( inputValue.trim() );
    setInputValue('');
  }
  
  return (
    <form onSubmit={onSubmit}>
      <input type='text' placeholder='Nueva Categoria' 
        value={ inputValue } 
        onChange={ onInputChange } />
    </form>
    );
}
