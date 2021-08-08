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
                git branch: "${BRANCH_NAME}",
                credentialsId: 'github-isaacdanielreyna',
                url: 'https://github.com/IsaacDanielReyna/react-sandbox.git'
            }
        }

        stage('Test') {
            steps {
                echo 'Testing Stage'
                echo "BRANCH_NAME: ${BRANCH_NAME}"
                echo "BRANCH: ${BRANCH}"
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