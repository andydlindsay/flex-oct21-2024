# M02W05 - Networking with TCP

### To Do
- [x] Discuss networking and the need for protocols
- [x] TCP introduction
- [x] TCP demo

### Networking
* any computer that is connected to another computer can talk to that computer
* ISP

### IP
* Internet Protocol
* addresses have to be unique
* IPv4 192.168.8.8
* IPv6 2001:db8:3333:4444:5555:6666:7777:8888
* street address

### Port
* uniquely identify a running process
* apt number
* 65,535 ports to choose from
* <1000 reserved for the system
* 3000 - 9000 for dev purposes
* earmarked ports
  * 80 http
  * 22 ssh
  * 443 https
  * 5432 postgres

### Sending Messages
* cut the message into packets
* header => address information
* 1/500, 2/500

### TCP
* Transmission Control Protocol
* requires connection (three way handshake)
* has error recovery
* TCP/IP

### UDP
* User Datagram Protocol
* connectionless
* no error recovery

servers - have information
clients - want information

### Event-driven Programming
* connect, disconnect, send a message, error
* code that doesn't run when the server starts
* it only runs when the particular event occurs

### Encoding
* everything on your system is stored in binary (1 and 0)
* the character 'a' might map to the number 62

Snake Snek
"Move: up"
"Move: left"
connection.write('Move: up')
