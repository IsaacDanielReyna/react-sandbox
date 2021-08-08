pipeline {

    agent {
        label 'master'
    }

    stages {
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