import pandas as pd
import json

# Load the CSV file
csv_file_path = 'aligned_psa_career_trajectory_dataset.csv'  # Replace with the actual file path
df = pd.read_csv(csv_file_path)

# Prepare the structure for JSONL file
jsonl_data = []

# Loop through each row in the dataframe to create the structured messages
for i, row in df.iterrows():
    # Assuming the CSV has columns like 'Skills', 'Career Goals', 'Learning Preferences', 'Current Role', 'Recommended Career Path', and 'Suggested Courses/Projects'
    skills = row['Skills']
    career_goals = row['Career Goals']
    learning_preferences = row['Learning Preferences']
    current_role = row['Current Role']
    recommended_path = row['Recommended Career Path']
    suggested_courses = row['Suggested Courses/Projects']
    
    # Create the message in the specified format
    message = {
        "messages": [
            {
                "role": "system",
                "content": "You are a helpful career assistant for PSA employees. You help them find the right learning paths and courses to reach their career goals."
            },
            {
                "role": "user",
                "content": (
                    f"Skills: {skills}\n\n"
                    f"Career Goals: {career_goals}\n\n"
                    f"Learning Preferences: {learning_preferences}\n\n"
                    f"Current Role: {current_role}\n\n"
                    "What learning path and courses should I take to achieve my career aspirations?"
                )
            },
            {
                "role": "assistant",
                "content": (
                    f"Recommended Career Path: {recommended_path}\n"
                    f"Suggested Courses/Projects: {suggested_courses}"
                )
            }
        ]
    }
    
    # Append the message to the list
    jsonl_data.append(message)

# Save the JSONL file
jsonl_file_path = 'psa_career_recommendations.jsonl'  # Output file path
with open(jsonl_file_path, 'w') as jsonl_file:
    for entry in jsonl_data:
        jsonl_file.write(json.dumps(entry) + '\n')

print("JSONL file has been created successfully:", jsonl_file_path)
