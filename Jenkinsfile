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
            }
        }

        stage('setup - MR') {
            when { branch 'MR-*' }
            steps {
                script {
                    GIT_BRANCH = env.CHANGE_BRANCH
                    echo "MR: ${GIT_BRANCH}"
                }
            }
        }

        stage('setup - PR') {
            when { branch 'PR-*' }
            steps {
                script {
                    GIT_BRANCH = env.CHANGE_BRANCH
                    echo "PR: ${GIT_BRANCH}"
                }
            }
        }

        stage('Git Checkout') {
            steps {
                script {
                    if (env.BRANCH_NAME) {
                        GIT_BRANCH = env.BRANCH_NAME
                    } else if (env.CHANGE_BRANCH) {
                        GIT_BRANCH = env.CHANGE_BRANCH
                    }
                }
                echo "GIT_BRANCH: ${GIT_BRANCH}"
                sh 'printenv'
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