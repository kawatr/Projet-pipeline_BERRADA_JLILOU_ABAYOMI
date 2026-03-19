pipeline {
    agent any

    tools { nodejs 'node20' }

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
            echo "machine git.heroku.com login heroku password $HEROKU_API_KEY" > ~/.netrc
            git push https://git.heroku.com/atelier-nocodes.git HEAD:main --force
            '''
        }
    }
}
    }
}