
import { buscarHeroe } from './js/callbacks';
import './styles.css';

const heroeId = 'capi';

buscarHeroe( heroeId, (heroe) =>{ // Callback
    
    console.log(heroe);
} );



console.log('Fin de Programa');

