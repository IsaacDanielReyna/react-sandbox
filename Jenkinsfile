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
        CONTAINER_NAME = 'react-sandbox'
        EXTERNAL_PORT = '1337'
        INTERNAL_PORT = '80'
    }

    parameters {
        booleanParam(name: 'BUILD', defaultValue: true, description: 'Builds the image')
        booleanParam(name: 'DEPLOY', defaultValue: false, description: 'Deploys the container')
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
                    // Determine if feature branch or a pull request
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
            when { expression { return params.BUILD }}
            steps {
                sh "docker build -t ${IMAGE}:${TAG} ."
            }
        }

        stage('Push Image') {
            when { expression { return params.BUILD }}
            steps {
                withCredentials([usernamePassword(credentialsId: "${CREDENTIALS_DOCKER}", usernameVariable: 'USERNAME', passwordVariable: 'PASSWORD')]) {
                    sh 'echo $PASSWORD | docker login -u $USERNAME --password-stdin'
                }
                sh 'docker push ${IMAGE}:${TAG}'
            }
        }

        stage('Deploy Container') {
            when { expression { return params.DEPLOY }}
            steps {
                sh './deploy.sh ${IMAGE} ${TAG} ${CONTAINER_NAME} ${EXTERNAL_PORT} ${INTERNAL_PORT}'
            }
        }
    }

    post {
        always {
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