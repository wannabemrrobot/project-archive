# Be sure to port forward after you start the server.(ngrok would be great, and share the forwarding link to the client.)
import socket
def Main():
   #host = socket.gethostname()       #uncomment if you chat in LAN
    host=""                           #This allows connection accepted from any server
    print("Connections from any system is now accepted!")
    print("Be sure to give the port number to the client. Range[1-65535]")
    port = int(input("Enter the port to listen: "))
    serversock= socket.socket()      #Creating a socket object
    serversock.bind((host,port))     #Binds the port and host to listen on
    serversock.listen(1)
    print('socket is listening:')

    while True:
        connection, addr = serversock.accept()  #Fetches info from the client wil be accepted
        print(connection) #Additional info on socket family
        print("Got connection from %s" % str(addr))
        print("You could only communicate to 10 utterances!")
        for i in range(10):
            choice = input("Enter your choice: 1.send 2.terminate")
            if choice=="1":
                msg=input("Enter your message: ")
                connection.send(msg.encode('ascii'))
                i=i+1
            elif choice=="2":
                print("Connection with the client [%s] now will be terminated" %str(addr))
                connection.close()
                break
            else:
                print("Wrong choice! Enter a valid one, bitch!")
        print("connection terminated probably of user selection or reached the maximum chat limit!")
        connection.close()
if __name__ == '__main__':
    Main()

