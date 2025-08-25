const express=require("express")
const router=express.Router({mergeParams:true})

const {createFaculty,updateFaculty,deleteFaculty,renderFaculties}=require("../controllers/faculty");

router.route("/")
 .get(renderFaculties)
 .post(createFaculty)
 .put(updateFaculty)
 .delete(deleteFaculty)



 module.exports = router;