// types.ts

export interface Answer {
  text: string;
  value: number;
}

export interface Question {
  id: number;
  text: string;
  answers: Answer[];
}





export const questions = [
  {
    id: 1,
    text: "In your free time, do you prefer:",
    answers: [
      { text: "Spending time alone", value: 1 },  // Introversion
      { text: "Being with others", value: -1 }   // Extraversion
    ]
  },
  {
    id: 2,
    text: "In a social gathering, do you:",
    answers: [
      { text: "Stick with a small group of close friends", value: 1 },  // Introversion
      { text: "Mingle with as many people as possible", value: -1 }   // Extraversion
    ]
  },
  {
    id: 3,
    text: "After a long day, you prefer:",
    answers: [
      { text: "Relaxing in a quiet environment", value: 1 },  // Introversion
      { text: "Going out and socializing", value: -1 }  // Extraversion
    ]
  },
  {
    id: 4,
    text: "When meeting new people, do you:",
    answers: [
      { text: "Feel awkward or drained", value: 1 },  // Introversion
      { text: "Feel excited and energized", value: -1 }  // Extraversion
    ]
  },
  {
    id: 5,
    text: "You prefer conversations that are:",
    answers: [
      { text: "One-on-one or in small groups", value: 1 },  // Introversion
      { text: "In large groups with many people", value: -1 }  // Extraversion
    ]
  },
  {
    id: 6,
    text: "Do you usually:",
    answers: [
      { text: "Think before speaking", value: 1 },  // Introversion
      { text: "Speak your thoughts as they come to you", value: -1 }  // Extraversion
    ]
  },
  {
    id: 7,
    text: "Do you feel more energized when:",
    answers: [
      { text: "You have time to yourself", value: 1 },  // Introversion
      { text: "You are surrounded by people", value: -1 }  // Extraversion
    ]
  },
  {
    id: 8,
    text: "When working on a project, you prefer to:",
    answers: [
      { text: "Work alone or with one other person", value: 1 },  // Introversion
      { text: "Work in a team", value: -1 }  // Extraversion
    ]
  },
  {
    id: 9,
    text: "You recharge best by:",
    answers: [
      { text: "Having some alone time", value: 1 },  // Introversion
      { text: "Being with friends", value: -1 }  // Extraversion
    ]
  },
  {
    id: 10,
    text: "You are more likely to:",
    answers: [
      { text: "Feel drained after long periods of socializing", value: 1 },  // Introversion
      { text: "Feel energized after socializing", value: -1 }  // Extraversion
    ]
  },
  {
    id: 11,
    text: "When approaching a new task, you focus more on:",
    answers: [
      { text: "Details and specifics", value: 1 },  // Sensing
      { text: "The big picture and possibilities", value: -1 }  // Intuition
    ]
  },
  {
    id: 12,
    text: "You are more interested in:",
    answers: [
      { text: "What is happening in the present", value: 1 },  // Sensing
      { text: "What could happen in the future", value: -1 }  // Intuition
    ]
  },
  {
    id: 13,
    text: "When you make decisions, you tend to:",
    answers: [
      { text: "Rely on past experiences", value: 1 },  // Sensing
      { text: "Think of potential outcomes and possibilities", value: -1 }  // Intuition
    ]
  },
  {
    id: 14,
    text: "You prefer work that:",
    answers: [
      { text: "Has clear instructions and a practical outcome", value: 1 },  // Sensing
      { text: "Allows room for creativity and innovation", value: -1 }  // Intuition
    ]
  },
  {
    id: 15,
    text: "When thinking about the future, you:",
    answers: [
      { text: "Like to plan based on concrete details", value: 1 },  // Sensing
      { text: "Focus on what could be and dream about possibilities", value: -1 }  // Intuition
    ]
  },
  {
    id: 16,
    text: "When following instructions, you prefer:",
    answers: [
      { text: "Clear, detailed steps", value: 1 },  // Sensing
      { text: "A general sense of the direction and freedom to explore", value: -1 }  // Intuition
    ]
  },
  {
    id: 17,
    text: "Do you usually:",
    answers: [
      { text: "Focus on the here and now", value: 1 },  // Sensing
      { text: "Daydream or think about the future", value: -1 }  // Intuition
    ]
  },
  {
    id: 18,
    text: "When solving problems, you are more likely to:",
    answers: [
      { text: "Look at what has worked before", value: 1 },  // Sensing
      { text: "Brainstorm new and creative solutions", value: -1 }  // Intuition
    ]
  },
  {
    id: 19,
    text: "You trust information that is:",
    answers: [
      { text: "Concrete and reliable", value: 1 },  // Sensing
      { text: "Abstract and imaginative", value: -1 }  // Intuition
    ]
  },
  {
    id: 20,
    text: "You would describe yourself as more:",
    answers: [
      { text: "Practical and realistic", value: 1 },  // Sensing
      { text: "Imaginative and theoretical", value: -1 }  // Intuition
    ]
  },
  {
    id: 21,
    text: "When making a decision, you tend to focus on:",
    answers: [
      { text: "Logic and facts", value: 1 },  // Thinking
      { text: "People's feelings and values", value: -1 }  // Feeling
    ]
  },
  {
    id: 22,
    text: "When arguing with someone, you are more likely to:",
    answers: [
      { text: "Point out the logical flaws", value: 1 },  // Thinking
      { text: "Consider the other person's emotions", value: -1 }  // Feeling
    ]
  },
  {
    id: 23,
    text: "When solving problems, you are more likely to:",
    answers: [
      { text: "Use logical analysis", value: 1 },  // Thinking
      { text: "Consider the needs of people involved", value: -1 }  // Feeling
    ]
  },
  {
    id: 24,
    text: "When receiving criticism, you:",
    answers: [
      { text: "Analyze whether it is logical", value: 1 },  // Thinking
      { text: "Feel hurt if it seems too harsh", value: -1 }  // Feeling
    ]
  },
  {
    id: 25,
    text: "In a work environment, you prefer to:",
    answers: [
      { text: "Follow logical processes", value: 1 },  // Thinking
      { text: "Build harmony among coworkers", value: -1 }  // Feeling
    ]
  },
  {
    id: 26,
    text: "You feel more comfortable when:",
    answers: [
      { text: "Decisions are made based on fairness and logic", value: 1 },  // Thinking
      { text: "Decisions take into account personal values and feelings", value: -1 }  // Feeling
    ]
  },
  {
    id: 27,
    text: "Do you tend to:",
    answers: [
      { text: "Analyze a situation objectively", value: 1 },  // Thinking
      { text: "Put yourself in others' shoes to understand their feelings", value: -1 }  // Feeling
    ]
  },
  {
    id: 28,
    text: "When helping others, you tend to:",
    answers: [
      { text: "Offer practical solutions", value: 1 },  // Thinking
      { text: "Offer emotional support", value: -1 }  // Feeling
    ]
  },
  {
    id: 29,
    text: "Do you see yourself as more:",
    answers: [
      { text: "Logical and straightforward", value: 1 },  // Thinking
      { text: "Empathetic and caring", value: -1 }  // Feeling
    ]
  },
  {
    id: 30,
    text: "When resolving conflicts, you are more likely to:",
    answers: [
      { text: "Focus on finding a fair solution", value: 1 },  // Thinking
      { text: "Consider the emotional needs of everyone involved", value: -1 }  // Feeling
    ]
  },
  {
    id: 31,
    text: "When working on a project, you prefer:",
    answers: [
      { text: "Having a structured plan", value: 1 },  // Judging
      { text: "Going with the flow", value: -1 }  // Perceiving
    ]
  },
  {
    id: 32,
    text: "When organizing your day, you are more likely to:",
    answers: [
      { text: "Create a detailed schedule", value: 1 },  // Judging
      { text: "Keep things open and flexible", value: -1 }  // Perceiving
    ]
  },
  {
    id: 33,
    text: "When making plans, you prefer:",
    answers: [
      { text: "Sticking to a clear itinerary", value: 1 },  // Judging
      { text: "Leaving room for spontaneity", value: -1 }  // Perceiving
    ]
  },
  {
    id: 34,
    text: "You feel more comfortable when:",
    answers: [
      { text: "Your schedule is well-structured", value: 1 },  // Judging
      { text: "Your schedule is flexible", value: -1 }  // Perceiving
    ]
  },
  {
    id: 35,
    text: "When facing a deadline, you are more likely to:",
    answers: [
      { text: "Finish well ahead of time", value: 1 },  // Judging
      { text: "Work best under pressure", value: -1 }  // Perceiving
    ]
  },
  {
    id: 36,
    text: "You are more comfortable when your tasks are:",
    answers: [
      { text: "Completed ahead of time", value: 1 },  // Judging
      { text: "Completed at the last moment", value: -1 }  // Perceiving
    ]
  },
  {
    id: 37,
    text: "When going on a trip, you prefer:",
    answers: [
      { text: "Having everything planned", value: 1 },  // Judging
      { text: "Deciding what to do as you go", value: -1 }  // Perceiving
    ]
  },
  {
    id: 38,
    text: "In a work environment, you:",
    answers: [
      { text: "Like to follow a structured approach", value: 1 },  // Judging
      { text: "Like to adapt as you go", value: -1 }  // Perceiving
    ]
  },
  {
    id: 39,
    text: "When making decisions, you:",
    answers: [
      { text: "Prefer to decide early", value: 1 },  // Judging
      { text: "Prefer to leave options open", value: -1 }  // Perceiving
    ]
  },
  {
    id: 40,
    text: "When faced with a project, you are more likely to:",
    answers: [
      { text: "Break it down and work in a structured manner", value: 1 },  // Judging
      { text: "Work on it in bursts of inspiration", value: -1 }  // Perceiving
    ]
  },
  {
    id: 41,
    text: "At a party, you are more likely to:",
    answers: [
      { text: "Stick to a few close friends", value: 1 },  // Introversion
      { text: "Meet as many people as you can", value: -1 }  // Extraversion
    ]
  },
  {
    id: 42,
    text: "You find yourself more interested in:",
    answers: [
      { text: "What is real and tangible", value: 1 },  // Sensing
      { text: "What is possible and theoretical", value: -1 }  // Intuition
    ]
  },
  {
    id: 43,
    text: "When making plans, you:",
    answers: [
      { text: "Like to have everything settled", value: 1 },  // Judging
      { text: "Prefer to keep things flexible", value: -1 }  // Perceiving
    ]
  },
  {
    id: 44,
    text: "When approaching a problem, you:",
    answers: [
      { text: "Use logical analysis", value: 1 },  // Thinking
      { text: "Consider the emotional impact", value: -1 }  // Feeling
    ]
  },
  {
    id: 45,
    text: "In a group discussion, you are more likely to:",
    answers: [
      { text: "Wait for your turn to speak", value: 1 },  // Introversion
      { text: "Jump in with your thoughts", value: -1 }  // Extraversion
    ]
  },
  {
    id: 46,
    text: "You tend to prefer:",
    answers: [
      { text: "Concrete facts", value: 1 },  // Sensing
      { text: "Abstract ideas", value: -1 }  // Intuition
    ]
  },
  {
    id: 47,
    text: "When working on a team project, you:",
    answers: [
      { text: "Focus on the logical structure", value: 1 },  // Thinking
      { text: "Ensure everyone is comfortable and included", value: -1 }  // Feeling
    ]
  },
  {
    id: 48,
    text: "In your daily life, you prefer to:",
    answers: [
      { text: "Have a routine", value: 1 },  // Judging
      { text: "Stay flexible", value: -1 }  // Perceiving
    ]
  },
  {
    id: 49,
    text: "You would describe yourself as more:",
    answers: [
      { text: "Quiet and reserved", value: 1 },  // Introversion
      { text: "Outgoing and energetic", value: -1 }  // Extraversion
    ]
  },
  {
    id: 50,
    text: "When learning something new, you prefer:",
    answers: [
      { text: "Hands-on experience", value: 1 },  // Sensing
      { text: "Conceptual learning", value: -1 }  // Intuition
    ]
  },
  {
    id: 51,
    text: "When making decisions, you focus more on:",
    answers: [
      { text: "The logical outcome", value: 1 },  // Thinking
      { text: "The emotional consequences", value: -1 }  // Feeling
    ]
  },
  {
    id: 52,
    text: "At work, you are more comfortable when:",
    answers: [
      { text: "You have a clear structure and deadlines", value: 1 },  // Judging
      { text: "You can adapt and work at your own pace", value: -1 }  // Perceiving
    ]
  },
  {
    id: 53,
    text: "You tend to focus on:",
    answers: [
      { text: "The facts", value: 1 },  // Sensing
      { text: "The possibilities", value: -1 }  // Intuition
    ]
  },
  {
    id: 54,
    text: "When it comes to dealing with people, you:",
    answers: [
      { text: "Use logical reasoning to solve conflicts", value: 1 },  // Thinking
      { text: "Empathize and understand their feelings", value: -1 }  // Feeling
    ]
  },
  {
    id: 55,
    text: "In social situations, you are more likely to:",
    answers: [
      { text: "Listen and observe", value: 1 },  // Introversion
      { text: "Talk and engage actively", value: -1 }  // Extraversion
    ]
  },
  {
    id: 56,
    text: "When completing a task, you prefer:",
    answers: [
      { text: "To have a detailed plan", value: 1 },  // Judging
      { text: "To improvise as you go", value: -1 }  // Perceiving
    ]
  },
  {
    id: 57,
    text: "When it comes to achieving goals, you:",
    answers: [
      { text: "Are determined and focused", value: 1 },  // Judging
      { text: "Go with the flow and adapt", value: -1 }  // Perceiving
    ]
  },
  {
    id: 58,
    text: "In conversations, you tend to:",
    answers: [
      { text: "Listen more than speak", value: 1 },  // Introversion
      { text: "Speak more than listen", value: -1 }  // Extraversion
    ]
  },
  {
    id: 59,
    text: "You prefer ideas that are:",
    answers: [
      { text: "Tangible and practical", value: 1 },  // Sensing
      { text: "Abstract and theoretical", value: -1 }  // Intuition
    ]
  },
  {
    id: 60,
    text: "When resolving issues, you prioritize:",
    answers: [
      { text: "Sticking to a clear plan", value: 1 },  // Judging
      { text: "Remaining flexible to new possibilities", value: -1 }  // Perceiving
    ]
  }
];


export const detail = [
  {
    id: 1,
    mbtiType: 'ISTJ',
    name: 'The Inspector',
    description: ' ISTJs are practical, logical, and highly dependable. They value tradition and loyalty and are focused on fulfilling their responsibilities.',
    overview: `ISTJs are known as the Logistician or Inspector. They are introverted, sensing, thinking, and judging individuals who value responsibility, organization, and tradition. ISTJs are highly practical and dependable, often serving as the backbone of any system or group they are part of.`,
    characteristic: `Reliable and dedicated to their responsibilities.
Logical and fact-driven decision-makers.
Value tradition, structure, and order.
Prefer planning and consistency over spontaneity.`,
    strength: 'Responsible, Dependable, Hard-working, Detail-oriented, Practical.',
    strengths: `Highly Dependable
ISTJs are known for their reliability and dedication, ensuring tasks are completed efficiently.

Detail-Oriented
Their attention to detail makes them excellent at managing complex systems and maintaining accuracy.

Logical and Objective
They make decisions based on facts and logic, avoiding emotional bias.

Strong Sense of Duty
ISTJs take their commitments seriously and strive to meet expectations.`,
    weakness: 'Stubborn, Judgmental, Resistant to change, Perfectionistic.',
    weaknesses: ` them to judge others harshly, especially when efficiency is lacking.

Emotionally Reserved
They can find it difficult to express their emotions or understand those of others.

Stubbornness
ISTJs may resist new ideas if they conflict with traditional methods or established routines.
`,
    career: `ISTJs excel in structured environments that require precision and dependability. Ideal roles include:

Accounting and Finance: Their focus on accuracy and order makes them great at managing numbers.
Law Enforcement and Military: Their dedication to rules and discipline aligns well with these fields.
Administration: ISTJs thrive in organizing and maintaining efficient systems.
Engineering and IT: Their logical mindset suits technical and problem-solving roles.
Health Services: They excel in roles that require meticulous attention to detail, like medical or laboratory work.`,
    relationship: `As Partners: ISTJs are loyal and responsible, focusing on creating a stable and secure relationship.

As Friends: They value reliability and prefer small, consistent friendships over large social circles.

As Parents: ISTJs emphasize discipline and responsibility, raising children with a strong sense of ethics and values.`,
    tip: `Embrace Flexibility: Learn to adapt to change and explore new approaches.
Express Emotions: Practice sharing your feelings to build deeper connections.
Balance Work with Fun: Make time for relaxation and enjoyment outside of responsibilities.
Be Open to Feedback: Accept constructive criticism as an opportunity for growth.`,
    funfact: `They make up about 13% of the population, making them one of the most common types.
Known as "The Duty Fulfiller," ISTJs often excel in leadership roles that require organization.
Famous ISTJs include George Washington, Warren Buffett, and Natalie Portman.
`
  },
  {
    id: 2,
    mbtiType: 'ISFJ',
    name: 'The Protector',
    description: 'ISFJs are kind, conscientious, and empathetic. They are great at remembering details about people and events and prefer helping others.',
    overview: `ISFJs are known as the Defender or Protector. They are introverted, sensing, feeling, and judging individuals who are deeply caring and responsible. ISFJs are known for their warmth, dedication, and strong sense of duty, often putting the needs of others before their own.
`,
    characteristic: `Loyal and dependable, valuing stability and security.

Empathetic and considerate, attuned to others' emotions.

Practical and detail-oriented, excelling in tasks requiring thoroughness.

Value tradition and harmony, striving to maintain peace.
`,
    strength: 'Supportive, Reliable, Patient, Observant, Dedicated.',
    strengths: `Altruistic and SupportiveISFJs are highly compassionate and always willing to help others.

Responsible and HardworkingThey take their commitments seriously and work diligently to fulfill them.

Practical and OrganizedISFJs excel at managing details and ensuring tasks are completed efficiently.

Empathetic and AttunedTheir ability to understand others' feelings makes them excellent at building strong relationships.
`,
    weakness: 'Overly humble, Sensitive to criticism, Overburdened by helping others, Reluctant to change.',
    weaknesses: `Reluctant to ChangeISFJs may struggle with adapting to new situations or ideas.

Overly SelflessThey can neglect their own needs while focusing on helping others.

Avoidance of ConflictISFJs may prioritize peace over addressing critical issues, leading to unresolved problems.

Difficulty with CriticismThey can take feedback personally, even when it’s constructive.`,
    career: `ISFJs excel in supportive roles that require organization and a focus on others' well-being. Ideal careers include:

Healthcare and Nursing: Their empathy and attention to detail make them excellent caregivers.

Teaching and Education: ISFJs thrive in roles that involve helping others grow and learn.

Social Work and Counseling: Their compassion suits roles in assisting those in need.

Administrative Roles: Their organizational skills are invaluable in office management.

Customer Service: They excel in providing personalized and attentive support.`,
    relationship: `As Partners: ISFJs are devoted and nurturing, creating a stable and loving environment in relationships.

As Friends: They are dependable and attentive, always ready to offer support and a listening ear.

As Parents: ISFJs emphasize care and tradition, raising their children in a warm and structured setting.
`,
    tip: `
Set Boundaries: Remember to take care of your own needs as well as others'.

Embrace Change: Practice being open to new ideas and experiences.

Accept Constructive Feedback: Use criticism as an opportunity for growth.

Communicate Needs: Express your feelings and needs to prevent misunderstandings.`,
    funfact: `
They make up about 13-14% of the population, one of the most common types.

Known as "The Nurturer," ISFJs often excel in caregiving roles.

Famous ISFJs include Mother Teresa, Rosa Parks, and Queen Elizabeth II.`
  },
  {
    id: 3,
    mbtiType: 'INFJ',
    name: 'The Advocate',
    description: 'INFJs are insightful, idealistic, and compassionate. They are often deep thinkers who strive to make the world a better place.',
    overview: 'INFJs are known as the Advocate or Idealist. They are introverted, intuitive, feeling, and judging individuals who combine a profound understanding of the world with a strong desire to make it a better place. Often described as insightful and altruistic, INFJs possess a rare combination of vision and practicality',
    characteristic: ` - Deeply empathetic and caring.
  - Highly intuitive about people’s emotions and motivations.
  - Value meaningful connections over superficial relationships.
  - Strong focus on ideals and long-term goals.`,
    strength: 'Empathetic, Insightful, Determined, Visionary, Altruistic.',
    strengths: `1. **Empathy and Understanding**  
   INFJs excel at understanding other people’s emotions, making them exceptional at offering support and advice. Their ability to intuitively grasp unspoken feelings makes them trusted confidants.

2. **Visionary Thinking**  
   They have the ability to see the big picture and connect disparate ideas into a coherent whole, often envisioning innovative solutions to complex problems.

3. **Commitment to Ideals**  
   Driven by a strong sense of purpose, INFJs strive to create a positive impact on the world. They work tirelessly toward causes they believe in.

4. **Organized and Determined**  
   Despite being dreamers, INFJs possess a structured and organized approach to achieving their goals.`,
    weakness: ' Perfectionistic, Sensitive, Private, Prone to burnout.',
    weaknesses: `1. **Overly Idealistic**  
   INFJs can sometimes hold unrealistically high standards for themselves and others, leading to disappointment.

2. **Burnout-Prone**  
   Their intense drive to help others can cause them to neglect their own needs, leading to physical or emotional exhaustion.

3. **Conflict Avoidance**  
   They often shy away from confrontations, even when necessary, to maintain harmony.

4. **Difficulty Opening Up**  
   Despite their strong interpersonal skills, INFJs can be guarded about their own feelings, making it hard for others to truly understand them.
   `,
    career: `INFJs thrive in careers that align with their values and allow them to make a meaningful difference. They often excel in:

- **Counseling and Psychology**: Their natural empathy and understanding make them ideal in helping professions.
- **Writing and the Arts**: They can channel their creativity and vision into storytelling and artistic expression.
- **Education**: Their passion for growth and development makes them effective and inspiring teachers.
- **Social Work or Nonprofit**: Advocating for underrepresented groups aligns with their desire to improve society.
- **Health and Wellness**: Their desire to help others extends to careers in holistic care or medical fields.
`,
    relationshiip: `**As Partners:** INFJs are deeply committed and value emotional intimacy. They are attentive and caring but may need time to fully open up.

**As Friends:** They prefer small circles of close, trusted friends over large social groups. They’re the ones friends turn to for deep conversations and meaningful advice.

**As Parents:** INFJs nurture their children’s individuality while instilling strong values. They often serve as moral guides for their families.`,
    tips: `1. **Set Boundaries**: Learn to say no to avoid burnout and overcommitment.
2. **Embrace Imperfection**: Recognize that mistakes are a natural part of growth for yourself and others.
3. **Practice Self-Care**: Dedicate time to recharge and focus on your own well-being.
4. **Face Conflict**: Address issues directly and constructively rather than avoiding them.`,
    funfact: `- They make up less than 2% of the population, making them one of the rarest MBTI types.
- Known for their "INFJ Door Slam," they will cut ties with people who repeatedly disrespect their boundaries.
- Famous INFJs include Martin Luther King Jr., Mother Teresa, and Mahatma Gandhi.`

  },
  {
    id: 4,
    mbtiType: 'INTJ',
    name: 'The Architect',
    description: 'INTJs are strategic, independent, and highly analytical. They enjoy solving complex problems and are very goal-oriented.',
    overview: `INTJs are known as the Architect or Mastermind. They are introverted, intuitive, thinking, and judging individuals who are strategic, independent, and highly analytical. INTJs are natural planners who excel at turning complex concepts into actionable plans.
`,
    characteristic: `Logical and innovative thinkers.

Value efficiency and competence.

Prefer long-term planning over short-term solutions.

Confident in their ideas and decisions.
`,
    strength: 'Strategic, Confident, Independent, Innovative, Decisive.',
    strengths: `Strategic ThinkersINTJs excel at seeing patterns and connections others might miss, enabling them to devise innovative strategies.

Independent and Self-MotivatedThey thrive on autonomy and are highly capable of setting and achieving personal goals without external motivation.

Highly OrganizedTheir methodical approach ensures they can manage complex projects and prioritize effectively.

Confident Decision-MakersINTJs trust their judgment and are decisive, even in uncertain situations.`,
    weakness: 'Arrogant, Overly critical, Dismissive of emotions, Perfectionistic.',
    weaknesses: `
Overly CriticalTheir high standards can make them overly critical of themselves and others.

Emotionally DetachedINTJs may struggle to connect emotionally with others, prioritizing logic over feelings.

PerfectionismTheir pursuit of perfection can lead to unnecessary stress and delays.

Impatience with InefficiencyThey may become frustrated when others fail to meet their expectations or work inefficiently.
`,
    career: `
Engineering and Technology: Their analytical minds make them excellent in technical and innovative roles.

Leadership and Management: They are natural leaders who excel in planning and execution.

Science and Research: Their curiosity and precision suit them for roles in research and analysis.

Finance and Consulting: Their ability to analyze complex systems makes them valuable in business strategy.

Architecture and Design: Their creativity and practicality combine well in these fields.`,
    relationship: `As Partners: INTJs are loyal and dedicated but may need to work on expressing their emotions openly.

As Friends: They value deep, intellectual conversations and prefer a small circle of close friends.

As Parents: INTJs encourage independence and critical thinking in their children, often serving as role models for discipline and ambition.
`,
    tip: `Develop Emotional Awareness: Practice empathy and active listening to strengthen personal connections.

Balance Perfectionism: Recognize when good enough is sufficient to avoid burnout.

Stay Open to Feedback: Embrace constructive criticism to refine your ideas and approach.

Practice Patience: Accept that others may have different working styles and perspectives.
`,
    funfact: `They make up about 2% of the population, with more men than women in this category.

Known as "The Mastermind," they are often depicted as strategic villains in fiction.

Famous INTJs include Elon Musk, Nikola Tesla, and Isaac Newton.`
  },
  {
    id: 5,
    mbtiType: 'ISTP',
    name: 'The Virtuoso',
    description: 'ISTPs are spontaneous, practical, and adventurous. They enjoy working with their hands and are excellent problem solvers.',
    overview: ``,
    characteristic: ``,
    strength: 'Analytical, Practical, Adaptable, Curious, Hands-on.',
    strengths: ``,
    weakness: 'Insensitive, Easily bored, Risk-prone, Private.',
    weaknesses: ``,
    career: ``,
    relationship: ``,
    tip: ``,
    funfact: ``
  },
  {
    id: 6,
    mbtiType: 'ISFP',
    name: 'The Adventurer',
    description: 'ISFPs are artistic, sensitive, and free-spirited. They value creativity, self-expression, and enjoy new experiences.',
    overview: `ISFPs are known as the Adventurer or Composer. They are introverted, sensing, feeling, and perceiving individuals who value creativity, individuality, and living in the moment. ISFPs are artistic and adaptable, often seeking beauty and inspiration in the world around them.
`,
    characteristic: `Warm and empathetic, valuing harmony and connection.

Artistic and creative, with a strong appreciation for aesthetics.

Independent and spontaneous, thriving on freedom and flexibility.

Gentle and reserved, preferring meaningful interactions over large social settings.`,
    strength: 'Artistic, Open-minded, Charming, Imaginative, Spontaneous.',
    strengths: `Creative and ImaginativeISFPs excel in artistic pursuits and finding unique solutions to problems.

Empathetic and CaringThey are deeply attuned to others' emotions and needs.

Adaptable and EasygoingISFPs are flexible and thrive in changing environments.

Observant and PerceptiveThey have a keen awareness of their surroundings and an appreciation for details.`,
    weakness: ' Easily stressed, Indecisive, Overly competitive, Private.',
    weaknesses: `IndecisivenessISFPs may struggle with making decisions, especially under pressure.

Avoidance of ConflictThey prefer to avoid confrontation, which can lead to unresolved issues.

Difficulty with Long-Term PlanningISFPs may focus too much on the present, neglecting future goals.

Overly PrivateTheir reserved nature can make it difficult for others to understand them fully.
`,
    career: `ISFPs excel in careers that allow them to express their creativity and work independently. Ideal careers include:

Art and Design: Their creativity and attention to detail suit artistic roles.

Healthcare: ISFPs excel in caregiving roles that require empathy and precision.

Social Work: Their compassion makes them effective in helping others.

Environmental Sciences: ISFPs’ appreciation for nature aligns well with conservation work.

Education: They thrive in teaching roles that emphasize creativity and connection.`,
    ralationship: `
As Partners: ISFPs are passionate and supportive, focusing on building deep emotional connections.

As Friends: They are loyal and attentive, often bringing creativity and inspiration to friendships.

As Parents: ISFPs create a nurturing and imaginative environment, encouraging their children’s individuality.`,
    tip: `Practice Decision-Making: Develop strategies for making confident choices.

Address Conflicts Head-On: Learn to confront and resolve issues directly.

Plan for the Future: Balance living in the moment with setting long-term goals.

Open Up to OthThey make up about 8-9% of the population, bringing creativity and warmth to their communities.

Known as "The Artist," ISFPs often excel in creative and aesthetic pursuits.

Famous ISFPs include Audrey Hepburn, David Bowie, and Princess Diana.
ers: Share your thoughts and feelings to build stronger relationships.`,
    funfact: ``
  },
  {
    id: 7,
    mbtiType: 'INFP',
    name: 'The Mediator',
    description: 'INFPs are idealistic, compassionate, and driven by their values. They are deeply connected to their feelings and strive for personal meaning.',
    overview: `INFPs are idealistic, empathetic individuals who value authenticity and personal growth. They are deeply introspective and driven by their core values, often seeking meaning and purpose in their lives. `,
    characteristic: ``,
    strength: 'Empathetic, Idealistic, Loyal, Open-minded, Creative.',
    strengths: `Empathetic: INFPs have a deep understanding of others' feelings and are compassionate listeners.
Creative: They possess a rich imagination and are often involved in artistic or literary pursuits.
Idealistic: INFPs strive to make the world a better place and are motivated by their values.
Loyal: They are dedicated friends and partners, valuing deep, meaningful connections.
Open-Minded: INFPs are accepting of others' differences and open to new ideas. `,
    weakness: 'Overly idealistic, Self-critical, Difficult to get to know, Disorganized.',
    weaknesses: `Overly Idealistic: Their high expectations can sometimes lead to disappointment when reality doesn't match their ideals.

Overly Sensitive: INFPs can be deeply affected by criticism and may retreat when feeling hurt.

Indecisive: They may struggle to make decisions, especially when faced with conflicting values or options.

Private: INFPs tend to keep their thoughts and feelings to themselves, which may make it difficult for others to understand them.

Avoidance of Conflict: They prefer harmony and may avoid addressing difficult issues directly, which can lead to unresolved tensions.`,
    career: `Counseling and Therapy: INFPs' deep empathy and desire to help others make them well-suited for roles in mental health and counseling.
Writing and the Arts: Their creative nature often leads them to pursue careers in writing, art, music, or other creative fields.
Humanitarian Work: INFPs are driven by a desire to make the world a better place and are often drawn to nonprofit or social justice careers.
Education: They may enjoy teaching or mentoring roles, especially when they can inspire and guide others.
Psychology or Social Work: Their desire to understand people and help them navigate life’s challenges often leads INFPs to these professions`,
    ralationship: `With Partners: INFPs seek deep, meaningful relationships and are loyal, loving partners. They value emotional intimacy and understanding.
With Friends: They are kind and supportive friends, always ready to lend a listening ear or offer emotional support.
With Family: INFPs are often close to their family, particularly when they feel understood and supported. They value authenticity in family relationships.
With Colleagues: INFPs may prefer working in environments where they can make a difference, such as in creative or humanitarian fields. They value independence and flexibility.
With Children: They are nurturing and idealistic parents, dedicated to raising children with empathy, creativity, and a strong sense of values`,
    tip: `Embrace Practicality: INFPs should work on balancing their idealism with realistic expectations, especially in relationships and career choices.
Develop Self-Confidence: INFPs can benefit from embracing their strengths and being more assertive in their beliefs and decisions.
Focus on Action: Rather than getting lost in their idealistic dreams, INFPs can benefit from taking practical steps toward their goals.
Practice Conflict Resolution: INFPs can improve their relationships by addressing conflicts directly, rather than avoiding them.
Learn to Let Go: Letting go of perfectionism and accepting flaws in both themselves and others can help INFPs find greater peace. `,
    funfact: `Famous INFPs: Notable INFPs include William Shakespeare, J.R.R. Tolkien, and Princess Diana.
Highly Creative: INFPs often have a deep appreciation for art, literature, and music and may express themselves through these mediums.
Altruistic: INFPs are often motivated by a desire to make the world a better place, frequently getting involved in causes that align with their values.
Deep Thinkers: INFPs tend to have rich inner lives and may spend a lot of time reflecting on their thoughts and feelings.
Love for Nature: Many INFPs find peace and inspiration in nature, often seeking solitude in natural settings to recharge`
  },
  {
    id: 8,
    mbtiType: 'INTP',
    name: 'The Thinker',
    description: 'INTPs are logical, curious, and love analyzing complex ideas. They are known for their independent thinking and intellectual curiosity.',
    overview: `INTPs, also known as The Thinker or Architect, are introverted, intuitive, thinking, and perceiving individuals who thrive on exploring ideas and solving complex problems. They are analytical and inventive, always seeking to understand how things work.`,
    characteristic: `Logical and curious, constantly exploring new concepts.

Independent and value intellectual autonomy.

Prefer theoretical understanding over practical applications.

Thrive on innovation and creativity.`,
    strength: 'Analytical, Innovative, Objective, Independent, Logical.',
    strengths: `Innovative ThinkersINTPs excel at developing unique and groundbreaking ideas.

Logical and AnalyticalThey rely on facts and reason to solve problems and make decisions.

IndependentINTPs value their freedom and are self-sufficient in their pursuits.

Creative Problem-SolversTheir open-minded approach enables them to find unconventional solutions.
`,
    weakness: 'Absent-minded, Critical, Overly theoretical, Detached.',
    weaknesses: `Prone to OverthinkingINTPs may get stuck in analysis paralysis, delaying decisions.

Emotionally DetachedThey can struggle to connect with others on an emotional level.

DisorganizedTheir focus on ideas may lead to neglecting practical tasks or routines.

Perfectionistic TendenciesThey may set unrealistically high standards for themselves or their work.`,
    career: `INTPs thrive in roles that require creativity and independent thought. Ideal careers include:

Research and Academia: They excel in roles that allow deep exploration of theories.

Technology and Programming: Their logical minds suit complex problem-solving.

Engineering: They enjoy designing systems and structures.

Writing and Journalism: Their ability to articulate ideas makes them effective communicators.

Consulting: They can offer unique perspectives and solutions.`,
    ralationship: `As Partners: INTPs are loyal and intellectually stimulating, though they may need encouragement to share emotions.

As Friends: They value deep, intellectual conversations over casual socializing.

As Parents: INTPs encourage independence and curiosity in their children, often fostering a love for learning.
`,
    tip: `Balance Logic with Emotion: Practice empathy and emotional expression.

Set Practical Goals: Break down abstract ideas into actionable steps.

Maintain Organization: Develop habits to keep track of tasks and deadlines.

Embrace Collaboration: Seek out teamwork opportunities to enhance ideas.`,
    funfact: `They make up about 3-5% of the population, making them one of the rarer types.

Known as "The Thinkers," INTPs often excel in academic and technical fields.

Famous INTPs include Albert Einstein, Bill Gates, and Isaac Newton.`
  },
  {
    id: 9,
    mbtiType: 'ESTP',
    name: 'The Entrepreneur',
    description: 'ESTPs are energetic, outgoing, and action-oriented. They thrive on new experiences and are excellent at thinking on their feet.',
    overview: `ESTPs are energetic, action-oriented individuals who thrive in dynamic environments. They are known for their boldness, adaptability, and ability to think on their feet. Their focus is on the present moment, and they excel in situations that require quick decision-making and problem-solving. `,
    characteristic: ``,
    strength: 'Bold, Practical, Sociable, Direct, Observant.',
    strengths: `Bold and Adventurous: ESTPs are not afraid to take risks and embrace new challenges.
Resourceful: They can quickly adapt to changing circumstances and find practical solutions.
Charismatic: Their outgoing nature and sense of humor make them engaging and persuasive.
Observant: They have keen awareness of their surroundings and can read situations effectively.
Action-Oriented: ESTPs prefer to act rather than overanalyze, making them decisive in the moment. 
VERYWELL MIND`,
    weakness: 'Impulsive, Risk-prone, Competitive, Defiant.',
    weaknesses: `Impulsive: Their desire for immediate results can lead to hasty decisions without considering long-term consequences.
Insensitive: ESTPs may overlook others' feelings, focusing more on facts and logic.
Easily Bored: They seek constant stimulation and may become restless with routine tasks.
Disregard for Rules: Their preference for flexibility can sometimes lead them to challenge established norms.
Difficulty with Long-Term Planning: ESTPs may struggle with tasks that require sustained attention and future-oriented thinking. `,
    career: `Sales and Marketing: Their persuasive skills and ability to read people make them effective in these fields.
Emergency Services: Roles like paramedics or firefighters suit their quick-thinking and action-oriented nature.
Entrepreneurship: Their risk-taking and innovative mindset are valuable in starting and running businesses.
Sports: ESTPs often excel in competitive sports due to their physical prowess and strategic thinking.
Entertainment: Their charisma and energy can lead to success in acting or performing arts. `,
    ralationship: `With Partners: ESTPs bring excitement and spontaneity to relationships but may need to work on emotional depth and commitment.
With Friends: They are loyal and fun-loving, often organizing social gatherings and adventures.
With Family: ESTPs value independence and may encourage family members to be more active and engaged.
With Colleagues: They are collaborative and thrive in team settings, often taking on leadership roles.
With Children: ESTPs can be playful and energetic parents, encouraging exploration and hands-on learning. `,
    tip: `Develop Emotional Awareness: Pay attention to the feelings of others to enhance interpersonal relationships.
Practice Patience: Allow time for thorough planning and consideration before making decisions.
Embrace Routine: Incorporate structured activities to balance spontaneity with responsibility.
Seek Feedback: Regularly ask for input from others to gain different perspectives.
Set Long-Term Goals: Work on developing a vision for the future to guide current actions. `,
    funfact: `Famous ESTPs: Notable ESTPs include Thomas Edison, Ernest Hemingway, and Madonna. 
Adventure Seekers: ESTPs are often drawn to extreme sports and activities that provide an adrenaline rush.
Quick Learners: They can rapidly acquire new skills, especially those that are hands-on or practical.
Natural Performers: Their charisma and energy make them captivating in front of an audience.
Problem Solvers: ESTPs excel in troubleshooting and finding immediate solutions to challenges. `
  },
  {
    id: 10,
    mbtiType: 'ESFP',
    name: 'The Entertainer',
    description: ' ESFPs are energetic, fun-loving, and spontaneous. They enjoy being the center of attention and thrive in social situations.',
    overview: `ESFPs are known as the Entertainer or Performer. They are extroverted, sensing, feeling, and perceiving individuals who thrive on social interactions and living in the moment. ESFPs are vibrant, fun-loving, and deeply attuned to their surroundings.
`,
    characteristic: `Energetic and enthusiastic about life.
Highly observant and in tune with their environment.
Value relationships and emotional connections.
Prefer spontaneity over routine.`,
    strength: 'Sociable, Enthusiastic, Fun-loving, Spontaneous, Supportive.',
    strengths: `Charismatic and Sociable
ESFPs are natural entertainers who bring joy and excitement to social settings.

Adaptable and Resourceful
They excel at thinking on their feet and making the most of any situation.

Highly Observant
ESFPs are attuned to details and can quickly read people and situations.

Empathetic and Supportive
They form deep connections and are often the first to offer comfort and encouragement.
`,
    weakness: 'Easily bored, Impulsive, Sensitive to criticism, Disorganized.',
    weaknesses: `Impatience with Details
ESFPs may struggle with long-term planning or tasks requiring sustained focus.

Overly Impulsive
Their love for spontaneity can sometimes lead to hasty decisions.

Avoidance of Conflict
They may prioritize harmony over addressing serious issues, leading to unresolved tensions.

Difficulty with Criticism
ESFPs can take feedback personally, even when it’s constructive.
`,
    career: `ESFPs excel in dynamic, people-oriented environments where they can express their creativity. Ideal careers include:

Entertainment and Performing Arts: Their energy and charisma make them natural performers.
Event Planning: They thrive in roles that require coordination and creativity.
Sales and Marketing: ESFPs excel at building relationships and influencing others.
Healthcare and Counseling: Their empathy and attentiveness suit roles in caregiving.
Hospitality and Tourism: They shine in roles that involve interaction and creating memorable experiences.`,
    ralationship: `As Partners: ESFPs are affectionate and playful, bringing excitement and positivity to their relationships.

As Friends: They are warm and fun-loving, always ready to lift spirits and share adventures.

As Parents: ESFPs create a lively and supportive environment, encouraging their children to enjoy life to the fullest.
`,
    tip: `Plan for the Future: Balance living in the moment with setting long-term goals.
Accept Constructive Feedback: View criticism as an opportunity to grow and improve.
Practice Conflict Resolution: Address issues directly to maintain healthy relationships.
Cultivate Focus: Develop habits to stay organized and complete important tasks.`,
    funfact: `They make up about 7-8% of the population, bringing vibrancy and joy to many groups.
Known as "The Life of the Party," ESFPs are often the center of attention.
Famous ESFPs include Marilyn Monroe, Elton John, and Jamie Foxx.`
  },
  {
    id: 11,
    mbtiType: 'ENFP',
    name: ' The Campaigner',
    description: 'ENFPs are enthusiastic, creative, and people-focused. They are passionate about their ideas and enjoy motivating others.',
    overview: `ENFPs are known as the Campaigner or Inspirer. They are extroverted, intuitive, feeling, and perceiving individuals who radiate enthusiasm and creativity. ENFPs thrive on connections with others and are natural motivators who inspire those around them with their passion and optimism.`,
    characteristic: `Highly energetic and sociable.

Naturally curious and open-minded.

Value authenticity and deep emotional connections.

Thrive on creativity and exploring new ideas.`,
    strength: 'Enthusiastic, Creative, Open-minded, Sociable, Curious.',
    strengths: `Energetic and EnthusiasticENFPs’ energy and passion are infectious, making them natural leaders and motivators.

Creative Problem-SolversThey excel at thinking outside the box and coming up with innovative solutions to challenges.

Empathetic and GenuineENFPs value authenticity and connect deeply with others, often acting as a source of support and encouragement.

Adaptable and Open-MindedThey embrace change and new experiences, thriving in dynamic environments.
`,
    weakness: ' Overly emotional, Easily stressed, Disorganized, Overthinks decisions.',
    weaknesses: `Easily DistractedTheir enthusiasm for new ideas can sometimes lead them to abandon projects prematurely.

Overly IdealisticENFPs may struggle when reality doesn’t align with their high expectations.

Struggle with RoutineThey often find repetitive tasks and rigid structures draining.

Emotionally OverwhelmedTheir sensitivity and empathy can sometimes make them vulnerable to emotional burnout.`,
    career: `ENFPs excel in careers that allow them to express their creativity and connect with others. They often thrive in:

Marketing and Public Relations: Their energy and creativity are assets in dynamic, people-oriented roles.

Writing and Media: They can channel their imagination and communication skills into storytelling.

Entrepreneurship: Their enthusiasm and vision make them natural innovators.

Counseling and Coaching: Their empathy and insight allow them to guide and inspire others effectively.

Entertainment and Performing Arts: ENFPs often shine in roles that allow for self-expression and interaction with an audience.`,
    relationship: `As Partners: ENFPs are passionate and attentive, bringing energy and excitement to their relationships. They value emotional intimacy and shared adventures.

As Friends: They are warm and welcoming, often forming large social circles and thriving on meaningful conversations.

As Parents: ENFPs are playful and supportive, encouraging their children to explore and express themselves freely.
`,
    tip: `Focus on Follow-Through: Practice finishing what you start to avoid spreading yourself too thin.

Set Realistic Goals: Balance your idealism with practicality to achieve sustainable success.

Embrace Routine: Incorporate structure into your life to stay organized and productive.

Protect Your Energy: Set boundaries to prevent emotional burnout and maintain well-being.`,
    funfact: `They make up about 7-8% of the population, making them relatively common among MBTI types.

Known for their spontaneous adventures and ability to turn ordinary moments into memorable experiences.

Famous ENFPs include Robin Williams, Walt Disney, and Ellen DeGeneres.`

  },
  {
    id: 12,
    mbtiType: 'ENTP',
    name: 'The Debater',
    description: ' ENTPs are innovative, witty, and enjoy debating ideas. They love intellectual challenges and have a strong ability to see all sides of an argument.',
    overview: `ENTPs are known as the Debater or Visionary. They are extroverted, intuitive, thinking, and perceiving individuals who love exploring new ideas and challenging conventions. ENTPs thrive on intellectual stimulation and are natural-born innovators.`,
    characteristic: `Highly curious and open to new experiences.

Skilled at debating and presenting arguments.

Enjoy solving complex problems in unconventional ways.

Thrive in dynamic, fast-paced environments.
`,
    strength: 'Quick-witted, Innovative, Knowledgeable, Charismatic, Energetic.',
    strengths: `Innovative ThinkersENTPs are known for their creativity and ability to generate unique solutions to problems.

Charismatic and WittyThey excel at engaging others with their humor and charm, often winning people over to their ideas.

Quick LearnersENTPs pick up new skills and concepts quickly, thriving in environments that require adaptability.

Natural LeadersTheir confidence and enthusiasm inspire others, making them effective leaders in dynamic settings.`,
    weakness: 'Argumentative, Intolerant, Impulsive, Overly competitive.',
    weaknesses: `Easily BoredENTPs may lose interest in projects once the initial excitement fades.

ArgumentativeTheir love for debate can sometimes come across as combative or dismissive.

ImpulsivityThey may act on ideas without fully considering the consequences.

Difficulty with RoutineRepetitive tasks and rigid structures can feel stifling to ENTPs.`,
    career: `ENTPs excel in careers that allow them to innovate and think on their feet. They often thrive in:

Entrepreneurship: Their ability to see opportunities and take risks makes them natural entrepreneurs.

Marketing and Advertising: Their creativity and charisma are assets in these dynamic fields.

Technology and Innovation: ENTPs are drawn to cutting-edge fields that reward out-of-the-box thinking.

Consulting: Their problem-solving skills and adaptability make them effective consultants.

Entertainment and Media: They shine in roles that allow them to entertain and influence others.
`,
    ralationship: `As Partners: ENTPs bring excitement and spontaneity to relationships, valuing intellectual connection and mutual exploration.

As Friends: They are fun-loving and adventurous, often the life of the party and a source of inspiration.

As Parents: ENTPs encourage their children to question norms and explore their passions freely.`,
    tip: `Follow Through on Commitments: Practice discipline to complete what you start.

Cultivate Patience: Give others the space to express their ideas and emotions.

Balance Exploration with Focus: Channel your energy into a few key projects for greater impact.

Manage Impulsivity: Pause to evaluate the potential consequences of your actions.
`,
    funfact: `
They make up about 3% of the population, with a balanced gender distribution.

Known as "The Visionary," they often inspire groundbreaking ideas and movements.

Famous ENTPs include Mark Twain, Thomas Edison, and Tom Hanks.`
  },
  {
    id: 13,
    mbtiType: 'ESTJ',
    name: 'The Executive',
    description: 'ESTJs are organized, practical, and take leadership seriously. They value tradition and are great at maintaining order and efficiency.',
    overview: `ESTJs are natural leaders who value tradition, order, and efficiency. They are extroverted, sensing, thinking, and judging individuals who excel at organizing people and resources to achieve goals.`,
    characterstic: `Strong-willed and decisive in decision-making.

Highly practical and results-oriented.

Value structure, rules, and efficiency.

Thrive in leadership roles and managerial positions.`,
    strength: ' Organized, Practical, Reliable, Dedicated, Strong-willed.',
    strengths: `Excellent OrganizersESTJs excel at creating systems and processes to achieve goals effectively.

Confident and AssertiveThey are decisive and take charge in challenging situations.

Hardworking and DedicatedESTJs are highly committed to their responsibilities and work diligently to meet goals.

Logical and PracticalThey approach problems with a clear, fact-based mindset.`,
    weakness: 'Inflexible, Stubborn, Judgmental, Intolerant.',
    weaknesses: `Overbearing at TimesESTJs’ strong personalities can come across as controlling or inflexible.

Struggle with EmotionsThey may find it difficult to connect emotionally with others.

Resistant to ChangeESTJs prefer sticking to proven methods and can resist unconventional approaches.

Harsh CriticsTheir focus on efficiency may lead them to judge others harshly for perceived inefficiencies.`,
    career: `ESTJs excel in structured environments where their leadership skills and organizational abilities can shine. Ideal careers include:

Business Management: Their ability to organize and lead teams suits managerial roles.

Law Enforcement and Military: They thrive in environments with clear hierarchies and rules.

Politics and Public Service: ESTJs’ dedication to tradition and community makes them effective leaders.

Finance and Accounting: Their logical and detail-oriented mindset fits well here.

Operations and Logistics: They excel at ensuring systems run smoothly and efficiently.
`,
    ralationship: `As Partners: ESTJs are loyal and dependable, focusing on creating stability and success in relationships.

As Friends: They are reliable and supportive, though they may focus more on practicality than emotional bonding.

As Parents: ESTJs emphasize discipline and instill strong values in their children, often setting high expectations.
`,
    tip: `Embrace Emotional Connections: Practice empathy and active listening to strengthen relationships.

Adapt to Change: Be open to new ideas and unconventional methods.

Encourage Creativity: Allow room for innovation and flexibility in problem-solving.

Balance Work and Relaxation: Prioritize downtime to recharge and prevent burnout.
`,
    funfact: `They make up about 8-12% of the population, often rising to leadership roles in their communities.

Known as "The Supervisor," ESTJs excel at creating order and structure.

Famous ESTJs include Michelle Obama, George W. Bush, and Judge Judy.`
  },
  {
    id: 14,
    mbtiType: 'ESFJ',
    name: 'The Consul',
    description: 'ESFJs are warm, caring, and sociable. They are highly aware of others’ needs and thrive on creating harmony in their relationships.',
    overview: ``,
    characteristic: ``,
    strength: 'Warm, Organized, Loyal, Practical, Sociable.',
    strengths: ``,
    weakness: 'Overly concerned with others’ opinions, Inflexible, Vulnerable to criticism, Reluctant to change.',
    weaknesses: ``,
    career: ``,
    ralationship: ``,
    tip: ``,
    funfact: ``
  },
  {
    id: 15,
    mbtiType: 'ENFJ',
    name: 'The Protagonist',
    description: 'ENFJs are charismatic, empathetic, and natural leaders. They are great at understanding and motivating others, always striving to make a difference.',
    overview: ``,
    characteristic: ``,
    strength: 'Charismatic, Empathetic, Inspirational, Organized, Altruistic.',
    strengths: ``,
    weakness: 'Overly idealistic, Overly sensitive, Struggles with boundaries, Prone to burnout.',
    weaknesses: ``,
    career: ``,
    ralationship: ``,
    tip: ``,
    funfact: ``
  },
  {
    id: 16,
    mbtiType: 'ENTJ',
    name: 'The Commander',
    description: 'ENTJs are bold, strategic, and natural leaders. They excel at setting long-term goals and organizing people and resources to achieve them.',
    overview: ``,
    characteristic: ``,
    strength: 'Confident, Efficient, Strategic, Decisive, Charismatic.',
    strengths: ``,
    weakness: ' Stubborn, Arrogant, Intolerant, Impatient.',
    weaknesses: ``,
    career: ``,
    ralationship: ``,
    tip: ``,
    funfact: ``
  }
];
