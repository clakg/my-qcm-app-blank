/*
* 1- un reducer est une fonction qui prend en parametre le STATE et une ACTION qui renvoie le STATE mis à jour "nextstate".
*    au sein du reducer on traite l'ACTION reçu : OBJET avec TYPE + VALEUR
*
* 2- on créée une action avec un type ADD_PROFIL pour ajouter un profil et une value qui serait le profil
*    const action = {type:"ADD_PROFIL", value:profil}
*    pour avoir plusieurs action, on utilise un switchcase
*
* 3- on créée un nouveau state grace à la variable 'let nextstate'
*    et on aura un objet nextState avec une copie du State actuel
*    auquel on va appliquer la modification sur le profil ACTION.value
*    (pour le respect de l'immuabilité pour ne jamais modifier directement le State)
*
*    on créée un reducer par fonctionnalité : reducerProfil , reducerLaundry
*/

function reducerProfil(state, action) {
    let nextState

    switch (action.type) {
        case 'ADD_PROFIL':
            nextState = {
            ...state,
            profil:action.value
            }
            return nextState

        case 'UPDATE_PROFIL':
            nextState = {
                ...state,
                profil:action.value
            }
            return nextState

        case 'DELETE_PROFIL':
            nextState = {
                ...state,
                profil:action.value
            }
            return nextState

        default:
            return nextState
    }
}
