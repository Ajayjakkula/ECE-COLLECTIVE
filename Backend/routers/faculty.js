const express=require("express")
const router=express.Router({mergeParams:true})

const {createFaculty,updateFaculty,deleteFaculty,renderFaculties}=require("../controllers/faculty");

router.get("/", renderFaculties);
router.post("/", createFaculty);
router.put("/:id", updateFaculty);
router.delete("/:id", deleteFaculty);


 module.exports = router;