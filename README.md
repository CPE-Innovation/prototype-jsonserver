# JSON Server Mock API

## Description
Ce projet est une simple configuration d'un serveur JSON Server pour simuler une API distante. Il est utilisé dans le cadre d'une démonstration pour servir des données statiques nécessaires au prototype de frontend et backend.

## Fonctionnalités

- Simule une API RESTful pour tester les appels réseau des projets frontend et backend.
- Fournit des endpoints pour accéder et manipuler les données (CRUD).
- Permet une configuration rapide et légère sans nécessiter de backend complet.

## Installation et Exécution

### Prérequis
- Node.js 16+

### Installation

1. Clonez ce dépôt :
   ```bash
   git clone <url-du-repo>
   cd <nom-du-repo>
   ```

2. Installez JSON Server :
   ```bash
   npm install -g json-server
   ```

3. Lancez le serveur JSON :
   ```bash
   json-server --watch db.json --port 3000
   ```

4. Accédez à l'API dans votre navigateur ou via un outil comme Postman :
   ```
   http://localhost:3000
   ```

### Exemple d'Endpoints

- **GET /projects** : Récupère la liste des projets.
- **POST /projects** : Ajoute un nouveau projet.
- **DELETE /risks/:id** : Supprime un risque par son ID.

## Données Statistiques (Fichier `db.json`)

Voici un exemple de données contenues dans le fichier `db.json` :

```json
{
    "messages": [
        {
            "channel": "Alpha_launch",
            "id": "c3fd5098-8169-4742-930e-d866e108ecfc",
            "from": {
                "user": {
                    "id": "user-127",
                    "displayName": "Eve Garnier",
                    "email": "eve.garnier@example.com"
                }
            },
            "body": {
                "contentType": "text",
                "content": "The interface is receiving positive feedback causing frustration among stakeholders."
            },
            "timestamp": "2024-11-03T23:05:18Z"
        },
}
```
