package webdev.weyrich.finalProject.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import webdev.weyrich.finalProject.model.Credentials;

@Repository
public interface CredentialRepository extends JpaRepository<Credentials, Long> {

}
