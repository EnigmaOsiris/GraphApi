import mongoose from 'mongoose';

export async function connect(params) {
    try {
        await mongoose.connect('mongodb://localhost/mongodbgraphql', {
            useNewUrlParser: true
        })
        console.log('>>>db is connected');
    } catch(e)  {
        console.log("no se pudo conectar"+e);
    }
}

