<?php declare(strict_types = 1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Migrations\AbstractMigration;
use Doctrine\DBAL\Schema\Schema;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
class Version20180609151229 extends AbstractMigration
{
    public function up(Schema $schema)
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE user DROP FOREIGN KEY FK_8D93D6492EF03101');
        $this->addSql('DROP INDEX UNIQ_8D93D6492EF03101 ON user');
        $this->addSql('ALTER TABLE user DROP information_id');
        $this->addSql('ALTER TABLE user_information ADD user_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE user_information ADD CONSTRAINT FK_8062D116A76ED395 FOREIGN KEY (user_id) REFERENCES user (id)');
        $this->addSql('CREATE UNIQUE INDEX UNIQ_8062D116A76ED395 ON user_information (user_id)');
    }

    public function down(Schema $schema)
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE user ADD information_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE user ADD CONSTRAINT FK_8D93D6492EF03101 FOREIGN KEY (information_id) REFERENCES user_information (id)');
        $this->addSql('CREATE UNIQUE INDEX UNIQ_8D93D6492EF03101 ON user (information_id)');
        $this->addSql('ALTER TABLE user_information DROP FOREIGN KEY FK_8062D116A76ED395');
        $this->addSql('DROP INDEX UNIQ_8062D116A76ED395 ON user_information');
        $this->addSql('ALTER TABLE user_information DROP user_id');
    }
}
