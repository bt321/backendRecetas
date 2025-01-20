import express, {Request, Response} from 'express';
import routesReceta from '../routes/recetas';
class Server {
    private app: express.Application;
    private port: string;

    constructor(){
        this.app = express();
        this.port ='3001';
        this.listen();
        this.routes()
    }
    listen(){
        this.app.listen(this.port, ()=> {
            console.log(`Aplicacion corriendo en el puerto ${this.port}`);
        })
    }

    routes(){
        this.app.get('/', (req: Request, res: Response) => {
            res.json({
                msg: 'API WORKING'
            })

        })
        this.app.use('/recetas', routesReceta);

    }
    
}

export default Server;