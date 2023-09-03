import React, { useState } from 'react';
import { FaSlidersH } from 'react-icons/fa';
import CardProd from './layout/CardProd';
import { motion } from 'framer-motion';
import useFetchData from '../hooks/useFetchData';
import { catUrlWp } from '../../config';
import { Preloader } from './utils/Preloader';

const Productos = () => {
  const { loading, result, error } = useFetchData(`${catUrlWp}/?per_page=100`);
  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedName, setSelectedName] = useState('');

  if (loading) return <Preloader />;

  const categories = result.filter((categoria) => categoria.parent === 0);

  // Filtrar por país
  const handleCountryFilter = (e) => {
    const selectedCountry = e.target.value;
    setSelectedCountry(selectedCountry);

    // Filtrar categorías por país
    const filteredByCountry = categories.filter(
      (categoria) => categoria.meta.pais === selectedCountry
    );

    // Aplicar filtro adicional por nombre si se ha seleccionado uno
    if (selectedName) {
      const filteredByName = filteredByCountry.filter((categoria) =>
        categoria.name.toLowerCase().includes(selectedName.toLowerCase())
      );
      setFilteredCategories(filteredByName);
    } else {
      setFilteredCategories(filteredByCountry);
    }
  };

  // Filtrar por nombre
  const handleNameFilter = (e) => {
    const selectedName = e.target.value;
    setSelectedName(selectedName);

    // Filtrar categorías por nombre
    const filteredByName = categories.filter((categoria) =>
      categoria.name.toLowerCase().includes(selectedName.toLowerCase())
    );

    // Aplicar filtro adicional por país si se ha seleccionado uno
    if (selectedCountry) {
      const filteredByCountry = filteredByName.filter(
        (categoria) => categoria.meta.pais === selectedCountry
      );
      setFilteredCategories(filteredByCountry);
    } else {
      setFilteredCategories(filteredByName);
    }
  };

  // Determinar qué categorías mostrar (filtradas o todas)
  const displayedCategories = selectedCountry || selectedName ? filteredCategories : categories;

  return (
    <div className='main'>
      <div className='headerProd'>
        {/* ... */}
        <div className='boxfilter'>
          <h3>
            <i>
              <FaSlidersH />
            </i>{' '}
            Filtrar por
          </h3>
          <div className='boxItemFilters pt-3'>
            <select name='' id='pais' onChange={handleCountryFilter} value={selectedCountry}>
              <option value=''>PAÍS</option>
              {/* Aquí mapeas los países únicos de las categorías */}
              {Array.from(
                new Set(categories.map((categoria) => categoria.meta.pais))
              ).map((pais, i) => (
                <option value={pais} key={i}>
                  {pais}
                </option>
              ))}
            </select>
            <select name='' id='marca' onChange={handleNameFilter} value={selectedName}>
              <option value=''>MARCA</option>
              {/* Aquí mapeas los nombres únicos de las categorías */}
              {Array.from(
                new Set(categories.map((categoria) => categoria.name))
              ).map((name, i) => (
                <option value={name} key={i}>
                  {name}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
      <section>
        <div className='container p-0 pb-5'>
          <div className='row pt-5 gridCards'>
            {displayedCategories.map((categoria, index) => (
              <CardProd key={index} link='/categoria' categoria={categoria} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Productos;
