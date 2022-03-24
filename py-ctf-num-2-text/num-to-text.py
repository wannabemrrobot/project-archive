# DECODES NUMBERS TO TEXT
#!/usr/bin/python3

def toDecimal(con):
    declist = []
    charlist = []
    text = ''
    print(" [!] Warning: Be sure to remove the last trailing space.")
    numlist = list(map(str, input(" Enter the space separated %s numbers: \n"
                                  " >> " %typ).split(" ")))
    if con != 10:
        for i in numlist:
            a = int(str(i),con)
            declist.append(a)
    else:
        declist = numlist
    for j in declist:
        dec = chr(int(j))
        charlist.append(dec)
    text = ''.join(charlist)
    print("\nDECODED TEXT: ", text)

print(" [+] A simple script to decode given-encoded-numbers to text (Usefull for CTFs)\n"
      " [+] Written by: 9H4NT0M_5H377\n")
choice = int(input(" Enter the number type to convert to text:\n"
                   " 2  >> Binary\n"
                   " 8  >> Octal\n"
                   " 10 >> Decimal\n"
                   " 16 >> Hexadecimal\n"
                   " #:    "))
if choice == 2:
    con = 2
    typ = "Binary"
elif choice == 8:
    con = 8
    typ = "Octal"
elif choice == 10:
    con = 10
    typ = "Decimal"
elif choice == 16:
    con = 16
    typ = "Hexadecimal"
else:
    print(">> INVALID CHOICE!")
toDecimal(con)
