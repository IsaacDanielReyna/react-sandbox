pipeline {

    agent {
        label 'master'
    }

    options {
        skipDefaultCheckout(true)
    }

    environment {
        GIT_BRANCH = 'master'
        CREDENTIALS = 'github-isaacdanielreyna'
        GIT_URL = 'https://github.com/IsaacDanielReyna/react-sandbox.git'
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
                script {
                    if (env.BRANCH_NAME) {
                        GIT_BRANCH = env.BRANCH_NAME
                    }
                }
                git branch: "${GIT_BRANCH}",
                credentialsId: "${CREDENTIALS}",
                url: "${GIT_URL}"
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
            echo 'Reset Workspace'
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