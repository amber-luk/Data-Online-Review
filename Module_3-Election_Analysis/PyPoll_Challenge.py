# Add our dependencies.
import csv
import os

# Assign a variable to load a file from a path.
file_to_load = os.path.join("Resources/election_results.csv")

# Initialize a total vote counter.
total_votes = 0

# County Options and county votes.
county_options = []
county_votes = {}

# Track the winning county, vote count and percentage.
winning_county = ""
winning_count = 0
winning_percentage = 0

# Open the election results and read the file
with open(file_to_load) as election_data:
    file_reader = csv.reader(election_data)

    # Read the header row.
    headers = (next(file_reader))

    # Print each row in the CSV file.
    for row in file_reader:
        # Add to the total vote count.
        total_votes += 1

        # Get the candidate name from each row.
        county_name = row[1]

        # If the candidate does not match any existing candidate add it the 
        # the candidate list.
        if county_name not in county_options:

            # Add the candidate name to the candidate list.
            county_options.append(county_name)

            # And begin tracking that candidate's voter count
            county_votes[county_name] = 0

        # Add a vote to that candidate's count
        county_votes[county_name] += 1

print(county_votes)

for county in county_votes:
        # Retrieve vote count and percentage
        votes = county_votes[county]
        vote_percentage = float(votes) / float(total_votes) * 100
        county_results = (
            f"{county}: {vote_percentage:.1f}% ({votes:,})\n")
        
        # Print each candidate's voter count and percentage to the 
        # terminal.
        print(county_results)

        # Determine winning vote count, winning percentage, and candidate.        
        if (votes > winning_count) and (vote_percentage > winning_percentage):
            winning_count = votes
            winning_county = county
            winning_percentage = vote_percentage

# Print the winning candidate's results to the terminal.    
winning_county_summary = (
    f"-------------------------\n"
    f"Winner: {winning_county}\n"
    f"Winning Vote Count: {winning_count:,}\n"
    f"Winning Percentage: {winning_percentage:.1f}%\n"
    f"-------------------------\n")
print(winning_county_summary)