# assistant-cityscoot

Ce plugin de [`assistant-plugins`](https://aymkdn.github.io/assistant-plugins/) permet de créer un radar qui vous informera au bout de x minutes s'il y a un scooter disponible dans un rayon de 250m autour de votre position.

**Attention**, vous devez avoir une version supérieure ou égale à Node v8 pour utiliser ce plugin.

## Installation

Si vous n'avez pas installé [`assistant-plugins`](https://aymkdn.github.io/assistant-plugins/), alors il faut le faire.

Ensuite, pour ajouter ce plugin :
  - Pour Windows, télécharger [`install_cityscoot.bat`](https://github-proxy.kodono.info/?q=https://raw.githubusercontent.com/jzarca01/assistant-cityscoot/master/install_cityscoot.bat&download=install_cityscoot.bat) dans le répertoire `assistant-plugins`, puis l'exécuter en double-cliquant dessus.  
  - Pour Linux/MacOS, ouvrir une console dans le répertoire `assistant-plugins` et taper :  
  `npm install assistant-cityscoot@latest --save && npm run-script postinstall`
  
## Configuration

Quatre paramètres sont obligatoires : `email` et `password`. Ils correspondent à vos identifiants [Cityscoot](https://www.cityscoot.eu). et "latitude" et "longitude"

Vous pouvez egalement parametrer "radius" le rayon de recherche, par défault il est à 250m

## Utilisation

Une applet a été créée :

- [Cherche un cityscoot dans x minutes](https://ifttt.com/applets/EiGjfApN-assistant-plugins-ajoute-les-promos-a-ma-carte-franprix) --> https://ifttt.com/applets/EiGjfApN-assistant-plugins-ajoute-les-promos-a-ma-carte-franprix
