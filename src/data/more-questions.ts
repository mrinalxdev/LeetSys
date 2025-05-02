import type { Question } from './questions';

export const moreEasyQuestions: Question[] = [
  {
    id: 'e1',
    title: 'Design a URL Shortener',
    difficulty: 'easy',
    description: 'Create a service that takes long URLs and converts them into short, shareable links.',
    subtopics: [
      {
        id: 'e1-s1',
        title: 'URL Encoding',
        completed: false,
        guidance: 'Implement a base62 encoding scheme to convert database IDs to short strings.\n- Use a counter in database\n- Convert numeric ID to base62 string\n- Handle collision cases'
      },
      {
        id: 'e1-s2',
        title: 'Redirection',
        completed: false,
        guidance: 'Create an endpoint that redirects short URLs to original URLs.\n- Use HTTP 301 for permanent redirect\n- Track click statistics\n- Handle invalid URLs gracefully'
      },
      {
        id: 'e1-s3',
        title: 'Database Schema',
        completed: false,
        guidance: 'Design the data storage for URLs.\n- Store original URL, short code, creation date\n- Add indexes for fast lookups\n- Consider TTL for unused links'
      }
    ],
    progress: 0,
    attempts: 0,
    languages: []
  },
  {
    id: 'e2',
    title: 'Design a Basic Chat Application',
    difficulty: 'easy',
    description: 'Build a simple real-time chat system with one-to-one messaging.',
    subtopics: [
      {
        id: 'e2-s1',
        title: 'WebSocket Connection',
        completed: false,
        guidance: 'Implement WebSocket server for real-time communication.\n- Handle connection lifecycle\n- Manage user sessions\n- Implement heartbeat for connection health'
      },
      {
        id: 'e2-s2',
        title: 'Message Storage',
        completed: false,
        guidance: 'Design how messages will be persisted.\n- Store sender, recipient, content, timestamp\n- Implement basic message history\n- Consider read receipts'
      },
      {
        id: 'e2-s3',
        title: 'Frontend Integration',
        completed: false,
        guidance: 'Connect frontend to real-time backend.\n- Handle incoming messages\n- Display typing indicators\n- Manage connection states'
      }
    ],
    progress: 0,
    attempts: 0,
    languages: []
  },
  {
    id: 'e3',
    title: 'Design a File Upload Service',
    difficulty: 'easy',
    description: 'Create a service that allows users to upload and share files.',
    subtopics: [
      {
        id: 'e3-s1',
        title: 'Upload Handling',
        completed: false,
        guidance: 'Implement file upload endpoint.\n- Handle multipart form data\n- Validate file types and sizes\n- Provide progress feedback'
      },
      {
        id: 'e3-s2',
        title: 'Storage System',
        completed: false,
        guidance: 'Decide on file storage approach.\n- Local filesystem vs cloud storage\n- Organize files in directories\n- Handle duplicate filenames'
      },
      {
        id: 'e3-s3',
        title: 'Access Control',
        completed: false,
        guidance: 'Manage file access permissions.\n- Generate shareable links\n- Set expiration times\n- Password protection option'
      }
    ],
    progress: 0,
    attempts: 0,
    languages: []
  }
];

export const moreMediumQuestions: Question[] = [
  {
    id: 'm1',
    title: 'Design a Distributed Cache',
    difficulty: 'medium',
    description: 'Create a caching system that can scale across multiple servers.',
    subtopics: [
      {
        id: 'm1-s1',
        title: 'Cache Eviction Policy',
        completed: false,
        guidance: 'Implement LRU (Least Recently Used) eviction.\n- Track access patterns\n- Handle memory limits\n- Make thread-safe'
      },
      {
        id: 'm1-s2',
        title: 'Consistent Hashing',
        completed: false,
        guidance: 'Distribute data across cache nodes.\n- Implement hash ring\n- Handle node additions/removals\n- Manage replication'
      },
      {
        id: 'm1-s3',
        title: 'Cache Invalidation',
        completed: false,
        guidance: 'Keep cache consistent with source.\n- Implement TTLs\n- Handle write-through/write-around\n- Batch updates'
      }
    ],
    progress: 0,
    attempts: 0,
    languages: []
  },
  {
    id: 'm2',
    title: 'Design an API Rate Limiter',
    difficulty: 'medium',
    description: 'Create a service that limits how often users can call your API.',
    subtopics: [
      {
        id: 'm2-s1',
        title: 'Token Bucket Algorithm',
        completed: false,
        guidance: 'Implement token bucket rate limiting.\n- Track tokens per user\n- Handle burst traffic\n- Make it distributed'
      },
      {
        id: 'm2-s2',
        title: 'Storage Backend',
        completed: false,
        guidance: 'Choose where to store rate limits.\n- Redis for speed\n- Handle persistence\n- Consider sharding'
      },
      {
        id: 'm2-s3',
        title: 'Edge Cases',
        completed: false,
        guidance: 'Handle special scenarios.\n- Whitelisted IPs\n- Different limits per endpoint\n- Graceful degradation'
      }
    ],
    progress: 0,
    attempts: 0,
    languages: []
  },
  {
    id: 'm3',
    title: 'Design a News Feed System',
    difficulty: 'medium',
    description: 'Build a system that shows users personalized content updates.',
    subtopics: [
      {
        id: 'm3-s1',
        title: 'Feed Generation',
        completed: false,
        guidance: 'Implement pull vs push model.\n- Handle fan-out for push\n- Rank content by relevance\n- Personalize based on interests'
      },
      {
        id: 'm3-s2',
        title: 'Content Storage',
        completed: false,
        guidance: 'Design data model for posts.\n- Optimize for read performance\n- Handle media attachments\n- Support pagination'
      },
      {
        id: 'm3-s3',
        title: 'Real-time Updates',
        completed: false,
        guidance: 'Push new content to users.\n- WebSocket connections\n- Handle offline users\n- Batch notifications'
      }
    ],
    progress: 0,
    attempts: 0,
    languages: []
  }
];

export const moreHardQuestions: Question[] = [
  {
    id: 'h1',
    title: 'Design a Distributed Database',
    difficulty: 'hard',
    description: 'Create a database system that spans multiple geographic regions.',
    subtopics: [
      {
        id: 'h1-s1',
        title: 'Replication Strategy',
        completed: false,
        guidance: 'Implement multi-region replication.\n- Choose synchronous vs async\n- Handle conflict resolution\n- Manage replication lag'
      },
      {
        id: 'h1-s2',
        title: 'Consistency Model',
        completed: false,
        guidance: 'Design consistency guarantees.\n- Implement quorum reads/writes\n- Handle partition tolerance\n- Tune consistency levels'
      },
      {
        id: 'h1-s3',
        title: 'Sharding Scheme',
        completed: false,
        guidance: 'Distribute data across nodes.\n- Choose sharding key carefully\n- Handle rebalancing\n- Manage cross-shard queries'
      }
    ],
    progress: 0,
    attempts: 0,
    languages: []
  },
  {
    id: 'h2',
    title: 'Design a Search Engine',
    difficulty: 'hard',
    description: 'Build a system that indexes and searches large volumes of text.',
    subtopics: [
      {
        id: 'h2-s1',
        title: 'Inverted Index',
        completed: false,
        guidance: 'Create efficient text indexing.\n- Tokenize documents\n- Store term frequencies\n- Handle updates to index'
      },
      {
        id: 'h2-s2',
        title: 'Ranking Algorithm',
        completed: false,
        guidance: 'Implement relevance scoring.\n- TF-IDF calculations\n- PageRank for authority\n- Personalization factors'
      },
      {
        id: 'h2-s3',
        title: 'Distributed Query',
        completed: false,
        guidance: 'Process searches across nodes.\n- Fan out queries\n- Merge results\n- Handle timeouts'
      }
    ],
    progress: 0,
    attempts: 0,
    languages: []
  },
  {
    id: 'h3',
    title: 'Design a Stock Exchange',
    difficulty: 'hard',
    description: 'Create a system for matching buy/sell orders in real-time.',
    subtopics: [
      {
        id: 'h3-s1',
        title: 'Order Matching',
        completed: false,
        guidance: 'Implement matching engine.\n- Price-time priority\n- Handle market/limit orders\n- Process partial fills'
      },
      {
        id: 'h3-s2',
        title: 'Market Data',
        completed: false,
        guidance: 'Distribute price updates.\n- Optimize for low latency\n- Handle burst traffic\n- Manage subscriptions'
      },
      {
        id: 'h3-s3',
        title: 'Fault Tolerance',
        completed: false,
        guidance: 'Ensure system reliability.\n- Implement order recovery\n- Handle network partitions\n- Atomic transactions'
      }
    ],
    progress: 0,
    attempts: 0,
    languages: []
  }
];