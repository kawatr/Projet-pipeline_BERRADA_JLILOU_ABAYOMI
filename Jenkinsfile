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
        withCredentials([string(credentialsId: 'HEROKU_API_KEY', variable: 'HEROKU_API_KEY')]) {
            sh '''
            echo "machine git.heroku.com" > ~/.netrc
            echo "login heroku" >> ~/.netrc
            echo "password $HEROKU_API_KEY" >> ~/.netrc
            chmod 600 ~/.netrc
            git push https://git.heroku.com/atelier-nocodes.git HEAD:main --force
            '''
        }
    }
}
       
    }
}