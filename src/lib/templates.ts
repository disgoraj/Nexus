
export interface Story {
  id: string;
  title: string;
  storyText: string;
  pattern: string[][];
}

export const storyTemplates: Story[] = [
  {
    id: 'T001',
    title: 'The Lion and the Mouse',
    storyText: "A mighty lion, fierce and proud, is awakened from his nap in the jungle by a tiny mouse. Though angry at first, the lion lets the little mouse go, not believing that someone so small could help him. Weeks later, the lion is trapped by hunters’ net, and the fearless mouse hears his cries. Using her sharp teeth, she nibbles through the ropes, freeing the grateful lion, who learns that small friends can be powerful allies.",
    pattern: [
      ['green', 'green', 'green'],
      ['green', 'green', 'green'],
      ['green', 'green', 'green'],
    ],
  },
  {
    id: 'T002',
    title: 'The Tortoise and the Hare',
    storyText: "The speedy hare mocks slow tortoise and proposes a race. Confident of winning, the hare dashes far ahead and decides to nap under a shady tree. But the tortoise, steady and relentless, keeps moving forward. When the hare finally wakes up, the tortoise has already crossed the finish line, teaching everyone that perseverance and patience win the race.",
    pattern: [
      ['yellow', 'yellow', 'yellow'],
      ['green', 'white', 'green'],
      ['yellow', 'yellow', 'yellow'],
    ],
  },
  {
    id: 'T003',
    title: 'The Ant and the Grasshopper',
    storyText: "All summer, the ant works tirelessly, collecting food for the winter while the grasshopper sings and plays in the sun. The ant warns the grasshopper to prepare for cold days, but he ignores her advice. When winter arrives, the ant is warm and well-fed inside, but the grasshopper, hungry and cold, realizes his mistake. He learns that planning and hard work are important for a safe future.",
    pattern: [
      ['blue', 'red', 'blue'],
      ['red', 'blue', 'red'],
      ['blue', 'red', 'blue'],
    ],
  },
  {
    id: 'T004',
    title: 'The Fox and the Grapes',
    storyText: "A crafty fox spots a bunch of juicy grapes hanging from a vine but can’t reach them no matter how hard he tries. He jumps and stretches, but the grapes remain out of reach. Frustrated, the fox walks away, telling himself the grapes were probably sour anyway. This story teaches that sometimes people pretend not to care about what they can’t have.",
    pattern: [
      ['yellow', 'yellow', 'yellow'],
      ['yellow', 'white', 'yellow'],
      ['yellow', 'yellow', 'yellow'],
    ],
  },
  {
    id: 'T005',
    title: 'The Thirsty Crow',
    storyText: "One hot summer day, a thirsty crow searched everywhere for water but found none. Finally, he spotted a pitcher with water at the bottom, but his beak couldn’t reach it. The crow didn’t give up and thought hard about how to drink the water. He picked up small pebbles and dropped them into the pitcher one by one, raising the water level slowly until he could drink. His smart thinking saved his life, teaching that where there is a will, there is a way.",
    pattern: [
      ['red', 'red', 'red'],
      ['red', 'white', 'red'],
      ['red', 'red', 'red'],
    ],
  },
  {
    id: 'T006',
    title: 'The Boy Who Cried Wolf',
    storyText: "A young shepherd boy was bored watching his sheep and decided to trick nearby villagers by shouting, 'Wolf! Wolf!' to scare them. The villagers came running, but there was no wolf—it was just a joke. The boy repeated this several times, laughing at the villagers. But one day when a real wolf appeared, the boy shouted for help again, and the villagers ignored him, thinking it was another trick. The wolf attacked his sheep, teaching the importance of honesty and how lying breaks trust.",
    pattern: [
      ['blue', 'blue', 'blue'],
      ['blue', 'blue', 'blue'],
      ['blue', 'blue', 'blue'],
    ],
  },
  {
    id: 'T007',
    title: "The Ugly Duckling",
    storyText: "An 'ugly' duckling was shunned by other animals because he looked different and didn’t fit in. He felt lonely and sad and wandered away to find a place where he belonged. One day, he grew up and discovered he was actually a beautiful swan. The story shows that true beauty and worth come from within and encourages children to embrace their uniqueness.",
    pattern: [
      ['red', 'red', 'red'],
      ['white', 'white', 'white'],
      ['red', 'red', 'red'],
    ],
  },
  {
    id: 'T008',
    title: "The Honest Woodcutter",
    storyText: "A poor woodcutter accidentally dropped his axe into a deep river. He sat sadly by the bank, wondering what to do. Suddenly, a water spirit appeared and offered him a golden axe and then a silver one, but he honestly said these were not his. Pleased by his honesty, the spirit gave him back his own axe, along with the gold and silver ones as a reward. This tale shows that honesty is always rewarded in the end.",
    pattern: [
      ['white', 'white', 'white'],
      ['green', 'green', 'green'],
      ['white', 'white', 'white'],
    ],
  },
  {
    id: 'T009',
    title: "The Tale of the Fox and the Crow",
    storyText: "A hungry fox saw a crow holding a piece of cheese in her beak high in a tree. The fox wanted the cheese and thought of a plan. He praised the crow’s beautiful voice and asked her to sing. Proud, the crow opened her beak to sing, dropping the cheese, which the fox quickly grabbed. This story warns against falling for flattery and teaches to be cautious with praise when others may have hidden motives.",
    pattern: [
      ['blue', 'blue', 'blue'],
      ['white', 'white', 'white'],
      ['blue', 'blue', 'blue'],
    ],
  },
  {
    id: 'T010',
    title: "The Little Red Hen",
    storyText: "A little red hen found some wheat seeds and asked her friends—the cat, the dog, and the duck—for help to plant them, but none agreed. She planted and tended to the wheat all by herself. When the wheat grew tall and golden, she asked again for help to harvest, but no one helped. After baking bread from the wheat, she enjoyed the fresh bread alone because only she had worked for it. The story teaches about the value of hard work and sharing rewards fairly.",
    pattern: [
      ['orange', 'orange', 'orange'],
      ['white', 'white', 'white'],
      ['orange', 'orange', 'orange'],
    ],
  },
  {
    id: 'T011',
    title: "The Wolf and the Lamb",
    storyText: "A thirsty lamb was drinking from a stream when a wolf appeared and accused the lamb of muddying the water upstream. The lamb explained he was downstream and couldn’t have done it, but the wolf was determined to find an excuse to attack. The lamb’s innocence didn’t stop the wolf, who chased him away. This tale shows how unfairness happens when someone is angry or selfish and warns to be careful of false accusations.",
    pattern: [
      ['green', 'green', 'green'],
      ['yellow', 'yellow', 'yellow'],
      ['green', 'green', 'green'],
    ],
  },
  {
    id: 'T012',
    title: "The Milkmaid and Her Pail",
    storyText: "A cheerful milkmaid was carrying a pail of fresh milk to the market and daydreamed about all the things she would buy with the money, like eggs, chickens, and new clothes. She imagined each step of her future purchases happily. Suddenly, she tripped and spilled all the milk, losing her chance to buy anything. The story reminds us not to count on things before they happen and to stay focused on the present.",
    pattern: [
      ['yellow', 'yellow', 'yellow'],
      ['red', 'red', 'red'],
      ['yellow', 'yellow', 'yellow'],
    ],
  },
  {
    id: 'T013',
    title: "The Greedy Dog",
    storyText: "A dog was crossing a bridge with a bone in his mouth and saw his own reflection in the water below. Thinking it was another dog with a bigger bone, he barked loudly to scare the 'dog' away, but in doing so, he dropped his own bone into the river and lost it forever. This story teaches that greed can cause you to lose what you already have and that appreciating what you have is wiser.",
    pattern: [
      ['red', 'red', 'red'],
      ['blue', 'blue', 'blue'],
      ['red', 'red', 'red'],
    ],
  },
  {
    id: 'T014',
    title: "The Town Mouse and the Country Mouse",
    storyText: "A city mouse visited his cousin in the countryside and found the simple country life quiet but peaceful, with fresh air and wholesome food. The country mouse invited the town mouse to stay and enjoy the calm life. The town mouse missed the excitement of the city and invited the country mouse to visit, but the country mouse felt unsafe among city dangers and noise. The story shows different lifestyles and suggests being content with what suits you best.",
    pattern: [
      ['white', 'white', 'white'],
      ['orange', 'orange', 'orange'],
      ['white', 'white', 'white'],
    ],
  },
  {
    id: 'T015',
    title: "The Fox and the Cat",
    storyText: "A fox bragged to a clever cat that he had many tricks if hunters came, while the cat only had one. Suddenly, hunters appeared, and while the fox tried all his tricks, he was caught. The cat used its single quick trick—climbing a tree—and escaped safely. The story teaches that sometimes simple, quick thinking is better than many complicated plans.",
    pattern: [
      ['blue', 'blue', 'blue'],
      ['green', 'green', 'green'],
      ['blue', 'blue', 'blue'],
    ],
  },
  {
    id: 'T016',
    title: "The Golden Egg",
    storyText: "A poor farmer’s hen laid one golden egg each day, making him rich. But eager for more, the farmer became greedy and killed the hen to get all the gold inside at once. To his shock, the hen was just like any other inside. The story warns that greed can cause you to lose everything and teaches patience and appreciation.",
    pattern: [
      ['yellow', 'yellow', 'yellow'],
      ['white', 'white', 'white'],
      ['yellow', 'yellow', 'yellow'],
    ],
  },
  {
    id: 'T017',
    title: "The Ant and the Grasshopper",
    storyText: "During a warm summer, the ant worked hard collecting food and storing it carefully for the coming winter. Meanwhile, the grasshopper spent his days singing and playing, not thinking about the future. The ant warned the grasshopper to prepare for the cold, but he ignored the advice. When winter came, the ant was cozy and well-fed while the grasshopper struggled without any food. The story teaches the importance of hard work, planning, and responsibility.",
    pattern: [
      ['green', 'green', 'green'],
      ['red', 'red', 'red'],
      ['green', 'green', 'green'],
    ],
  },
  {
    id: 'T018',
    title: "The Fox and the Grapes",
    storyText: "A hungry fox saw some juicy grapes hanging high on a vine but couldn’t reach them no matter how hard he tried. He jumped and stretched but failed. Finally, frustrated, he walked away saying the grapes were probably sour anyway. The story teaches that sometimes people pretend not to want something they can’t have, a lesson about coping with disappointment.",
    pattern: [
      ['orange', 'orange', 'orange'],
      ['blue', 'blue', 'blue'],
      ['orange', 'orange', 'orange'],
    ],
  },
  {
    id: 'T019',
    title: "The Lion and the Mouse",
    storyText: "A mighty lion was awakened by a tiny mouse who accidentally ran across him. The lion was about to punish the mouse but let him go. Later, when trapped by hunters’ net, the mouse came to his rescue by chewing the ropes. The story teaches that even the smallest creature can be helpful.",
    pattern: [
      ['white', 'white', 'white'],
      ['yellow', 'yellow', 'yellow'],
      ['white', 'white', 'white'],
    ],
  },
  {
    id: 'T020',
    title: "The Royal Carriage",
    storyText: "A beautiful princess rode in a golden yellow carriage with bright red curtains. The wheels of the carriage were also bright red, and it looked so grand as it rolled through the kingdom on its way to the castle.",
    pattern: [
      ['red', 'red', 'red'],
      ['orange', 'orange', 'orange'],
      ['red', 'red', 'red'],
    ],
  },
  {
    id: 'T021',
    title: "The Starry Night",
    storyText: "Late at night, the big blue sky was filled with tiny, twinkling yellow stars. A curious little kitten would sit by the window and watch them, wondering what it would be like to jump and play among them.",
    pattern: [
      ['blue', 'blue', 'blue'],
      ['yellow', 'yellow', 'yellow'],
      ['blue', 'blue', 'blue'],
    ],
  },
  {
    id: 'T022',
    title: 'The Snowy Day',
    storyText: 'Everything was covered in a thick blanket of soft, white snow. The whole world looked clean and quiet. It was the perfect day to build a snowman and make snow angels.',
    pattern: [
      ['white', 'white', 'white'],
      ['white', 'white', 'white'],
      ['white', 'white', 'white'],
    ],
  },
  {
    id: 'T023',
    title: 'The Little Red Car',
    storyText: 'A shiny little red car loved to drive all around the town. It went "Beep, beep!" at all its friends and was always ready for a new adventure on the open road.',
    pattern: [
      ['red', 'red', 'red'],
      ['red', 'red', 'red'],
      ['red', 'red', 'red'],
    ],
  },
  {
    id: 'T024',
    title: 'A Sunny Day',
    storyText: 'The sun was a giant yellow ball in the sky. It shone down on the happy flowers and made everyone feel warm and cheerful. The bees buzzed and the birds sang, enjoying the bright yellow light.',
    pattern: [
        ['yellow', 'yellow', 'yellow'],
        ['yellow', 'yellow', 'yellow'],
        ['yellow', 'yellow', 'yellow'],
    ],
  },
  {
    id: 'T025',
    title: 'The Quiet Night',
    storyText: 'When the sun goes to sleep, the world becomes dark and quiet. The black night helps all the little animals rest so they can play again tomorrow. Look for the moon and stars twinkling high above!',
    pattern: [
        ['black', 'black', 'black'],
        ['black', 'black', 'black'],
        ['black', 'black', 'black'],
    ],
  }
];

export function matchPattern(detectedMatrix: string[][]): Story | null {
  for (const template of storyTemplates) {
    if (JSON.stringify(detectedMatrix) === JSON.stringify(template.pattern)) {
      return template;
    }
  }
  return null;
}
