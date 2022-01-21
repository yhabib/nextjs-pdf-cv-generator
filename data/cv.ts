type Experience = {
  company: {
    label: string;
    url: string;
  };
  role: string;
  location: string;
  range: string;
  tasks: string[];
};
export const experience: Experience[] = [
  {
    company: {
      label: 'METABook',
      url: 'http://exampe.io',
    },
    location: 'San Francisco, CA',
    range: 'Jan 2020 - Present',
    role: 'Software Engineer',
    tasks: [
      'Develop the best thing every',
      'Created the most exiciting project ever',
      'Automiatized everyon&apos;s work',
    ],
  },
  {
    company: {
      label: 'Joogle',
      url: 'http://exampe.io',
    },
    location: 'San Francisco, CA',
    range: 'Jan 2018 - Dec 2019',
    role: 'Software Engineer',
    tasks: ['Build the best thing ever', 'Made a lot of friends', 'Played a lot of pingpong'],
  },
  {
    company: {
      label: 'WatchFlix',
      url: 'http://exampe.io',
    },
    location: 'San Francisco, CA',
    range: 'Jan 2017 - Dec 2018',
    role: 'Software Engineer Internship',
    tasks: ['Watch a lot of movies', 'Played a lot of darts'],
  },
];

type Education = {
  school: {
    label: string;
    url: string;
  };
  location: string;
  range: string;
  degree: string;
  description?: string;
};

export const education: Education[] = [
  {
    school: {
      label: 'University of Life',
      url: 'http://exampe.edu',
    },
    location: 'Earth, Milky Way',
    range: 'Jan 2011 - Dec 2014',
    degree: 'Bsc. in Computer Science',
  },
  {
    school: {
      label: 'University of Life',
      url: 'http://exampe.edu',
    },
    location: 'Earth, Milky Way',
    range: 'Jan 2015 - Dec 2016',
    degree: 'MSc. in Computer Science',
  },
];
