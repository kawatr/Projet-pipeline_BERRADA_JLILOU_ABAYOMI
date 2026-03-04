# Pipeline as Code – Next.js, Jenkins & Heroku

## Description

Ce projet a été réalisé dans le cadre du module **Pipeline as Code – Master 1 DevOps (EPSI Lille)**.

L’objectif est de mettre en place un **pipeline complet**, depuis la création d’une application web jusqu’à son **déploiement automatisé**.

Le projet comprend :

* le développement d’une application **Next.js**
* la gestion du code avec **Git et GitHub**
* la configuration du projet dans **VS Code**
* le **déploiement sur Heroku**
* l’automatisation du build et du déploiement avec **Jenkins**

---

# Application Next.js

L’application a été créée avec la commande :

```bash
npx create-next-app@latest
```

Une fois le projet généré, l’application peut être lancée localement avec :

```bash
npm run dev
```

Puis accessible à l’adresse :

```
http://localhost:3000
```

Cette étape permet de vérifier que l’application fonctionne correctement en local.

---

# Gestion du projet avec Git

Le projet est versionné avec **Git**.

Commandes principales utilisées :

```bash
git init
git add .
git commit -m "initial commit"
git push origin main
```

Le code source est ensuite hébergé sur **GitHub**, permettant la collaboration et le suivi des modifications.

---

# Structure du projet

Le projet contient plusieurs fichiers importants :

```
app/                # pages et composants Next.js
public/             # ressources statiques
package.json        # dépendances et scripts npm
package-lock.json   # versions exactes des dépendances
tsconfig.json       # configuration TypeScript
next.config.ts      # configuration Next.js
eslint.config.mjs   # configuration ESLint
postcss.config.mjs  # configuration PostCSS
```

Ces fichiers permettent de configurer et gérer l’application.

---

# Déploiement sur Heroku

L’application peut être déployée sur **Heroku**.

Le fichier suivant est utilisé :

```
Procfile
```

Ce fichier indique à Heroku comment démarrer l’application.

Exemple :

```
web: npm run start
```

---

# Pipeline CI/CD avec Jenkins

Un pipeline Jenkins a été mis en place afin d’automatiser le processus :

* installation des dépendances
* build de l’application
* déploiement automatique

Le pipeline est défini dans le fichier :

```
Jenkinsfile
```

Exemple simplifié :

```groovy
pipeline {
    agent any

    stages {

        stage('Install') {
            steps {
                sh 'npm ci'
            }
        }

        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }

        stage('Deploy') {
            steps {
                echo 'Deploying application...'
            }
        }
    }
}
```

---

# Technologies utilisées

* Next.js
* Node.js
* Git / GitHub
* Jenkins
* Docker
* Heroku

---

# Conclusion

Ce projet permet de comprendre les principes du **Pipeline as Code** :

* gestion du code avec Git
* développement d’une application web
* automatisation du build
* mise en place d’un pipeline CI/CD
* déploiement continu avec Jenkins.
