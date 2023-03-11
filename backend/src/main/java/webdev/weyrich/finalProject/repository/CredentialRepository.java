package webdev.weyrich.finalProject.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import webdev.weyrich.finalProject.model.User;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {

}
