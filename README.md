# k8s-with-helm-chart-react-application

A Kubernetes deployment setup for a React application with Helm Chart support. This repository provides the infrastructure to package, deploy, and manage a React frontend using Helm, streamlining cloud-native deployment and scaling.

---

<p style={{width="700px" height="700px"}}>
   <img src="Adobe Express - file.png" alt="diagrm"/>
</p>

## Project Overview

This project demonstrates how to deploy a **React application** containerized with Docker and managed through **Kubernetes** using a **Helm chart**. Helm simplifies managing Kubernetes manifests by templating configuration files and managing releases. This repo includes:

- React frontend application source code (`frontend-app`)
- Helm chart to deploy the frontend as a Kubernetes application
- Sample Helm templates for Deployment, Service, and other Kubernetes resources

The goal is to enable developers to deploy and configure the React frontend easily on any Kubernetes cluster with Helm.

---

## Features

- Dockerized React frontend
- Helm chart for configurable, reusable application deployment
- Kubernetes resource templates (Deployment, Service, Ingress)
- Easily adaptable `values.yaml` for environment-specific configurations
- Supports scalable and maintainable cloud-native deployments

---

## Technologies Used

| Technology   | Purpose                                   |
|--------------|------------------------------------------ |
| React.js     | Frontend UI framework                     |
| Docker       | Containerization                          |
| Kubernetes   | Container orchestration and management    |
| Helm         | Kubernetes package manager and templating |
| JavaScript   | Application programming language          |

---

## Getting Started

### Prerequisites

Make sure you have the following installed:

- [Docker](https://www.docker.com/get-started)
- [Kubernetes cluster](https://kubernetes.io/docs/tasks/tools/)
- [kubectl CLI](https://kubernetes.io/docs/tasks/tools/install-kubectl/)
- [Helm CLI](https://helm.sh/docs/intro/install/)

### Installation

1. **Build Docker image**

   Navigate to the React frontend folder and build the Docker image:
   ```
    cd frontend-app
    docker build -t <your-dockerhub-username>/react-frontend:latest .
    docker push <your-dockerhub-username>/react-frontend:latest


2. **Alternatively, customize `values.yaml` for your deployment needs and then install.

---

---

## Configuration

The Helm chart’s `values.yaml` contains configurable parameters, such as:

| Parameter             | Description                       | Default                          |
|-----------------------|---------------------------------|----------------------------------- |
| `image.repository`    | Docker image repository          | `<your-dockerhub>/react-frontend` |
| `image.tag`           | Docker image tag                 | `latest`                          |
| `replicaCount`        | Number of pod replicas           | `1`                               |
| `service.type`        | Kubernetes Service type          | `ClusterIP`                       | 
| `service.port`        | Service port                    | `80`                               |

Modify `values.yaml` to tune the deployment according to your environment.
**Docker image is public so do not worry**

---

## Run
- Normally you can run the package by
  ```
  helm install <release name> frontend-application-0.1.0.tgz
  ```
- or You can edit the values.yaml file as you wish then package your application using helm
  ```
  helm package <application folder>
  ```
- Now you can run your own helm chart
- to uninstall
  ```
  helm uninstall <release name>
  ```
  

---

## Development

- The React app source is under `frontend-app/`.
- Use typical React development commands and dockerize your builds for Kubernetes deployment.
- Helm charts are located in `frontend-application/`.
- You can customize Helm templates and values to accommodate more complex deployments.

---

## Contributing

Contributions are welcome! Please open issues or pull requests for bugs, enhancements, or suggestions.

---

## License

This project is licensed under the MIT License.

---

## Author

Kavishka Sasindu  
GitHub: [KavishkaSasindu](https://github.com/KavishkaSasindu)

---

*This README was generated to provide clear project guidance for deploying a React application using Kubernetes and Helm charts.*  




