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
            # Remove existing heroku remote if it exists
            git remote remove heroku || true
            
            # Add heroku remote with the correct authentication format
            git remote add heroku https://heroku:$HEROKU_API_KEY@git.heroku.com/atelier-nocodes.git
            
            # Push to heroku
            git push heroku HEAD:main --force
            '''
        }
    }
}
       
    }
}