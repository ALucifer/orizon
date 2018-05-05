<?php declare(strict_types = 1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Migrations\AbstractMigration;
use Doctrine\DBAL\Schema\Schema;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
class Version20180429193836 extends AbstractMigration
{
    public function up(Schema $schema)
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('CREATE TABLE game (id INT AUTO_INCREMENT NOT NULL, name VARCHAR(50) NOT NULL, slug VARCHAR(128) NOT NULL, image VARCHAR(255) DEFAULT NULL, UNIQUE INDEX UNIQ_232B318C5E237E06 (name), UNIQUE INDEX UNIQ_232B318C989D9B62 (slug), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci ENGINE = InnoDB');
        $this->addSql('CREATE TABLE user (id INT AUTO_INCREMENT NOT NULL, name VARCHAR(120) DEFAULT NULL, first_name VARCHAR(120) DEFAULT NULL, birth_date DATE DEFAULT NULL, email VARCHAR(120) DEFAULT NULL, password VARCHAR(120) DEFAULT NULL, is_active TINYINT(1) DEFAULT NULL, roles TINYTEXT DEFAULT NULL COMMENT \'(DC2Type:array)\', last_connexion DATETIME DEFAULT NULL, created_at DATETIME DEFAULT NULL, token VARCHAR(255) DEFAULT NULL, token_expire DATETIME DEFAULT NULL, UNIQUE INDEX UNIQ_8D93D649E7927C74 (email), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci ENGINE = InnoDB');
        $this->addSql('CREATE TABLE structure (id INT AUTO_INCREMENT NOT NULL, nom VARCHAR(75) NOT NULL, date_creation DATE NOT NULL, president VARCHAR(50) NOT NULL, is_blobked TINYINT(1) NOT NULL, UNIQUE INDEX UNIQ_6F0137EA6C6E55B5 (nom), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci ENGINE = InnoDB');
        $this->addSql('CREATE TABLE structure_game (id INT AUTO_INCREMENT NOT NULL, room_id INT NOT NULL, structure_id INT NOT NULL, INDEX IDX_923143AE54177093 (room_id), INDEX IDX_923143AE2534008B (structure_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci ENGINE = InnoDB');
        $this->addSql('ALTER TABLE structure_game ADD CONSTRAINT FK_923143AE54177093 FOREIGN KEY (room_id) REFERENCES game (id)');
        $this->addSql('ALTER TABLE structure_game ADD CONSTRAINT FK_923143AE2534008B FOREIGN KEY (structure_id) REFERENCES structure (id)');
    }

    public function down(Schema $schema)
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE structure_game DROP FOREIGN KEY FK_923143AE54177093');
        $this->addSql('ALTER TABLE structure_game DROP FOREIGN KEY FK_923143AE2534008B');
        $this->addSql('DROP TABLE game');
        $this->addSql('DROP TABLE user');
        $this->addSql('DROP TABLE structure');
        $this->addSql('DROP TABLE structure_game');
    }
}
