const express= require('express')
const router= express.Router()
const commentairesCtrl= require('../controllers/commentaires')
const auth= require('../middleware/auth')

// route de creation du commentaire
router.post('/:messageId/commentaires', auth, commentairesCtrl.createCommentaires);
// route de modification du commentaire
router.put('/:messageId/commentaires/:id', auth,  commentairesCtrl.modifyCommentaire );
// route de suppression du commentaire
router.delete('/:messageId/commentaires/:id', auth,  commentairesCtrl.deleteCommentaire );
// route de recuperation des commentaires
router.get('/:messageId/commentaires', auth, commentairesCtrl.getAllCommentaires);



module.exports=router