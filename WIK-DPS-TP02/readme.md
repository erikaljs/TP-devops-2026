# WIK-DPS-TP01

site avec api http qui fait apparaitre les headers de la requête en json et renvoie une erreur http 404 si une requete url est invalide 

## Installation

dans le cmd cloner le repo puis installer les dépendances :

```
git clone https://github.com/erikaljs/TP-devops-2026.git
cd TP-devops-2026
npm install
```

## Compilation

```
npm run build
```

## Lancement

```
npm start
```

Le serveur démarre sur le port 3000 

## Visualisation

une fois le code lancé on peut consulter le resultat sur : 
http://localhost:3000/ping

ca renvoie les haeder http de la requete json 
si route invalide ca repond avec lerreur 404