<?php declare(strict_types = 1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Migrations\AbstractMigration;
use Doctrine\DBAL\Schema\Schema;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
class Version20180609150956 extends AbstractMigration
{
    public function up(Schema $schema)
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('CREATE TABLE user_information (id INT AUTO_INCREMENT NOT NULL, facebook VARCHAR(100) NOT NULL, twitter VARCHAR(100) NOT NULL, twitch VARCHAR(100) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci ENGINE = InnoDB');
        $this->addSql('ALTER TABLE user ADD information_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE user ADD CONSTRAINT FK_8D93D6492EF03101 FOREIGN KEY (information_id) REFERENCES user_information (id)');
        $this->addSql('CREATE UNIQUE INDEX UNIQ_8D93D6492EF03101 ON user (information_id)');
        $this->addSql('ALTER TABLE structure ADD state LONGTEXT NOT NULL COMMENT \'(DC2Type:array)\'');
    }

    public function down(Schema $schema)
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE user DROP FOREIGN KEY FK_8D93D6492EF03101');
        $this->addSql('DROP TABLE user_information');
        $this->addSql('ALTER TABLE structure DROP state');
        $this->addSql('DROP INDEX UNIQ_8D93D6492EF03101 ON user');
        $this->addSql('ALTER TABLE user DROP information_id');
    }
}
