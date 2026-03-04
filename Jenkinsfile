pipeline {
    agent any
 
    tools { nodejs 'node20' }
 
    environment {
        // 'HEROKU_API_KEY' est l'ID du credential "Secret Text" que vous avez créé dans Jenkins
        HEROKU_TOKEN = credentials('HEROKU_API_KEY')
    }
 
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
 
       stage('Deploy Heroku') {
            steps {
                withCredentials([string(credentialsId: 'HEROKU_API_KEY', variable: 'HEROKU_TOKEN')]) {
  sh '''
git push https://apikey:"$HEROKU_TOKEN"@git.heroku.com/atelier-nocodes.git HEAD:refs/heads/main --force  '''
}
            }
        }
       
    }
}