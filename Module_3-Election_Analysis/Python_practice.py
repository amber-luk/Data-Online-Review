print("Hello World")


counties = ['Arapahoe', 'Denver', 'Jefferson']
if counties[1] == 'Denver':
    print(counties[1])


temperature = int(input("What is the temperature outside? "))

if temperature > 80:
    print("Turn on the AC.")
else:
    print("Open the windows.")


#What is the score?
score = int(input("What is your test score? "))

# Determine the grade.
if score >= 90:
    print('Your grade is an A.')
elif score >= 80:
    print('Your grade is a B.')
elif score >= 70:
    print('Your grade is a C.')
elif score >= 60:
    print('Your grade is a D.')
else:
    print('Your grade is an F.')


counties = ["Arapahoe","Denver","Jefferson"]

if "Arapahoe" and "Denver" in counties:
    print("Arapahoe and Denver are in the list of counties.")
else:
    print("Arapahoe or Denver is not the list of counties.")


x = 0
while x <= 5:
    print(x)
    x = x + 1