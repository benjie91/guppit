package io.guppit.guppitserver

import org.springframework.boot.SpringApplication
import org.springframework.boot.autoconfigure.SpringBootApplication

@SpringBootApplication
class GuppitApplication

fun main(args: Array<String>) {
    SpringApplication.run(GuppitApplication::class.java, *args)
}