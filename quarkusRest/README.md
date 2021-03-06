
## build for regular JVM
`./gradlew build`

## build as native image
`./gradlew build -Dquarkus.package.type=native -Dquarkus.native.container-build=true`

## deploy jvm version
`sam deploy -t build/sam.jvm.yaml -g`

## deploy jvm version
`sam deploy -t build/sam.native.yaml -g`