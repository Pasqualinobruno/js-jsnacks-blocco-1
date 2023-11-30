/* 
Snack 4:
In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.
*/



//array sono contenuti i nomi degli invitati alla festa del grande Gatsby
const invitedsGatsby = ['luca', 'antonio', 'Francesco', 'elio', 'giuseppe'];
console.log(invitedsGatsby);
//chiedi all’utente il suo nome
const nameInvited = prompt("Qual'è il suo nome?")
console.log(nameInvited);

//comunicagli se può partecipare o no alla festa
for (let i = 0; i < invitedsGatsby.length; i++) {
    const invited = invitedsGatsby[i];
    console.log(invited);
    
    if (nameInvited === invited) {
        alert('puo entrare')
        
    } else {
        alert('non puo entrare')
    }
    
}