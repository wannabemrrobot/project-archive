#!/usr/bin/python3
# PYTHON TIMER WITH SOUND PLAYBACK
# THE TIME NEEDS TO BE GIVEN AS A COMMAND LINE ARGUMENT IN SECONDS
import time
from playsound import playsound
import sys

def alarm(timer):
    print("[+]  Timer started for " + timer + " seconds...")
    time.sleep(int(timer))
    try:
        print("[+]  Timer ended ...\n"
              "[+]  Playing alarm-tone...\n")
        playsound("/root/Music/Mr.Robot-DayDream.mp3") # change the location for your need!
        exit()
    except:
        print("[-] No such Music file found!")
        exit()

# Driver code
if __name__ == '__main__':
    try:
        alarm(sys.argv[1])
    except:
        print("[-]  The script execution format is: \n"
          " >>  python3 pytimer.py [time in seconds] or ./pytimer.py [time in seconds]")
        exit()







