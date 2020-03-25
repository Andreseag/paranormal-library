import React from 'react';

const Filter = () => (
    <form className="filter">
        <input type="text" placeholder="Nombre, autor..." className="filter__search" />
        <div className="filter__options">
            <small>105 de 107 libros</small>
            <label htmlFor="filterCheckbox">
                <input
                    type="checkbox"
                    id="filterCheckbox" 
                />
                <small>Solo disponibles</small>
            </label>
        </div>
    </form>
);

export default Filter;
