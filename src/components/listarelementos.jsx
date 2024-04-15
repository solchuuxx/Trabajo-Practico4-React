// components/DogImages.jsx
import { useState, useEffect } from 'react';

const UseElements = () => {
  const [element, setElement] = useState([]);
  const [loadElement, setLoadElement] = useState(false);

  useEffect(() => {
    if (loadElement){
     fetch('https://dog.ceo/api/breed/pug/images')
        .then((response) => response.json())
        .then((element) => setElement(element.message));
    }
  }, [loadElement]);

  const elementDelete = (indexDelete) => {
    setElement(element.filter((_, index) => index !== indexDelete));
  };

  return (
    <div>
      <button onClick={() => setLoadElement(true)}>Cargar Imagenes</button>
      {element.map((item, index) => (
        <div key={index}>
          <img className="div-img" src={item} alt="dog" />
          <button onClick={() => elementDelete(index)}>Eliminar</button>
        </div>
      ))}
    </div>
  );
}

export default UseElements;
