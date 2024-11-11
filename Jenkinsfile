pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/pramadani/Karali'
            }
        }
        stage('Deploy') {
            steps {
                sh '''
                docker compose build
                docker compose down
                docker compose up -d
                '''
            }
        }
    }
}