pipeline {
    options {
        skipDefaultCheckout(true)
    }

    agent { dockerfile true }

    stages {
        stage('Reset Workspace') {
            steps {
                deleteDir()
                sh 'ls -al'   
            }
        }

        stage('Test') {
            steps {
                sh 'node --version'
                sh 'svn --version'
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