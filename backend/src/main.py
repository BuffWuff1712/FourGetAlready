import re
import openai
import os
from dotenv import load_dotenv

# Load environment variables from .env file
load_dotenv()

# Get the OpenAI API key from the environment
openai.api_key = os.environ.get("OPENAI_API_KEY")

employee_data = {
                    "skills": ["Python", "Javascript", "Data Analysis"],
                    "career_goals": "Senior Developer Executive",
                    "preferences": "Project-based",
                    "current_role": "Software Developer"
                }

def get_learning_recommendation(employee_data):
    # Extract information from the employee data
    skills = employee_data.get('skills', [])
    career_goals = employee_data.get('career_goals', '')
    preferences = employee_data.get('preferences', '')
    current_role = employee_data.get('current_role', '')

    # Prepare the messages for OpenAI's chat API
    messages = [
        {
            "role": "system",
            "content": "You are a helpful career assistant for PSA employees. You help them find the right learning paths and courses to reach their career goals."
        },
        {
            "role": "user",
            "content": (
                f"Skills: {', '.join(skills)}\n\n"
                f"Career Goals: {career_goals}\n\n"
                f"Learning Preferences: {preferences}\n\n"
                f"Current Role: {current_role}\n\n"
                f"What learning path and courses should I take to achieve my career aspirations?"
            )
        }
    ]

    # Use OpenAI's Chat API to get learning path recommendations
    response = openai.chat.completions.create(
        model="ft:gpt-4o-mini-2024-07-18:personal:fourgetalready:AHAU3v36",  # Replace with your fine-tuned model if needed
        messages=messages,
        max_tokens=150,
        temperature=0.7
    )

    # Extract the recommendation from the API response
    recommendation = response.choices[0].message.content
    return recommendation

def parse_recommendation(recommendation):
    result = {"careers": [], "courses": []}
    
    career_match = re.search(r"Recommended Career Path: (.*)", recommendation)
    if career_match:
        careers = career_match.group(1).split(" > ")
        result["careers"] = [career.strip() for career in careers]

    courses_match = re.search(r"Suggested Courses/Projects: (.*)", recommendation)
    if courses_match:
        courses = courses_match.group(1).split(", ")
        result["courses"] = [course.strip() for course in courses]

    return result

def recommend(employee_data):
    
    recommendations = get_learning_recommendation(employee_data)
    
    return parse_recommendation(recommendations)


# Print the output of the recommend function for testing purposes
print(recommend(employee_data))
