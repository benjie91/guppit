package io.guppit.guppitserver.web

import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestParam
import org.springframework.web.bind.annotation.RestController

@RestController
class GuppitController {

    @GetMapping("/rest/")
    fun greeting(@RequestParam(value = "name", defaultValue = "World") name: String) = "Hello" + name
}

