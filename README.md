# Projet de Prévision Météo

Ce projet est une application de prévision météo développée en utilisant React. L'objectif de cette application est de fournir aux utilisateurs des informations météorologiques précises et à jour pour une localisation spécifique.

## Fonctionnalités

- Affichage de la prévision météo actuelle comprenant la température, l'humidité, la vitesse du vent, etc.
- Prévisions à plusieurs jours comprenant les températures minimales et maximales, les conditions météorologiques prévues, etc.
- Possibilité de rechercher des prévisions météo pour différentes localisations.
- Interface utilisateur conviviale et réactive.
- Affichage des icônes météorologiques correspondant aux conditions actuelles et prévues.

## Prérequis

Avant de commencer, assurez-vous d'avoir les éléments suivants installés :

- Node.js : [Télécharger et installer Node.js](https://nodejs.org)
- npm : npm est le gestionnaire de paquets par défaut pour Node.js et sera installé automatiquement avec Node.js.

## Installation

1. Clonez ce dépôt de code sur votre machine locale :

   ```bash
   git clone https://github.com/waffokom/weather-react-app.git
   ```

2. Accédez au répertoire du projet :

   ```bash
   cd weather-app
   ```

3. Installez les dépendances du projet en exécutant la commande suivante :

   ```bash
   npm install
   ```

## Configuration

Pour utiliser l'API de prévision météo, vous devez obtenir une clé d'API gratuite auprès d'un fournisseur de services météorologiques. Dans ce projet, nous utilisons l'API OpenWeatherMap.

1. Rendez-vous sur [OpenWeatherMap](https://openweathermap.org/) et créez un compte gratuit.
2. Une fois connecté, générez votre clé d'API.
3. Copiez la clé d'API générée.

Dans le répertoire du projet, créez un fichier `.env.local` et ajoutez la clé d'API comme suit :

```plaintext
REACT_APP_API_KEY=YOUR_API_KEY
```

Remplacez `YOUR_API_KEY` par la clé d'API que vous avez générée.

## Utilisation

Pour lancer l'application, exécutez la commande suivante dans le répertoire du projet :

```bash
npm start
```

Cela démarrera l'application en mode développement et ouvrira automatiquement une fenêtre de navigateur avec l'URL `http://localhost:3000`.

## Contribuer

Les contributions sont les bienvenues ! Si vous souhaitez contribuer à ce projet, veuillez suivre les étapes suivantes :

1. Fork ce dépôt de code.
2. Créez une branche pour vos fonctionnalités ou corrections de bugs : `git checkout -b ma-branche`
3. Faites les modifications nécessaires et committez les changements : `git commit -am "Ajouter une nouvelle fonctionnalité"`
4. Poussez les modifications vers votre dépôt forké : `git push origin ma-branche`
5. Créez une pull request pour proposer vos modifications.

## Auteurs

- [Daniel Prince Kom Waffo ](https://github.com/waffokom)

## Licence

Ce projet est sous licence MIT. Vous pouvez consulter le fichier [LICENSE](LICENSE) pour plus de détails.

---

Nous espérons que cette application de prévision météo vous sera utile ! Si vous avez des questions ou des suggestions, n'hésitez pas à nous contacter.

Merci d'utiliser notre application !
