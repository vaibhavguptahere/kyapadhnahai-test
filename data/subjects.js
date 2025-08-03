export const semesterData = [
  {
    id: 'semester-1',
    name: 'Semester 1',
    emoji: '🌱',
    description: 'Easy hai lekin jaada halke mei bhi matt le lena!!',
    subjects: [
      {
        id: 'Calculus',
        name: 'Engineering Calculus',
        emoji: '📐',
        description: 'Mathematics',
        difficulty: '4 Credits',
        gradient: 'from-blue-500 to-cyan-500',
        trending: true,
        kitnaParhaHai: {
          tips: [
            'Attend classes regularly - concepts build on each other',
            'Although easy, looks difficult at starting',
            'Don\'t skip the theory - understand the \'why\' behind formulas',
            'Tut questions are enough for practice'
          ]
        },
        topics: [
          {
            name: 'Notes',
            notes: [
              { title: 'Official PPT Notes', url: 'https://drive.google.com/file/d/1RttkYmrxab_j4Auz6AKx9JunyvpY1C32/view?usp=drive_link', type: 'pdf' }
            ],
            videos: [
              { title: 'Playlist', url: 'https://www.youtube.com/playlist?list=PLRZStkcHy4ATGBwKo1wabyXqjzoEbLLxa', platform: 'YouTube' }
            ]
          },
          {
            name: 'Tutorials',
            notes: [
              { title: 'Tuts With Soln', url: 'https://drive.google.com/file/d/1JO0-h6TgGXbJTSslQsj-T3uKqC_q8zBl/view?usp=drive_link', type: 'pdf' }
            ],
            videos: [
              { title: 'Gajendra Purohit', url: 'https://www.youtube.com/playlist?list=PLU6SqdYcYsfJqbZvQECrwnlQrp4fg6isX', platform: 'YouTube' }
            ]
          }
        ],
        resources: [
          { title: '5 Min Engineering', url: 'https://www.youtube.com/playlist?list=PLYwpaL_SFmcBIvoAp958f062XeOuF8KGT', type: 'youtube' }
        ]
      },
      {
        id: 'physics-1',
        name: 'Electrical and Electronics Engineering',
        emoji: '⚡',
        description: 'Electronics',
        difficulty: '4 Credits',
        gradient: 'from-purple-500 to-pink-500',
        kitnaParhaHai: {
          tips: [
            'Physics is all about understanding concepts, not memorizing',
            'Understanding the questions type is important',
            'Tut questions are enough for practice'
          ]
        },
        topics: [
          {
            name: 'Notes',
            notes: [
              { title: 'Official PPT Notes', url: 'https://drive.google.com/file/d/1PTrmw_FRDY0gOpx2EhMZuc3pEUGeI0HX/view?usp=drive_link', type: 'pdf' }
            ],
            videos: [
              { title: 'Playlist', url: 'https://www.youtube.com/playlist?list=PL0o_zxa4K1BV9E-N8tSExU1djL6slnjbL', platform: 'YouTube' }
            ]
          },
          {
            name: 'Tutorial',
            notes: [
              { title: 'Tuts with soln', url: 'https://drive.google.com/file/d/1L4JPbNzvlFDIRrQyPt9NZt1UELedq1Sn/view?usp=drive_link', type: 'pdf' }
            ],
            videos: [
              { title: 'Perfect Computer Engineer', url: 'https://www.youtube.com/playlist?list=PLPIwNooIb9vhiZRRq1fEWXvSLz7VMeqSh', platform: 'youtube' },
            ]
          },
          {
            name: 'EC Lab Manual',
            notes: [
              { title: 'Experiments', url: 'https://drive.google.com/file/d/1xBgL0-Y_kdCu5tRR8hg2IVLf1qL7LOXw/view?usp=drive_link', type: 'pdf' }
            ],
            videos: [
            ]
          },
          {
            name: 'EC Experiments',
            notes: [
              { title: 'TinkerCad', url: 'https://drive.google.com/drive/folders/1w4TjTmlLnkQrdkRMJLSfj3FXopK2hu4Y?usp=drive_link', type: 'zip' }
            ],
            videos: [

            ]
          }
        ],
        resources: [
        ]
      },
      {
        id: 'lifeskills',
        name: 'New Age Life Skills',
        emoji: '🦺',
        description: 'Life Skills',
        difficulty: '2 Credits',
        gradient: 'from-green-500 to-teal-500',
        notesCount: 20,
        videosCount: 12,
        trending: false,
        kitnaParhaHai: {
          effort: '65%',
          timeRequired: '3 hours/day',
          importance: 'High',
          tips: [
            'Attend Classes for fun and entertainment',
            'Do focus on the assessments provided in the class, crucial for internal marks',
            'Easy to score, can be done at the time of exams',
            'No tuts, no video lectures required, read ppt only'
          ]
        },
        topics: [
          {
            name: 'Notes',
            notes: [
              { title: 'Official ppt ', url: 'https://drive.google.com/file/d/1u5NTEVZ34bHEdyJrRWSKLVhsvlTkoc2g/view?usp=drive_link', type: 'pdf' }
            ],
            videos: [
            ]
          },
          {
            name: 'Topics',
            notes: [
              { title: 'Important topics', url: 'https://docs.google.com/document/d/1WsW2V_9DfHxjxe0wge6IjorymtyJJjfE/edit?usp=drive_link&ouid=116345573511448263384&rtpof=true&sd=true', type: 'docx' }
            ],
            videos: [
            ]
          }
        ],
        resources: [
        ]
      },
      {
        id: 'python',
        name: 'Computational Thinking and Programming',
        emoji: '💻',
        description: 'Python',
        difficulty: '5 Credits',
        gradient: 'from-indigo-500 to-purple-500',
        notesCount: 18,
        videosCount: 14,
        trending: true,
        kitnaParhaHai: {
          effort: '75%',
          timeRequired: '4 hours/day',
          importance: 'Very High',
          tips: [
            'Less weightage of tut questions in exams',
            'Grasp the theroetical part very well',
            'It\'s easy, can be done from any playlist',
            'Credits are imp in this subject for good sgpa, so focus on it',
          ]
        },
        topics: [
          {
            name: 'Notes',
            importance: 'High',
            notes: [
              { title: 'Official PPT', url: 'https://drive.google.com/file/d/1pf807K_HbqL-99Q68-ZP-3m3ozexmr8s/view?usp=drive_link', type: 'ppt' }
            ],
            videos: [
              { title: 'Apna College Playlist', url: 'https://www.youtube.com/playlist?list=PLGjplNEQ1it8-0CmoljS5yeV-GlKSUEt0', platform: 'YouTube' }
            ]
          },
          {
            name: 'Questions',
            importance: 'High',
            notes: [
              { title: 'Imp ques', url: 'https://drive.google.com/file/d/1z83GicwihAtn0qFvR-M-3SK02UHkYHYo/view?usp=drive_link', type: 'pdf' }
            ],
            videos: [
              { title: 'Code with Harry Playlist', url: 'https://www.youtube.com/playlist?list=PLu0W_9lII9agwh1XjRt242xIpHhPT2llg', platform: 'YouTube' }
            ]
          },
          {
            name: 'Tutorials',
            importance: 'High',
            notes: [
              { title: 'All Tuts', url: 'https://drive.google.com/file/d/12qLJxZGcI8gFpu8rgNc7S5pEcGgg8JwM/view?usp=drive_link', type: 'pdf' }
            ],
            videos: [
            ]
          }
        ],
        resources: [
        ]
      }
    ]
  },

  // Semester-2
  {
    id: 'semester-2',
    name: 'Semester 2',
    emoji: '🌿',
    description: 'Bhai bilkul bhi halke mei matt lena!! ☠️',
    subjects: [
      {
        id: 'mathematics',
        name: 'Linear Algebra and Ordinary Differential Equations',
        emoji: '📊',
        description: 'Mathematics',
        difficulty: '4 Credits',
        gradient: 'from-cyan-500 to-blue-500',
        notesCount: 23,
        videosCount: 16,
        trending: false,
        kitnaParhaHai: {
          effort: '70%',
          timeRequired: '3-4 hours/day',
          importance: 'High',
          tips: [
            'Tuts are sufficient for practice',
            'Integration questions are important',
            'Understand eigenvalues and eigenvectors conceptually'
          ]
        },
        topics: [
          {
            name: 'Tutorials',
            notes: [
              { title: 'All tuts', url: 'https://drive.google.com/file/d/1QqBXYPy6K-oH4KFKibp64GPQqGYZnZVI/view?usp=drive_link', type: 'pdf' },
            ],
            videos: []
          }
        ],
        resources: [
        ]
      },
      {
        id: 'physics-2',
        name: 'Electromagnetism & Mechanics',
        emoji: '🔬',
        description: 'Mechanics',
        difficulty: '5 Credits',
        gradient: 'from-pink-500 to-rose-500',
        notesCount: 24,
        videosCount: 17,
        trending: true,
        kitnaParhaHai: {
          effort: '80%',
          timeRequired: '4-5 hours/day',
          importance: 'Very High',
          tips: [
            'Electromagnetism is tough but super important',
            'Exams focus on problem solving, tuts have less weightage',
            'Grasp the concepts of problems of tuts',
          ]
        },
        topics: [
          {
            name: 'Notes & Formulas',
            importance: 'High',
            notes: [
              { title: 'Official Ppt', url: 'https://drive.google.com/file/d/1WSukIZqrMB_rxtBz9vKgTV9O758sg6VK/view?usp=drive_link', type: 'pdf' },
              { title: 'Formulas', url: 'https://drive.google.com/file/d/1IN06VnJyHSYv4PVYqfhw2CMuizPxYhUD/view?usp=drive_link', type: 'pdf' }
            ],
            videos: [
              { title: 'Electromagnetism Lectures', url: 'https://www.youtube.com/playlist?list=PLyqSpQzTE6M_OXWtn1RUnuZNSbSSy6Lys', platform: 'YouTube' }
            ]
          },
          {
            name: 'Questions',
            importance: 'High',
            notes: [
              { title: 'Electrostatics', url: 'https://drive.google.com/file/d/16lYgCYgc_mtHZHcHHHQHMvFFi2-675PO/view?usp=drive_link', type: 'pdf' },
              { title: 'Magnetostatics', url: 'https://drive.google.com/file/d/1zCoeKKmqrtYvpdwyuF_YHuWh_ft-aWvD/view?usp=drive_link', type: 'pdf' }
            ],
            videos: [
              { title: 'Electromagnetism Tuts', url: ' https://www.youtube.com/playlist?list=PLGX_0Q3t3FpNpbZVN4xZ192VdaAY_Rq8x', platform: 'YouTube' }
            ]
          },
          {
            name: 'Lab Manual',
            importance: 'High',
            notes: [
              { title: 'PDF', url: 'https://drive.google.com/file/d/1Eiz0NLUeZ5saUcH-bwqJzM5LprU92G9p/view?usp=drive_link', type: 'pdf' }
            ],
            videos: []
          }
        ],
        resources: [
        ]
      },
      {
        id: 'data-structures',
        name: 'Object Oriented Programming using Java',
        emoji: '🗂️',
        description: 'Java',
        difficulty: '6 Credits',
        gradient: 'from-violet-500 to-purple-500',
        notesCount: 28,
        videosCount: 22,
        trending: true,
        kitnaParhaHai: {
          effort: '85%',
          timeRequired: '5-6 hours/day',
          importance: 'Very High',
          tips: [
            'Very Important for good sgpa, having high credits',
            'No requirement of tuts, focus on notes and theory',
            'Grasp the imp questions added in the notes section'
          ]
        },
        topics: [
          {
            name: 'Notes',
            importance: 'High',
            notes: [
              { title: 'Official Ppt', url: 'https://drive.google.com/file/d/11FaNbOY7kBZimNVGz7HbmhN6vxZ2j7JS/view?usp=drive_link', type: 'notes' }
            ],
            videos: [
              { title: 'Apna College Playlist', url: ' https://www.youtube.com/playlist?list=PLfqMhTWNBTe3LtFWcvwpqTkUSlB32kJop', platform: 'YouTube' }
            ]
          },
          {
            name: 'Questions',
            importance: 'High',
            notes: [
              { title: 'Set-1', url: 'https://drive.google.com/file/d/1FjEUiSH66B0B_Smx4w-B8GqdyQtu3Pkd/view?usp=drive_link', type: 'notes' },
              { title: 'Set-2', url: 'https://drive.google.com/file/d/10_ApWRSSkfQ9px6oXd0zZa7VZDSwUoYR/view?usp=drive_link', type: 'notes' }
            ],
            videos: [

            ]
          }
        ],
        resources: [

        ]
      },
      {
        id: 'evs',
        name: 'Environment and Sustainability',
        emoji: '🍄‍🟫',
        description: 'EVS',
        difficulty: '3 Credits',
        gradient: 'from-green-500 to-red-500',
        kitnaParhaHai: {

          tips: [
            'It\'s easy can be done at the time of exams',
            'No tuts, no video lectures required, read ppt only',
          ]
        },
        topics: [
          {
            name: 'Notes',
            importance: 'High',
            notes: [
              { title: 'Official ppt', url: 'https://drive.google.com/file/d/1J31zK1QimcOZY1ppjdgqMjT9ntXx4IEg/view?usp=drive_link', type: 'ppt' },
            ],
            videos: [

            ]
          },
          {
            name: 'Questions',
            importance: 'High',
            notes: [
              { title: 'Case Study Questions', url: 'https://drive.google.com/file/d/1lHBgJ_mmrEmIhUqwOzXX6osXG1LgAwEL/view?usp=drive_link', type: 'ppt' },
            ],
            videos: [

            ]
          }
        ],
        resources: [
        ]
      },
      {
        id: 'dd',
        name: 'Digital Design',
        emoji: '🧮',
        description: 'DD',
        difficulty: '4 Credits',
        gradient: 'from-blue-500 to-red-500',
        kitnaParhaHai: {
          tips: [
            'This subject is easy',
            'No tutorials are provided',
            'Sample questions are enough for practice, provided in the notes section'
          ]
        },
        topics: [
          {
            name: 'Questions',
            importance: 'High',
            notes: [
              { title: 'Mid Sems Question Bank', url: 'https://drive.google.com/file/d/1VcsgfrUd3SqITwpoc1Ooz458tVUgu2bU/view?usp=drive_link', type: 'pdf' },
              { title: 'End Sems Question Bank', url: 'https://drive.google.com/file/d/1rghNoKMZ4jl4goaocmmG8vvzhtekQkvF/view?usp=drive_link', type: 'pdf' }
            ],
            videos: [
              { title: 'One Shot Lecture', url: 'https://youtu.be/9Tn9M98yER8?si=kItSGX5Fz---oLOu', platform: 'YouTube' }
            ]
          }
        ],
        resources: [
        ]
      },
      {
        id: 'dms',
        name: 'Discrete Mathematical Structures',
        emoji: '💡',
        description: 'DMS',
        difficulty: '4 Credits',
        gradient: 'from-orange-500 to-purple-500',
        notesCount: 28,
        videosCount: 22,
        trending: true,
        kitnaParhaHai: {
          effort: '85%',
          timeRequired: '5-6 hours/day',
          importance: 'Very High',
          tips: [
            'Tuts are enough for practice',
            'Easy Subject, score high marks for good sgpa'
          ]
        },
        topics: [
          {
            name: 'Tutorials',
            importance: 'High',
            notes: [
              { title: 'All Tuts', url: 'https://drive.google.com/file/d/1JYu7hpGKspD1k3kOKAHCJSWcxG0QNyQK/view?usp=drive_link', type: 'pdf' }
            ],
            videos: [
              { title: 'One Shot Lecture', url: 'https://youtu.be/papVRQqtrgc?si=GUv1_ILeN1js80Ws', platform: 'YouTube' }
            ]
          }
        ],
        resources: [
        ]
      }
    ]
  },
];

// Keep the old subjects data for backward compatibility
export const subjectsData = semesterData.reduce((acc, semester) => {
  return [...acc, ...semester.subjects];
}, []);