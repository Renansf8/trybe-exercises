# Exercício 1: Crie uma função que receba dois números e retorne o maior deles.
def biggest_number(num, otherNum):
    if num > otherNum:
        return num
    return otherNum 

print(biggest_number(11, 2))

# Exercício 2: Calcule a média aritmética dos valores contidos em uma lista.
numbers = [1, 5, 8, 7, 6]
def media(list):
    total = 0
    for num in list:
        total += num
    return total

print(media(numbers) / len(numbers))

# Exercício 3: Faça um programa que, dado um valor n qualquer, tal que n > 1 , imprima na tela um quadrado feito de asteriscos de lado de tamanho n . Por exemplo:
def square(n):
    for lines in range(n):
        print(n * '*')
square(5)

 #Exercício 4: Crie uma função que receba uma lista de nomes e retorne o nome com a maior quantidade de caracteres. Por exemplo, para ["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"] , o retorno deve ser "Fernanda" .

arr = ["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"]
def biggest_name(list):
    bigger_name = ''
    for name in list:
        if len(name) > len(bigger_name):
            bigger_name = name
    return bigger_name

print(biggest_name(arr))

# Exercício 5: Considere que a cobertura da tinta é de 1 litro para cada 3 metros quadrados e que a tinta é vendida em latas de 18 litros, que custam R$ 80,00. Crie uma função que retorne dois valores em uma tupla contendo a quantidade de latas de tinta a serem compradas e o preço total a partir do tamanho de uma parede(em m²).

def total_tuple(m):
    lata = 18
    price = 80
    rend = 3 * lata
    total_price = (m / rend) * 80
    total_latas = m / rend
    return (total_price, total_latas)

print(total_tuple(180))

# Exercício 6: Crie uma função que receba os três lados de um triângulo e informe qual o tipo de triâgulo formado ou "não é triangulo" , caso não seja possível formar um triângulo.
def type_of_triangle(side1, side2, side3):
    is_triangle = (
            side1 + side2 > side3 and
            side2 + side3 > side1 and
            side1 + side3 > side2
    )
    if not is_triangle:
        return "não é triângulo"
    elif side1 == side2 == side3:
        return "equilátero"
    elif side1 == side2 or side2 == side3 or side1 == side3:
        return "isósceles"
    else:
        return "escaleno"