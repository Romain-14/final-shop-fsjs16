# PROJET FINAL FSJS 16

- réalisation complète d'un e-commerce sur 5 jours
    - un store via redux/toolkit qui va gérer des states global
    - un HOC qui va vérifier l'accès au routes, l'état du store sur le panier, les produits, la connexion ...
    - le localstorage pour la persistance 
        - de la connexion via le token de l'utilisateur
        - du panier
    - Le panel admin:
        - gestion des :
            - produits et catégories (ajout, modification, suppression)
            - utilisateurs (ajout, modification, suppression)
        - visibilité sur les commandes
    - design propre
        - mobile first
        - utilisation d’icônes
        - ...
    - code clair commenté juste ce qu'il faut ET/OU un README
        
!!! Note
    Ce qu'il ne faut <b>PAS</b>
    - Utilisation de librairie/outil tel que :
        - Bootstrap, Formik ... 

## BASE DE DONNEES

- tables
    - user
        - id, email, password, alias, firstname, lastname, address, zip, city, signup_date, phone, uuid, isAccountValidated, role_id
    - role 
        - id, title/role_name (admin, moderator, user)
    - purchase
        - id, total_price, date, isPayed, user_id
    - purchase_detail
        - id, quantity_purchased, total_price, purchase_id, product_id
    - product
        - id, title, description, image_name, quantityInStock, price, category_id 
    - category
        - id, title


le projet échauffement peut servir de base

# HAPPY CODING


# DÉPLOIEMENT EN SINGLE-APP

## ETAPE 1
### BACK
- déplacer les éléments suivants à la racine de votre app :
    - le fichier package.json
    - le fichier package-lock.json
    - le dossier node_modules

- dans le fichier package.json, modifier les valeurs de "scripts"/"start" comme ceci:
    - "start": "node server/index.js",

## ETAPE 2
### FRONT
- supprimer le repo git créé par l'outil "CRA"
    - cd client
    - rm -rf .git

## ETAPE 3
### BACK
- dans index.js ajouter :
```js
...
app.use(express.static(path.join(__dirname + "../client/build")));
...
...
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '../client/build' + 'index.html'));
  });
```

- dans package.json ajouter l'élément suivant à "script":
```json
"build": "cd client && npm install && npm run build"
```
- toujours dans package.json ajouter la version de node utilisé pour le projet
```json
"engines": {
  "node": "16.13.2"
},
```