import express from 'express';
import morgan from 'morgan';
import compression from 'compression';
import bodyParser from 'body-parser';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import { UnknownRoutesHandler } from './middlewares/unknownRoutes.handler';
import { ExceptionsHandler } from './middlewares/exceptions.handler';
import { config } from './config'
import { FooController } from './ressources/foo/foo.controller';


const app = express();

app.set('trust proxy', 1);

app.use(morgan('tiny'))
app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());
app.use(express.json());
app.use(cors());

app.use('/v0/foo',  FooController);

/**
 * Pour toutes les autres routes non définies, on retourne une erreur
 */
app.all('*', UnknownRoutesHandler);

/**
 * Gestion des erreurs
 * /!\ Cela doit être le dernier `app.use`
 */
app.use(ExceptionsHandler);

app.listen(config.API_PORT, () => console.log('Silence, ça tourne.'));
