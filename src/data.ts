export const profile = {
  name: 'Areeba Khaliq',
  headline: 'I started in pre-med and ended up building models that read skin.',
  bio: [
    'I came from a pre-medical background, but during COVID-19 my brother introduced me to programming through the apps he was building. I started learning C, enjoyed it more than I expected, and that is what led me to choose Computer Science. I love experimenting and learning new things.',
    'Today I work on machine learning for medical images, mostly skin conditions, and on the web and backend code that lets people use the models. I am looking for graduate roles in AI/ML and web development.',
  ],
  location: 'Lahore, Pakistan',
  email: 'areebakhaliq02@gmail.com',
  phone: '+92 349 6547946',
  github: 'https://github.com/Areeba-Khaliq',
  linkedin: 'https://www.linkedin.com/in/areeba-khaliq/',
  cv: `${import.meta.env.BASE_URL}AREEBA_KHALIQ_CV.pdf`,
};

export const recognition: { when?: string; title: string; text: string; href?: string }[] = [
  { when: 'Sep 2017', title: 'PEEF Merit Scholarship, Grades 9 and 10', text: 'Awarded for Grade 8 results (483/500).', href: 'https://drive.google.com/file/d/163laRwbdtxdJdr2fN999v0JxDJ6dW9_w/view?usp=sharing' },
  { when: 'Aug 2019', title: 'Merit Scholarship, Grades 11 and 12', text: 'Punjab Group of Colleges gave me a full scholarship based on my Grade 9 and 10 results (1072/1100).' },
  { when: 'Mar 2024', title: 'PM Laptop Scheme Awardee', text: 'The HEC Prime Minister’s Youth Laptop Scheme gave me a laptop for a 3.74/4.00 CGPA in my first semester at the University of the Punjab.' },
  { when: '2025', title: 'Meta Hacker Cup', text: 'Reached Round 2, in the top 16% of participants worldwide.', href: 'https://www.facebook.com/codingcompetitions/hacker-cup/2025/certificate/1455866345523083' },
  { when: '2025, 2026', title: 'Harvard CS50x Puzzle Day', text: 'Scored 9 out of 9 two years in a row.', href: 'https://certificates.cs50.io/a98d2004-cf3e-444b-90cf-f55612396c77.pdf?size=letter' },
  { when: '2026', title: 'International Computer Science Competition', text: 'Qualified the pre-qualification round.', href: 'https://drive.google.com/file/d/1gim7vej0O3MWin3bWTk1I6CaGjvVmYPw/view' },
  { title: 'Lead, NASA Space Apps Challenge', text: 'Selected to lead the local edition of NASA’s global annual hackathon.', href: 'https://drive.google.com/file/d/1v0WRvBQ3rAD1WQQpERLRLsR5xYhp_eBC/view?usp=sharing' },
  { title: 'IELTS Academic, band 7.5', text: 'Scored 8.0 in Reading, 7.5 in Listening, 7.0 in Speaking and 6.5 in Writing.', href: 'https://drive.google.com/file/d/1rmBHqS00jSuAChyveiUGJX1ich7lVLkV/view?usp=sharing' },
];

export const education = {
  school: 'University of the Punjab, Lahore',
  degree: 'BS Computer Science',
  period: '2022 – 2026',
  gpa: { text: 'GPA 3.48 / 4.00', href: 'https://drive.google.com/file/d/15_Nm6c80gAzSdOT8N4o3dAMgI9JrA-dG/view?usp=sharing' },
};

export const acneai = {
  title: 'AcneAI',
  href: 'https://github.com/Areeba-Khaliq/acne-ai',
  text: [
    'AcneAI detects acne in a photo, classifies its sub-type and grades its severity. It runs three EfficientNet-B3 models and reaches 86% validation accuracy on the ACNE04 dataset.',
    'I converted the models to ONNX and served them through FastAPI, so inference takes under a second on CPU and a full request takes 2.4 seconds. Celery and Redis handle the slow work asynchronously, which cut database load by 40% under concurrent traffic.',
    'While building it, I was surprised by how much lighting, image quality and variation in skin appearance could change the predictions. I also learned that imbalanced data can introduce model bias, where good overall accuracy hides poor performance on less-represented cases. Building reliable medical AI takes more than high accuracy.',
  ],
};

export const research = {
  title: 'Federated Training and Explainability for Hybrid CNN-Transformer Skin Lesion Classification',
  period: 'May 2026 – Aug 2026',
  text: [
    'I compared four CNN-Transformer architectures on HAM10000 (10,015 images, seven diagnoses), training each one centrally and then federated across five simulated hospitals.',
    'Federated training first cost 12.5 percentage points of accuracy. Group Normalization and starting from a centralized checkpoint brought that down to 4.2, and FedProx won back a further 6 points when the data was severely imbalanced.',
    'To see what the models were looking at, I built a Grad-CAM++ and attention-rollout pipeline covering both network branches. It showed two reproducible failure modes on low-contrast lesions.',
  ],
};

export const projects: {
  title: string;
  venue: string;
  date: string;
  links?: { label: string; href: string }[];
  text: string[];
}[] = [
  {
    title: 'ResuMate and AgentForce',
    venue: 'lablab.ai and Devpost hackathons',
    date: 'Apr 2025',
    links: [{ label: 'ResuMate on GitHub', href: 'https://github.com/Areeba-Khaliq/ResuMate' }],
    text: [
      'ResuMate is an AI resume builder made with Next.js and Grok AI and deployed on Vercel.',
      'AgentForce is an IT support assistant that connects Salesforce Agentforce to a FastAPI backend, deployed on Render.',
    ],
  },
  {
    title: 'Heart Disease Prediction Model',
    venue: 'Python, Scikit-learn, Pandas, NumPy, Matplotlib',
    date: 'May 2025',
    text: [
      'I reached 98.54% accuracy while benchmarking Decision Tree, Logistic Regression, KNN and SVM on the 303-record UCI Heart Disease dataset.',
    ],
  },
];

export const teachingNote =
  'Teaching non-technical students has taught me that teaching is one of the best ways to learn. I want students to have the opportunity to explore programming for themselves and see whether they find it interesting, just as I did. I hope I can give others a similar chance.';

export const teaching = [
  {
    title: 'DSA Instructor',
    date: 'Sep 2026',
    href: 'https://github.com/Areeba-Khaliq/DSA-for-nonTechStudents',
    text: 'Weekly Data Structures and Algorithms sessions for students from non-technical backgrounds: stacks, queues, linked lists and hashmaps.',
  },
  {
    title: 'IELTS Instructor',
    date: 'Jul 2026',
    href: 'https://github.com/Areeba-Khaliq/IELTS_Volunteer_Work',
    text: 'Coached students on all four IELTS modules (Listening, Reading, Writing, Speaking) toward their target band scores.',
  },
];

export const skills = [
  { label: 'Programming', items: 'Python, Java, JavaScript, C, C++, SQL, HTML, CSS' },
  { label: 'ML & research', items: 'PyTorch, TensorFlow, Scikit-learn, OpenCV, Federated Learning (FedAvg, FedProx), Grad-CAM++, Attention Rollout, Pandas, NumPy' },
  { label: 'Frameworks', items: 'React, Next.js, Django, FastAPI, Celery' },
  { label: 'Tools', items: 'Git, GitHub, VS Code, Jupyter Notebook, Google Colab, Linux, Apache Tomcat, Vercel' },
];
