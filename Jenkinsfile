pipeline {
    options {
        skipDefaultCheckout(true)
    }

    agent {
        label 'master'
    }

    stages {
        stage('Reset Workspace') {
            steps {
                deleteDir()
                sh 'ls -al'   
            }
        }

        stage('Test') {
            steps {
                echo 'Testing Stage'
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