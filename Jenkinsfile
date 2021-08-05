pipeline {
    options {
        skipDefaultCheckout(true)
    }

    agent any

    stages {
        stage('Reset Workspace') {
            steps {
                deleteDir()
                sh 'ls -al'   
            }
        }

        stage('Build') {
            steps {
                app = docker.build("isaacdanielreyna/react-sandbox")
            }
        }
    }

    post {
        always {
            sh 'ls -al'
        }
        
        success {
            deleteDir()
            sh 'ls -al'
        }

        unsuccessful {
            echo 'Job Failed'
        }
    }
}