# SeasYourFuture 🌊🚢

## Overview

SeasYourFuture is an **AI-powered Learning Management System (LMS)** is designed to provide **personalised learning pathways** and **predicted career trajectories** for employees of PSA. The system tailors learning experiences based on an employee's current role, future aspirations, and existing skill sets, bridging gaps between their current knowledge and **industrial requirements** through **supplemental courses**.

## Key Features

- **Personalised Learning Pathways**: Curated courses based on employees' current roles and future career aspirations, creating a tailored learning journey.
  
- **Predicted Career Trajectories**: AI-generated predictions for career advancement, considering an employee's aspirations and skill growth.

- **Skill Gap Analysis**: The system identifies the skills employees currently lack and provides supplemental courses to fill those gaps, ensuring alignment with industry standards.

- **Industry Requirement Alignment**: Keeps employees up-to-date with **current and future industrial trends**, adapting learning materials accordingly.

- **Future Aspiration Support**: Customised recommendations and learning pathways to help employees reach their career goals.

## How It Works

1. **Data Input**: Employees input details such as their current role, future career goals, and existing skill sets.
   
2. **AI Analysis**: The AI-powered system analyses the input data and cross-references it with industry requirements and trends using the OpenAI API.

3. **Pathway Generation**: Personalised learning pathways are created, recommending courses that will help bridge any identified skill gaps.

4. **Career Prediction**: The system predicts possible career trajectories, factoring in employees' roles, skills, and aspirations.

5. **Continuous Learning**: The LMS continuously updates learning materials based on industry trends and evolving employee roles.

## Team Members👥

- Low Bing Heng
- Justin Jiang Wei Ren
- Kenji Brannon Chong
- Brandon Ho Jun Jie
  
## Tech Stack

- **Frontend**: React
- **Backend**: Python
- **AI Integration**: OpenAI API

## Getting Started

### Prerequisites
Before you begin, ensure you have the following installed on your machine:

- **Python 3.10+** – For running the backend (check version by running `python --version`)
- **pip** – Python package installer (usually bundled with Python)
- **Node.js and npm** – For running the frontend (check versions by running `node --version` and `npm --version`)


### Backend Setup

1. **Clone the repository:**

   First, clone the project repository from GitHub.

   ```bash
   git clone https://github.com/BuffWuff1712/fourgetalready.git
   ```

2. **Navigate to the backend folder:**

   Change to the backend source folder in the terminal.

   ```bash
   cd fourgetalready/backend/src
   ```

3. **Create a virtual environment (optional but recommended):**

   Set up a Python virtual environment for the project.

   - On **Windows**:
     ```bash
     python -m venv venv
     venv\Scripts\activate
     ```
   - On **Linux/Mac**:
     ```bash
     python3 -m venv venv
     source venv/bin/activate
     ```

4. **Install the required libraries:**

   Install the dependencies listed in the `requirements.txt` file.

   ```bash
   pip install -r requirements.txt
   ```

5. **Run the backend:**

   Now, start the backend by running `main.py`.

   ```bash
   python main.py
   ```

   The backend should now be running on `http://127.0.0.1:5000/`.

### Frontend Setup

1. **Navigate to the frontend folder:**

   In a new terminal window, navigate to the frontend directory.

   ```bash
   cd fourgetalready/frontend
   ```

2. **Install frontend dependencies:**

   Use npm to install the required packages for the frontend.

   ```bash
   npm install
   ```

3. **Run the frontend development server:**

   Start the frontend in development mode.

   ```bash
   npm run dev
   ```
