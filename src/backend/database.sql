create schema fullstackeletro;

use fullstackeletro;

create table tbl_produtos (
id_prod int not null PRIMARY KEY auto_increment, 
id_categoria int not null,
nome varchar(30) not null,
descr varchar(50) not null,
preco int not null,
imagem varchar(40)
);

create table tbl_categorias(
id_categoria int not null primary key auto_increment,
categoria varchar(40) not null
);

ALTER TABLE tbl_produtos ADD CONSTRAINT FOREIGN KEY (id_categoria) REFERENCES tbl_categorias (id_categoria);

insert into tbl_categorias (categoria) values 
('geladeira'),
('fogao'),
('microondas'),
('maquina de lavar'),
('lava loucas');

insert into tbl_produtos (id_categoria, nome, descr, preco, imagem)
values (1, 'geladeira', 'branca frost free', 1500, 'gelbranca.jpeg'),
(1, 'geladeira', 'inox duas portas', 3400, 'gelduasportas.jpeg'),
(1, 'geladeira','inox frost free', 2200, 'gelprata.jpeg'),
(1, 'frigobar', 'frigobar inox', 950, 'frigobar.jpeg'),
(5, 'lava louças', 'branco', 1200, 'lavalouca.jpeg'),
(4, 'maquina de lavar', 'branca 8kg', 1900, 'lavaroupa.jpeg'),
(4, 'maquina de lavar', 'tampa frontal 9kg', 1300, 'lavaroupafrente.jpeg'),
(3, 'microondas', 'inox', 600, 'micro.jpeg'),
(3, 'microondas', 'prata', 800, 'microondas.jpeg'),
(3, 'microondas', 'branco', 800, 'microbranco.jpeg'),
(2, 'fogao', 'branco', 800, 'fogaobranco.jpeg'),
(2, 'fogao', 'prata', 900, 'fogaoprata.jpeg');

create table comentarios (
nome varchar(30) not null,
email varchar(50) not null,
msg varchar(400) not null
);

create table pedidos (
 id_cliente int not null PRIMARY KEY auto_increment,
 nome_cliente varchar(30) not null, 
 endereco varchar(50) not null, 
 telefone varchar(10), 
 produto varchar(30) not null, 
 valor_uni int not null, 
 qtd int not null,
 total int as (valor_uni * qtd)
 );

insert into pedidos (nome_cliente, endereco, telefone, produto, valor_uni, qtd)
values
('Anderson Kuerme', 'Rua Monteiro Lobato, 29', '5565-8975', 'frigobar', 950, 2),
('Richard Guimaraes', 'Rua Projetada, 966', '5564-6758', 'lava louças', 1200, 3),
('Andressa Coimbra', 'Rua do Amanhã, 62', '97856-9874', 'maquina de lavar branca', 1900, 1),
('Giovana Garibaldi', 'Rua Pombal, 166', '96874-5214', 'microondas inox', 600, 1),
('Luiza Pereira', 'Rua Chique no Úrtimo, 200', '3541-8579', 'fogao branco', 800, 2),
('Isabela Flores', 'Av Itamaraty, 1350', '4521-3625', 'geladeira inox', 2200, 1),
('Zara Avedissian', 'Rua dos Andradas, 97', '97561-3264', 'microondas prata', 800, 1),
('Maria Adelaide Taliba', 'Rua Coringa, 99', '5567-9632', 'geladeira branca', 1500, 3);