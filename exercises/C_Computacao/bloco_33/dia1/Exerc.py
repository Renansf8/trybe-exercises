# Exercício 1: Em um contexto de orientação a objetos, como podemos definir o que são mensagens e qual a sua importância?

# Resposta da 1: De acordo com o conteúdo, uma mensagem é uma das responsabilidades que um objeto pode ter, sendo utilizada para invocar um comportamento. Quando uma mensagem é enviada a um objeto, o mesmo pode ou não alterar seu estado. É importante, pois orientação a objetos é sobre objetos e sua comunicação. E essa comunicação entre os objetos é feita através de mensagens.

# Exercício 2: Para exercitar nossa capacidade de abstração, vamos modelar algumas partes de um software de geometria. Como poderíamos modelar um objeto retângulo?

class Square():
    def __init__(self, side):
        self.side = side

    def calc_area():
        return self.side * self.side

    def calc_per():
        return self.side * 4


# Exercício 3: E como poderíamos definir um círculo? Qual seu nome, atributos e comportamentos?
class Circle():
    def __init__(self, raio):
        self.raio = raio

    def calc_are():
        return 3.14 * (raio ** raio)

    def calc_per():
        return 2 * 3.14 * self.raio

# Exercício 4: Vamos mudar um pouco nosso contexto para um sistema de vendas de uma cafeteria. Como podemos abstrair um pedido composto por vários itens? Qual seu nome, atributos e comportamentos?

class Item:
    def __init__(self, nome, preco):
        self.nome = nome
        self.preco = preco

    def alterar_preco(self, novo_preco):
        self.preco = novo_preco

class Pedido:
    def __init__(self, cliente, itens_consumidos, forma_de_pagar, desconto):
        self.cliente = cliente
        self.itens_consumidos = itens_consumidos
        self.forma_de_pagar = forma_de_pagar
        self.desconto = desconto

    def calc_total(self):
        total = 0
        for item in self.itens_consumidos:
            total = total + item.preco
    
        return total

    def calcular_total_com_descontos(self):
        return self.calc_total() - self.desconto

sanduba = Item('X-tudo', 16.9)
guarana = Item('Guarana', 5.9)
fritas = Item('Fritas crocantes', 10.9)

pedido_mesa_1 = Pedido('Cristiano', [sanduba, guarana, fritas], 'Cartao', 0.1)

print(pedido_mesa_1.calcular_total_com_descontos())
print(pedido_mesa_1.forma_de_pagar)

# Exercício 5: Notou que os pilares da orientação a objetos começam a manifestar a medida que fizemos nossos exercícios de modelagem? Que tal agora então modelarmos uma televisão?
class Televisao:
    def __init__(self, tamanho_em_polegadas):
        self.volume = 5
        self.canal = 21
        self.taxa_de_aumento_de_volume = 2
        self.tamanho = tamanho_em_polegadas
        self.ligada = False

    def aumentar_volume(self):
        self.volume += self.taxa_de_aumento_de_volume

    def diminuir_volume(self):
        self.volume -= self.taxa_de_aumento_de_volume

    def modificar_canal(self, novo_canal):
        self.canal = novo_canal

    def ligar_ou_desligar(self):
        self.ligada = not self.ligada

tv_da_sala = Televisao(42)
tv_da_sala.ligar_ou_desligar()
print(tv_da_sala.ligada)