from playsound import playsound
import requests
import time
from datetime import datetime

while(True):
    r = requests.get('http://fsociety.org')  #change the url of your choice to check whether it's live
    now = datetime.now()
    log = open("/root/Desktop/request_log.txt","a")
    log.write(str(now) + " - " + str(r) + "\n")
    log.close()
    if "<Response [200]>" in str(r):
        print("Website is Up!  -   [ " + str(now) + " ]")
        playsound("/root/Music/mr_robot.mp3") #location for the alert tone
        exit()
    else:
        time.sleep(2)
        continue
