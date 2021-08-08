pipeline {

    agent {
        label 'master'
    }

    options {
        skipDefaultCheckout(true)
    }

    stages {
        stage('Reset Workspace') {
            steps {
                deleteDir()
                sh 'ls -al'   
            }
        }

        stage('Git Checkout') {
            steps {
                checkout scm
                // git branch: "${BRANCH_NAME}",
                // credentialsId: '',
                // url: ''
            }
        }

        stage('Test') {
            steps {
                echo 'Testing Stage'
                sh 'ls -hal'
                echo "BRANCH: ${BRANCH_NAME}"
            }
        }
    }

    post {
        always {
            // Show workspace contents before and after deletion
            sh 'ls -hal'
            deleteDir()
            sh 'ls -hal'
        }
        
        success {
            echo "Job Succeded"
        }

        unsuccessful {
            echo 'Job Failed'
        }
    }
}