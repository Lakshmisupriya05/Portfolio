import { motion } from 'framer-motion';
import { Trophy, Award, Star, Calendar } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

interface Achievement {
  id: string;
  title: string;
  description: string;
  date: string;
  icon: 'trophy' | 'award' | 'star';
  type: string;
}

const achievements: Achievement[] = [
  {
    id: '1',
    title: 'Myntra WeForShe HackerRamp 2026 — Top 100 Finalist',
    description:
      'Selected among the Top 100 teams in the Myntra WeForShe HackerRamp 2026 hackathon, recognizing innovation, problem-solving, and technical implementation.',
    date: '2026',
    icon: 'trophy',
    type: 'Hackathon',
  },
  {
    id: '2',
    title: 'NASA Space Apps Challenge 2026 — Selected Participant',
    description:
      'Selected to participate in the NASA Space Apps Challenge 2026, a global hackathon focused on solving real-world challenges through technology, innovation, and data-driven solutions.',
    date: '2026',
    icon: 'trophy',
    type: 'Global Hackathon',
  },
  {
    id: '3',
    title: 'Academic Excellence — Top 5 in Department',
    description:
      'Achieved a 9.42/10 B.Tech CGPA and secured a Top 5 rank in the department, demonstrating consistent academic excellence throughout the degree.',
    date: '2023 - Present',
    icon: 'award',
    type: 'Academic',
  },
  {
    id: '4',
    title: 'LeetCode — 250+ Problems Solved',
    description:
      'Solved 250+ coding problems and consistently ranked among the Top 20% in weekly contests, strengthening problem-solving and data structures and algorithms skills.',
    date: '2026',
    icon: 'star',
    type: 'Competitive Programming',
  },
  {
    id: '5',
    title: 'HackerRank — 5-Star Problem Solving',
    description:
      'Earned a 5-Star Problem Solving rating along with a Gold Badge in Java and Certified Core Python credentials.',
    date: '2026',
    icon: 'award',
    type: 'Coding',
  },
];

const iconMap = {
  trophy: Trophy,
  award: Award,
  star: Star,
};

export const AchievementsSection = () => {
  const sectionRef = useScrollAnimation();

  return (
    <section
      id="achievements"
      className="py-24 md:py-32 relative overflow-hidden bg-muted/30"
    >
      <div className="absolute top-0 left-1/4 w-1/2 h-1/2 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4">
        <div ref={sectionRef} className="max-w-4xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-primary font-medium text-sm uppercase tracking-widest"
            >
              Milestones
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="section-heading mt-2"
            >
              Key{' '}
              <span className="gradient-text">Achievements</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="section-subheading"
            >
              Celebrating milestones and recognition along my journey as a
              developer.
            </motion.p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-primary" />

            {achievements.map((achievement, index) => {
              const Icon = iconMap[achievement.icon];
              const isLeft = index % 2 === 0;

              return (
                <motion.div
                  key={achievement.id}
                  initial={{
                    opacity: 0,
                    x: isLeft ? -30 : 30,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1,
                  }}
                  viewport={{ once: true }}
                  className={`relative flex items-start gap-6 mb-12 ${
                    isLeft ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Icon node */}
                  <div className="absolute left-6 md:left-1/2 -translate-x-1/2 z-10">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center">
                      <Icon className="w-5 h-5 text-primary-foreground" />
                    </div>
                  </div>

                  {/* Content card */}
                  <div
                    className={`ml-20 md:ml-0 md:w-[calc(50%-3rem)] ${
                      isLeft
                        ? 'md:mr-auto md:pr-12'
                        : 'md:ml-auto md:pl-12'
                    }`}
                  >
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="p-6 glass-card rounded-xl hover:border-primary/30 transition-all"
                    >
                      {/* Type + Date */}
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary font-medium">
                          {achievement.type}
                        </span>

                        <span className="flex items-center gap-1 text-xs text-muted-foreground">
                          <Calendar className="w-3 h-3" />
                          {achievement.date}
                        </span>
                      </div>

                      {/* Achievement title */}
                      <h3 className="font-display text-lg font-semibold mb-2">
                        {achievement.title}
                      </h3>

                      {/* Description */}
                      <p className="text-sm text-muted-foreground">
                        {achievement.description}
                      </p>
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
