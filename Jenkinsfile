pipeline {
    agent {
        docker {
            image 'node:14'
            args '-p 3001:3001'
        }
    }

    stages {
        stage('Install Dependencies') {
            steps {
                script {
                    // Install npm dependencies
                    sh 'npm install'
                }
            }
        }

        stage('Run Node.js Application') {
            steps {
                script {
                    // Run the Node.js application
                    sh 'npm start'
                }
            }
        }

        stage('Stop Node.js Application') {
            steps {
                script {
                    // Stop the Node.js application
                    sh 'npm stop'
                }
            }
        }
    }
}

