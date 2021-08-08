pipeline {

    agent {
        label 'master'
    }

    options {
        skipDefaultCheckout(true)
    }

    environment {
        GIT_BRANCH = 'master'
        CREDENTIALS_GITHUB = 'github-isaacdanielreyna'
        CREDENTIALS_DOCKER = 'docker-isaacdanielreyna'
        GIT_URL = 'https://github.com/IsaacDanielReyna/react-sandbox.git'
        IMAGE = 'isaacdanielreyna/react-sandbox'
        TAG = '0.1.0'
    }

    stages {
        stage('Reset Workspace') {
            steps {
                deleteDir()
                sh 'ls -al'
                sh 'printenv'
            }
        }

        stage('setup - PR') {
            when { branch 'PR-*' }
            steps {
                script {
                    echo "BRANCH_NAME: ${BRANCH_NAME}"
                    echo "env.BRANCH_NAME: ${env.BRANCH_NAME}"
                    // CHANGE_BRANCH=pull-request-test
                    // CHANGE_URL=https://github.com/IsaacDanielReyna/react-sandbox/pull/2
                    // BRANCH_NAME=PR-2
                }
                echo "BRANCH_NAME: ${BRANCH_NAME}"
                echo "env.BRANCH_NAME: ${env.BRANCH_NAME}"
            }
        }

        stage('Git Checkout') {
            steps {
                script {
                    if (env.CHANGE_BRANCH) {
                        GIT_BRANCH = env.CHANGE_BRANCH
                    } else if (env.BRANCH_NAME) {
                        GIT_BRANCH = env.BRANCH_NAME
                    }
                }
                echo "GIT_BRANCH: ${GIT_BRANCH}"
                git branch: "${GIT_BRANCH}",
                credentialsId: "${CREDENTIALS_GITHUB}",
                url: "${GIT_URL}"
            }
        }

        stage('Build Image') {
            steps {
                sh "docker build -t ${IMAGE}:${TAG} ."
            }
        }

        stage('Push Image') {
            steps {
                withCredentials([usernamePassword(credentialsId: "${CREDENTIALS_DOCKER}", usernameVariable: 'USERNAME', passwordVariable: 'PASSWORD')]) {
                    sh 'echo $PASSWORD | docker login -u $USERNAME --password-stdin'
                }
                sh 'docker push ${IMAGE}:${TAG}'

            }
        }
    }

    post {
        always {            
            //  Delete images
            sh 'docker image prune --force --all'
            
            // Logout from docker
            sh 'docker logout'

            echo 'Delete the following files'
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