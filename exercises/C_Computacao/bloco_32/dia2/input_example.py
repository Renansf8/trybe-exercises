import random 

random_number = random.randint(1, 10)
guess = ""

while guess != random_number:
    guess = int(input("Qual é o seu palpite?"))
    print("Errrrrouuuu!!!")

print("O número sorteado era: ", guess)