package com.microsoft.webappjava;

import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@EnableAutoConfiguration
@Controller
public class RootController {

    @GetMapping("/")
    public String root() {
        return "root";
    }
}
