import React, { Fragment } from 'react'
import { useState } from 'react'


const ListeVoyage = (props) => {
    
    const [change, setChange] = useState({ ville: '', datedepart: '', datearrivee: '', personne: '' });
    const handleChange = (e) => {
        setChange({ ...change, [e.target.name]: e.target.value })
        console.log(change)
        
    }
    
        const handleDelete = (e) => {
            e.preventDefault();
            e.stopPropagation();
            props.retirerVoyage(e.target.parentNode.firstChild.textContent);
        }
    const onSubmit =(e)=>{
        e.preventDefault();
        props.ajouterVoyage(change);

    }
   
    return (
        <Fragment>
            <h1> Ma liste de voyage</h1>

            <form onSubmit={onSubmit}>
                <div>
                    <input

                        type="texte"
                        name='ville'
                        placeholder='entrer destination'
                        onChange={handleChange}>

                    </input>
                    <input

                        type='date'
                        name='datedepart'
                        onChange={handleChange}>
                    </input>
                    <input

                        type='date'
                        name='datearrivee'
                        onChange={handleChange}>
                    </input>
                    <input

                        type="number"
                        name='personne'
                        placeholder='nombre de personnes'
                        onChange={handleChange}>

                    </input>
                </div>
                <button type='submit'> ajouter </button>
            </form>

            <h3> Mes destinations :</h3>
            {props.listeVoyages && props.listeVoyages.map((voyage, index) => {
                return <li key={index}>
                    <div className='affichage'>
                        <p>{voyage.ville}</p>
                        <p> {voyage.datedepart}</p>
                        <p>{voyage.datearrivee}</p>
                        <p>{voyage.personne}</p>
                        <button onClick={handleDelete}>supprimer</button>
                    </div>
                </li>
            })}

        </Fragment>

    );
}

export default ListeVoyage;