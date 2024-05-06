plugins {
    kotlin("jvm") version "1.9.23"
    id("application")
}
apply(plugin = "application")
group = "org.example"
version = "1.0-SNAPSHOT"

repositories {
    mavenCentral()

}

dependencies {
    testImplementation(kotlin("test"))
}

tasks.test {
    useJUnitPlatform()
}
application {
    // mainClass = "polymorphism.polymorphismTest"
//  mainClass = "polymorphism.BankName"
//    mainClass = "abstractclass.Animaltest"
//    mainClass = "pkginterface.InterfaceDemo"
//    mainClass = "pkginterface.Interface"
//    mainClass = "interfacestu.InterfaceMain"
    mainClass = "org.example.MainKt"
}

kotlin {
    jvmToolchain(17)
}