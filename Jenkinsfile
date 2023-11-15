pipeline {
    agent {
        docker {
            image 'node:14' // You can adjust the Node.js version as needed
            args '-p 3001:3001' // Expose the necessary port
        }
    }
    
    stages {
        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }
    }
}
