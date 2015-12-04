module.exports = {
"CREATE DATABASE IF NOT EXISTS michelmichel;
USE michelmichel;

CREATE TABLE IF NOT EXISTS accounts (
  id int(5) NOT NULL AUTO_INCREMENT,
  name varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  firstName varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  address varchar(200) COLLATE utf8_unicode_ci NOT NULL,
  city varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  mail varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  phone int(15) NOT NULL,
  company varchar(75) COLLATE utf8_unicode_ci NOT NULL,
  password varchar(250) COLLATE utf8_unicode_ci NOT NULL,
  connected tinyint(1) NOT NULL,
  PRIMARY KEY (id),
  UNIQUE KEY id (id),
  KEY id_2 (id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=1 ;

CREATE TABLE IF NOT EXISTS mailing (
  id int(9) NOT NULL AUTO_INCREMENT,
  idCustomer int(5) NOT NULL,
  file varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  fileLink varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  sent tinyint(1) NOT NULL,
  PRIMARY KEY (id),
  UNIQUE KEY id (id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=1 ;"
};