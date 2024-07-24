FROM openjdk:21
COPY --from=build /app/target/retoTecnicoFractal-0.0.1-SNAPSHOT.jar app.jar
ENTRYPOINT ["java", "-jar", "app.jar"]