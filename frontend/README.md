# Login credentials
username: edgar@blog.com
password: mypassword


## Deployment
Add in the root directory a file named ".env.local" with:
```
NEXT_PUBLIC_HOST            = http://54.174.233.102
NEXT_PUBLIC_PORT_LOOBACK    = 3001
```


Then run this in console:

```bash
npm run build

npm start
```
And done!


## About

En la carpeta "/pages" están las rutas que nos direccionan a las vistas (se eligió modularizarlos 
en la carpeta "/views" para no interferir con el uso especial de Next JS de la carpeta "pages"). 

El componente que implemente el layout general de la aplicación y el contexto global se encuentra
en la carpeta "/views/page".

Para el caso de las vistas de "/blogs" y "/blogs/id" se está consumiendo las apis del servidor
con el proyecto de lb4.

En la carpeta views se encuentra los componentes que serán usados desde los pages/*