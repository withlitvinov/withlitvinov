pipeline {
    agent {
        docker {
            image 'node:lts'
        }
    }
    stages {
        stage('Lint') {
            steps {
                sh 'corepack enable'
                sh 'corepack prepare pnpm@latest-9 --activate'
                sh 'pnpm install'
                sh 'pnpm exec eslint .'
            }
        }
        stage('Build') {
            steps {
                sh 'corepack enable'
                sh 'corepack prepare pnpm@latest-9 --activate'
                sh 'pnpm install'
                sh 'pnpm build'
            }
        }
    }
    post {
        success {
            archiveArtifacts artifacts: 'build/**, dist/**, public/**, .output/**, .next/**, .docusaurus/**', fingerprint: true, onlyIfSuccessful: true
        }
    }
}