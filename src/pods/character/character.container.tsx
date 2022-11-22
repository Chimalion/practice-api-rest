import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import * as api from './api';
import { Lookup } from 'common/models';
import { useCharacter } from './character.hook';
export interface DetailPageParams {
  id: string;
}
export const CharacterContainer: React.FunctionComponent = () => {
  const { character, loadCharacter } = useCharacter();
  const { id } = useParams<DetailPageParams>();

  React.useEffect(() => loadCharacter(id), [id]);

  console.log(character);

  /* const handleLoadCityCollection = async () => {
    const apiCities = await api.getCities();
    setCities(apiCities);
  }; */

  /* const handleLoadHotel = async () => {
    const apiHotel = await api.getHotel(id);
    setHotel(mapHotelFromApiToVm(apiHotel));
  }; */

  /*  React.useEffect(() => {
    if (id) {
      handleLoadHotel();
    }
    handleLoadCityCollection();
  }, []); */

  /*  const handleSave = async (hotel: Hotel) => {
    const apiHotel = mapHotelFromVmToApi(hotel);
    const success = await api.saveHotel(apiHotel);
    if (success) {
      history.goBack();
    } else {
      alert('Error on save hotel');
    }
  }; */

  return (
    <>
      <h1>hola</h1>
    </>
  );
};
