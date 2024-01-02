import time
# what to remind about
remind = input("what should I remind you about?")
# number of minutes
minutes = float(input("In how many minutes?"))
# convert to seconds
time_sec = minutes * 60
#pause the program
time.sleep(time_sec)
print(remind)
