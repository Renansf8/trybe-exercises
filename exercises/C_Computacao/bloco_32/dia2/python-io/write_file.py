my_file = open("arquivo.txt", mode="w")

my_file.write("nome idade\n")
my_file.write("Maria 45\n")
my_file.write("Miguel 33\n")

print("Túlio 22", file=my_file)

LINES = ["Alberto\n", "Betina\n", "João\n", "Victor\n"]
my_file.writelines(LINES)

my_file.close()