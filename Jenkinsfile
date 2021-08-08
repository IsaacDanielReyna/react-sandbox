pipeline {
    options {
        // skipDefaultCheckout(true)
    }

    agent {
        label 'master'
    }

    stages {
        stage('Reset Workspace') {
            steps {
                sh 'ls -al'
                deleteDir()
                sh 'ls -al'
            }
        }

        // stage('Clone Repository') {
        //     steps {
        //         git branch: 'master',
        //         credentialsId: 
        //     }
        // }

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