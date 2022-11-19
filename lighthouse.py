import time
import os
# Print date and time
path = "./tests/"+time.strftime("%d-%m-%Y-%H-%M-%S")
try:
    os.mkdir(path)
except Exception as error:
    print(error)
    # print ("Creation of the directory %s failed" % path,error)

os.system("lighthouse https://beta.sapython.me --output-path "+path+"/beta-sapython-me.html --view")