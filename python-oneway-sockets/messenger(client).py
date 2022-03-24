# You need to get the port forwarded link or ip, port number from the server and need to assign it in the s.connect()field.
import socket
s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)   #create a socket object
host = socket.gethostname()    #Uncomment this if you want to connect in LAN
print("Current hostname is ",host)
print("The port number you enter must comply with the port number specified at the server side!")
print("Ask your Admin to provide the port number. Range[1-65535]")
port =int(input("Enter the port to connect: "))
s.connect((host, port))
print("You can only receive 10 messages.")
for i in range(10):
    msg = s.recv(1024)
    print(msg.decode('ascii'))
s.close()
print("Conection terminated by the server!")