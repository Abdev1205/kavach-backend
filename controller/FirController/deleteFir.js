import Fir from "../../models/fir.js";

export const deleteFir = async (req, res) => {
  try {
    const FIR = await Fir.findById(req.params.id);

    if(!FIR){
      return res.status(404).json({
        success: false,
        message:"FIR Not found"
      });
    }

    await FIR.deleteOne();

    res.status(201).json({
      success: true,
      message: "FIR Deleted Succesfully",
    });
  } catch (error) {
    console.log(error);
  }
};
