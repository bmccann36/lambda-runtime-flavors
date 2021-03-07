
## build for regular JVM
`./gradlew build`

## build as native image
`./gradlew build -Dquarkus.package.type=native -Dquarkus.native.container-build=true`

## deploy jvm version
`sam deploy -t build/sam.jvm.yaml -g`

## deploy jvm version
`sam deploy -t build/sam.native.yaml -g`

## push an update
```bash
sam deploy --template-file build/sam.jvm.yaml --stack-name jvm-quarkus --capabilities CAPABILITY_IAM
#or
sam deploy --template-file build/sam.native.yaml --stack-name quarkus-native --capabilities CAPABILITY_IAM
```