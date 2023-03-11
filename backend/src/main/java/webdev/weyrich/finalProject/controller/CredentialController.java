package webdev.weyrich.finalProject.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import webdev.weyrich.finalProject.repository.CredentialRepository;

@RestController
public class CredentialController {

    private final CredentialRepository credentialRepository;

    public CredentialController(CredentialRepository credentialRepository) {
        this.credentialRepository = credentialRepository;
    }

}
