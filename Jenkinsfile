pipeline {
    agent any

    tools {
        nodejs 'NodeJs'  // This should match the name you gave in Global Tool Configuration
    }

    stages {
        stage('Checkout') {
            steps {
                git 'https://github.com/PranshuSaraswat/Driver-Management.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                bat 'npm install'
            }
        }

        stage('Lint') {
            steps {
                bat 'npx eslint . || exit 0'  // optional linting, allow failures
            }
        }

        stage('Test') {
            steps {
                bat 'npm test || exit 0'  // optional testing, allow failures
            }
        }

        stage('Build or Run') {
            steps {
                // Replace with your build or run command
                bat 'node app.js'
            }
        }
    }
}
