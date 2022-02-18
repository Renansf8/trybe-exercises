file_write = open("arquivo_write.txt", mode="w")
file_write.write("Trybe S2")
file_write.close()

#Leitura
file_read = open("arquivo_write.txt", mode="r")
content = file_read.read()
print(content)
file_read.close()