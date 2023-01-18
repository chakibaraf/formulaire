
import { useState } from 'react'

export const VoyageListeViewModel = () => {
    
    const [voyages,setVoyage] = useState([
      {ville:"amiens", datedepart:"2023-01-19", datearrivee: '2023-02-19', personne: '6' },
      {ville:"lille", datedepart:"2023-01-19", datearrivee: '2023-02-19', personne: '3' },
      {ville:"amiens", datedepart:"2023-01-19", datearrivee: '2023-02-19', personne: '6' },
    ]);

   const ajouterVoyage = (voyage)=>{
    console.log(voyage)
      setVoyage((prev )=>{
        return [...prev,voyage]
      });

    };
    const supprimerVoyage = (city) =>{
      setVoyage(voyages.filter(v => v.ville !== city ))
      console.log(city)
         

    }

  return {voyages,ajouterVoyage,supprimerVoyage}
}


export default VoyageListeViewModel;