from machine import Pin,PWM
import network   #import des fonction lier au wifi
import urequests    #import des fonction lier au requetes http
import utime    #import des fonction lier au temps
import ujson    #import des fonction lier aà la convertion en Json

wlan = network.WLAN(network.STA_IF) # met la raspi en mode client wifi
wlan.active(True) # active le mode client wifi

ssid = 'Rlaouiz'
password = 'ry7pfit7mprzv5t'
wlan.connect(ssid, password) # connecte la raspi au réseau
url = "http://192.168.177.155:3000/"


maisons = {"Gryffindor": [2000, 0, 0], "Hufflepuff": [2000, 2000, 0], "Slytherin": [0, 2000, 0], "Ravenclaw": [0, 0, 2000]}



ledR = PWM(Pin(13,mode=Pin.OUT))
ledB = PWM(Pin(15,mode=Pin.OUT))
ledG = PWM(Pin(14,mode=Pin.OUT))


ledR.duty_u16(0)
ledB.duty_u16(0)
ledG.duty_u16(0)

ledR.freq(1_000)
ledB.freq(1_000)
ledG.freq(1_000)


while not wlan.isconnected():
    print("pas co")
    utime.sleep(1)
    pass

while True:
    try:
        print("GET")
        r = urequests.get(url) # lance une requete sur l'url
        print(r.json())
        result = (r.json()["message"])
        print(result) # traite sa reponse en Json
        r.close() # ferme la demande
        utime.sleep(1)
        
        resultColor = maisons[result]
        
        print(resultColor)
        
        ledR.duty_u16(resultColor [0])
        ledG.duty_u16(resultColor [1])
        ledB.duty_u16(resultColor [2])

        print(maisons[result])
    except Exception as e:
        print("ok")
