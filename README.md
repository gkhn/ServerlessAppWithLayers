# ServerlessAppWithLayers
Demo serverless application using AWS API Gateway, Lambda, Layers and DynamoDB built with Serverless framework

# Prerequisites

Node.js v8.10 or later.

# Installation

```
# npm install -g serverless
```

# Configuration
You need to configure your AWS credentials. You can find the information needed below;
https://serverless.com/framework/docs/providers/aws/guide/credentials/

# Usage

## Deployment
```
$ sls deploy
```

## Adding message to DynamoDB table
```
$ sls invoke -f putMessage --data '{"message":"test"}'
```

## Scanning DynamoDB table for messages
```
$ sls invoke -f getMessages
```
