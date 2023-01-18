import React, { Fragment } from 'react';
import ListeVoyage from '../View/ListeVoyage';
import VoyageListeViewModel from '../viewModel/VoyageListeViewModel';

export const VoyageModelDestination = () => {

    const ViewModel = VoyageListeViewModel();

    const rajouterVoyage = (voyage)=>{
       
        ViewModel.ajouterVoyage(voyage);
       console.log(voyage)
    }
    return (
      <Fragment>
       
        <ListeVoyage
        listeVoyages = {ViewModel.voyages}
        retirerVoyage={ViewModel.supprimerVoyage}
        ajouterVoyage={rajouterVoyage}
        />
      </Fragment>
           

    );
}

