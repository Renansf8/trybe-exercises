-- Crie um TRIGGER , que a cada nova inserção feita na tabela carros , defina o valor da coluna 
-- data_atualizacao para o momento do ocorrido, a acao para 'INSERÇÃO' e a coluna disponivel_em_estoque para 1 .
SELECT * FROM betrybe_automoveis.carros;
USE betrybe_automoveis;
DELIMITER $$

CREATE TRIGGER carro_insert
	BEFORE INSERT ON carros
    FOR EACH ROW
BEGIN
	SET NEW.data_atualizacao = NOW(),
    NEW.acao = 'INSERÇÃO',
    NEW.disponivel_em_estoque = 1;
END $$

DELIMITER ;
