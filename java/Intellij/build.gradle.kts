plugins {
    id("application")
    id("org.springframework.boot") version "2.7.8"


}
apply(plugin = "application")
group = "org.example"
version = "1.0-SNAPSHOT"

repositories {
    mavenCentral()
}

dependencies {
    testImplementation(platform("org.junit:junit-bom:5.9.1"))
    testImplementation("org.junit.jupiter:junit-jupiter")
}
application {
   // mainClass = "polymorphism.polymorphismTest"
//  mainClass = "polymorphism.BankName"
//    mainClass = "abstractclass.Animaltest"
//    mainClass = "pkginterface.InterfaceDemo"
//    mainClass = "pkginterface.Interface"
//    mainClass = "interfacestu.InterfaceMain"
    mainClass = "arraylists.ArrayListIterator"
}


tasks.named<JavaExec>("run") {
    standardInput = System.`in`
}

