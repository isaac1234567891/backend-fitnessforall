const { dbInsertRoutine, dbUpdateRoutine } = require("../services/routine.service");

async function createRoutine( req, res ) {
    const payload = req.authUser;
    const inputData = req.body;
    console.log( inputData );       // Testing

    inputData.userId = payload.id;

    try {
        const data = await dbInsertRoutine( inputData );
        console.log( data );            // Testing
    
        res.status( 201 ).json({
            ok: true,
            data           // ECMAScript data: data ---> data
        });        
    } 
    catch ( error ) {
        console.error( error );
        res.status( 500 ).json({
            ok: false,
            msg: 'Error al crear Rutina'
        })
    }

}

async function updatedRoutinePatch (req, res) {
    const routineId = req.params.id;
    const inputData =req.body;

    try{
        const data = await dbUpdateRoutine(routineId, inputData);

        res.status(200).json({
            ok: true,
            data
        })
    }
    catch (error) {
        console.error(error);
        res.status(500).json({
            ok: false,
            msg: 'Error al actualizar una rutina por ID'
        })
    }
}

module.exports = {
    createRoutine,
    updatedRoutinePatch
}