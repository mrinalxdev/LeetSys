// import type { Question } from './questions';

// export const moreEasyQuestions: Question[] = [
//   {
//     id: 'e1',
//     title: 'Design a URL Shortener',
//     difficulty: 'easy',
//     description: 'Create a service that takes long URLs and converts them into short, shareable links.',
//     subtopics: [
//       {
//         id: 'e1-s1',
//         title: 'URL Encoding',
//         completed: false,
//         guidance: 'Implement a base62 encoding scheme to convert database IDs to short strings.\n- Use a counter in database\n- Convert numeric ID to base62 string\n- Handle collision cases'
//       },
//       {
//         id: 'e1-s2',
//         title: 'Redirection',
//         completed: false,
//         guidance: 'Create an endpoint that redirects short URLs to original URLs.\n- Use HTTP 301 for permanent redirect\n- Track click statistics\n- Handle invalid URLs gracefully'
//       },
//       {
//         id: 'e1-s3',
//         title: 'Database Schema',
//         completed: false,
//         guidance: 'Design the data storage for URLs.\n- Store original URL, short code, creation date\n- Add indexes for fast lookups\n- Consider TTL for unused links'
//       }
//     ],
//     progress: 0,
//     attempts: 0,
//     languages: []
//   },
//   {
//     id: 'e2',
//     title: 'Design a Basic Chat Application',
//     difficulty: 'easy',
//     description: 'Build a simple real-time chat system with one-to-one messaging.',
//     subtopics: [
//       {
//         id: 'e2-s1',
//         title: 'WebSocket Connection',
//         completed: false,
//         guidance: 'Implement WebSocket server for real-time communication.\n- Handle connection lifecycle\n- Manage user sessions\n- Implement heartbeat for connection health'
//       },
//       {
//         id: 'e2-s2',
//         title: 'Message Storage',
//         completed: false,
//         guidance: 'Design how messages will be persisted.\n- Store sender, recipient, content, timestamp\n- Implement basic message history\n- Consider read receipts'
//       },
//       {
//         id: 'e2-s3',
//         title: 'Frontend Integration',
//         completed: false,
//         guidance: 'Connect frontend to real-time backend.\n- Handle incoming messages\n- Display typing indicators\n- Manage connection states'
//       }
//     ],
//     progress: 0,
//     attempts: 0,
//     languages: []
//   },
//   {
//     id: 'e3',
//     title: 'Design a File Upload Service',
//     difficulty: 'easy',
//     description: 'Create a service that allows users to upload and share files.',
//     subtopics: [
//       {
//         id: 'e3-s1',
//         title: 'Upload Handling',
//         completed: false,
//         guidance: 'Implement file upload endpoint.\n- Handle multipart form data\n- Validate file types and sizes\n- Provide progress feedback'
//       },
//       {
//         id: 'e3-s2',
//         title: 'Storage System',
//         completed: false,
//         guidance: 'Decide on file storage approach.\n- Local filesystem vs cloud storage\n- Organize files in directories\n- Handle duplicate filenames'
//       },
//       {
//         id: 'e3-s3',
//         title: 'Access Control',
//         completed: false,
//         guidance: 'Manage file access permissions.\n- Generate shareable links\n- Set expiration times\n- Password protection option'
//       }
//     ],
//     progress: 0,
//     attempts: 0,
//     languages: []
//   }
// ];

// export const moreMediumQuestions: Question[] = [
//   {
//     id: 'm1',
//     title: 'Design a Distributed Cache',
//     difficulty: 'medium',
//     description: 'Create a caching system that can scale across multiple servers.',
//     subtopics: [
//       {
//         id: 'm1-s1',
//         title: 'Cache Eviction Policy',
//         completed: false,
//         guidance: 'Implement LRU (Least Recently Used) eviction.\n- Track access patterns\n- Handle memory limits\n- Make thread-safe'
//       },
//       {
//         id: 'm1-s2',
//         title: 'Consistent Hashing',
//         completed: false,
//         guidance: 'Distribute data across cache nodes.\n- Implement hash ring\n- Handle node additions/removals\n- Manage replication'
//       },
//       {
//         id: 'm1-s3',
//         title: 'Cache Invalidation',
//         completed: false,
//         guidance: 'Keep cache consistent with source.\n- Implement TTLs\n- Handle write-through/write-around\n- Batch updates'
//       }
//     ],
//     progress: 0,
//     attempts: 0,
//     languages: []
//   },
//   {
//     id: 'm2',
//     title: 'Design an API Rate Limiter',
//     difficulty: 'medium',
//     description: 'Create a service that limits how often users can call your API.',
//     subtopics: [
//       {
//         id: 'm2-s1',
//         title: 'Token Bucket Algorithm',
//         completed: false,
//         guidance: 'Implement token bucket rate limiting.\n- Track tokens per user\n- Handle burst traffic\n- Make it distributed'
//       },
//       {
//         id: 'm2-s2',
//         title: 'Storage Backend',
//         completed: false,
//         guidance: 'Choose where to store rate limits.\n- Redis for speed\n- Handle persistence\n- Consider sharding'
//       },
//       {
//         id: 'm2-s3',
//         title: 'Edge Cases',
//         completed: false,
//         guidance: 'Handle special scenarios.\n- Whitelisted IPs\n- Different limits per endpoint\n- Graceful degradation'
//       }
//     ],
//     progress: 0,
//     attempts: 0,
//     languages: []
//   },
//   {
//     id: 'm3',
//     title: 'Design a News Feed System',
//     difficulty: 'medium',
//     description: 'Build a system that shows users personalized content updates.',
//     subtopics: [
//       {
//         id: 'm3-s1',
//         title: 'Feed Generation',
//         completed: false,
//         guidance: 'Implement pull vs push model.\n- Handle fan-out for push\n- Rank content by relevance\n- Personalize based on interests'
//       },
//       {
//         id: 'm3-s2',
//         title: 'Content Storage',
//         completed: false,
//         guidance: 'Design data model for posts.\n- Optimize for read performance\n- Handle media attachments\n- Support pagination'
//       },
//       {
//         id: 'm3-s3',
//         title: 'Real-time Updates',
//         completed: false,
//         guidance: 'Push new content to users.\n- WebSocket connections\n- Handle offline users\n- Batch notifications'
//       }
//     ],
//     progress: 0,
//     attempts: 0,
//     languages: []
//   }
// ];

// export const moreHardQuestions: Question[] = [
//   {
//     id: 'h1',
//     title: 'Design a Distributed Database',
//     difficulty: 'hard',
//     description: 'Create a database system that spans multiple geographic regions.',
//     subtopics: [
//       {
//         id: 'h1-s1',
//         title: 'Replication Strategy',
//         completed: false,
//         guidance: 'Implement multi-region replication.\n- Choose synchronous vs async\n- Handle conflict resolution\n- Manage replication lag'
//       },
//       {
//         id: 'h1-s2',
//         title: 'Consistency Model',
//         completed: false,
//         guidance: 'Design consistency guarantees.\n- Implement quorum reads/writes\n- Handle partition tolerance\n- Tune consistency levels'
//       },
//       {
//         id: 'h1-s3',
//         title: 'Sharding Scheme',
//         completed: false,
//         guidance: 'Distribute data across nodes.\n- Choose sharding key carefully\n- Handle rebalancing\n- Manage cross-shard queries'
//       }
//     ],
//     progress: 0,
//     attempts: 0,
//     languages: []
//   },
//   {
//     id: 'h2',
//     title: 'Design a Search Engine',
//     difficulty: 'hard',
//     description: 'Build a system that indexes and searches large volumes of text.',
//     subtopics: [
//       {
//         id: 'h2-s1',
//         title: 'Inverted Index',
//         completed: false,
//         guidance: 'Create efficient text indexing.\n- Tokenize documents\n- Store term frequencies\n- Handle updates to index'
//       },
//       {
//         id: 'h2-s2',
//         title: 'Ranking Algorithm',
//         completed: false,
//         guidance: 'Implement relevance scoring.\n- TF-IDF calculations\n- PageRank for authority\n- Personalization factors'
//       },
//       {
//         id: 'h2-s3',
//         title: 'Distributed Query',
//         completed: false,
//         guidance: 'Process searches across nodes.\n- Fan out queries\n- Merge results\n- Handle timeouts'
//       }
//     ],
//     progress: 0,
//     attempts: 0,
//     languages: []
//   },
//   {
//     id: 'h3',
//     title: 'Design a Stock Exchange',
//     difficulty: 'hard',
//     description: 'Create a system for matching buy/sell orders in real-time.',
//     subtopics: [
//       {
//         id: 'h3-s1',
//         title: 'Order Matching',
//         completed: false,
//         guidance: 'Implement matching engine.\n- Price-time priority\n- Handle market/limit orders\n- Process partial fills'
//       },
//       {
//         id: 'h3-s2',
//         title: 'Market Data',
//         completed: false,
//         guidance: 'Distribute price updates.\n- Optimize for low latency\n- Handle burst traffic\n- Manage subscriptions'
//       },
//       {
//         id: 'h3-s3',
//         title: 'Fault Tolerance',
//         completed: false,
//         guidance: 'Ensure system reliability.\n- Implement order recovery\n- Handle network partitions\n- Atomic transactions'
//       }
//     ],
//     progress: 0,
//     attempts: 0,
//     languages: []
//   }
// ];

import type { Question } from './questions';

export const moreEasyQuestions: Question[] = [
  {
    id: 'e1',
    title: 'Build a URL Shortener Service',
    difficulty: 'easy',
    description: 'Create a service to shorten long URLs into compact links.',
    subtopics: [
      {
        id: 'e1-s1',
        title: 'Base62 Encoder',
        completed: false,
        guidance: 'Write a function to convert numeric IDs to base62 strings.'
      },
      {
        id: 'e1-s2',
        title: 'Redirect Endpoint',
        completed: false,
        guidance: 'Code an API endpoint to redirect short URLs to original URLs.'
      },
      {
        id: 'e1-s3',
        title: 'URL Storage',
        completed: false,
        guidance: 'Design a simple database schema to store URLs and short codes.'
      }
    ],
    progress: 0,
    attempts: 0,
    languages: []
  },
  {
    id: 'e2',
    title: 'Create a Simple Chat App',
    difficulty: 'easy',
    description: 'Build a one-to-one real-time chat application.',
    subtopics: [
      {
        id: 'e2-s1',
        title: 'WebSocket Setup',
        completed: false,
        guidance: 'Implement a WebSocket server for real-time messaging.'
      },
      {
        id: 'e2-s2',
        title: 'Message Display',
        completed: false,
        guidance: 'Code a frontend to show incoming chat messages.'
      },
      {
        id: 'e2-s3',
        title: 'Message Storage',
        completed: false,
        guidance: 'Write a function to save messages in a database.'
      }
    ],
    progress: 0,
    attempts: 0,
    languages: []
  },
  {
    id: 'e3',
    title: 'Develop a File Upload System',
    difficulty: 'easy',
    description: 'Create a service for users to upload and retrieve files.',
    subtopics: [
      {
        id: 'e3-s1',
        title: 'File Upload API',
        completed: false,
        guidance: 'Code an endpoint to handle file uploads.'
      },
      {
        id: 'e3-s2',
        title: 'File Storage',
        completed: false,
        guidance: 'Implement local filesystem storage for uploaded files.'
      },
      {
        id: 'e3-s3',
        title: 'File Retrieval',
        completed: false,
        guidance: 'Write an API to serve stored files to users.'
      }
    ],
    progress: 0,
    attempts: 0,
    languages: []
  },
  {
    id: 'e4',
    title: 'Implement a Task Manager',
    difficulty: 'easy',
    description: 'Build a system to manage user tasks with CRUD operations.',
    subtopics: [
      {
        id: 'e4-s1',
        title: 'Task Creation',
        completed: false,
        guidance: 'Code an API to create new tasks.'
      },
      {
        id: 'e4-s2',
        title: 'Task Listing',
        completed: false,
        guidance: 'Write a function to fetch and display tasks.'
      },
      {
        id: 'e4-s3',
        title: 'Task Updates',
        completed: false,
        guidance: 'Implement an endpoint to update task details.'
      }
    ],
    progress: 0,
    attempts: 0,
    languages: []
  },
  {
    id: 'e5',
    title: 'Design a Voting System',
    difficulty: 'easy',
    description: 'Create a system for users to vote on polls.',
    subtopics: [
      {
        id: 'e5-s1',
        title: 'Poll Creation',
        completed: false,
        guidance: 'Code an API to create polls with options.'
      },
      {
        id: 'e5-s2',
        title: 'Vote Submission',
        completed: false,
        guidance: 'Write an endpoint to record user votes.'
      },
      {
        id: 'e5-s3',
        title: 'Results Display',
        completed: false,
        guidance: 'Implement a function to show poll results.'
      }
    ],
    progress: 0,
    attempts: 0,
    languages: []
  },
  {
    id: 'e8',
    title: 'Design a Bookmark Manager',
    difficulty: 'easy',
    description: 'Create a system to save and organize web bookmarks.',
    subtopics: [
      {
        id: 'e8-s1',
        title: 'Bookmark Saving',
        completed: false,
        guidance: 'Code an API to store bookmark URLs.'
      },
      {
        id: 'e8-s2',
        title: 'Bookmark Listing',
        completed: false,
        guidance: 'Write a function to display saved bookmarks.'
      },
      {
        id: 'e8-s3',
        title: 'Bookmark Categorization',
        completed: false,
        guidance: 'Implement tagging for bookmark organization.'
      }
    ],
    progress: 0,
    attempts: 0,
    languages: []
  },
];

export const moreMediumQuestions: Question[] = [
  {
    id: 'm1',
    title: 'Design a Distributed Cache System',
    difficulty: 'medium',
    description: 'Build a scalable caching layer for fast data access.',
    subtopics: [
      {
        id: 'm1-s1',
        title: 'LRU Eviction',
        completed: false,
        guidance: 'Use a hash map + doubly linked list for O(1) LRU tracking. Access/mutation updates node position; evict tail node when full.'
      },
      {
        id: 'm1-s2',
        title: 'Hashing Logic',
        completed: false,
        guidance: 'Map nodes to a virtual ring using consistent hashing. Assign keys to the nearest node clockwise. Add replicas for balanced distribution.'
      },
      {
        id: 'm1-s3',
        title: 'Cache Storage',
        completed: false,
        guidance: 'Use Redis as backend with key-value storage. Implement get/set/delete ops with TTL. Handle connection pooling and serialization (e.g., JSON).'
      },
      {
        id: 'm1-s4',
        title: 'Thread Safety',
        completed: false,
        guidance: 'Apply mutexes to cache operations and hashing changes. Use read-write locks for concurrent reads with exclusive writes.' 
      }
    ],
    progress: 0,
    attempts: 0,
    languages: []
  },
  {
  "id": "m2",
  "title": "Build an API Rate Limiter",
  "difficulty": "medium",
  "description": "Create a system to control API request rates.",
  "subtopics": [
    {
      "id": "m2-s1",
      "title": "Token Bucket",
      "completed": false,
      "guidance": "Track tokens in a bucket with fixed capacity. Deduct tokens per request; refill at a constant rate (e.g., tokens/sec). Reject requests if tokens < 0."
    },
    {
      "id": "m2-s2",
      "title": "Redis Storage",
      "completed": false,
      "guidance": "Store per-user token counts and timestamps in Redis hashes. Use atomic Lua scripts to update values and enforce concurrency safety."
    },
    {
      "id": "m2-s3",
      "title": "Middleware",
      "completed": false,
      "guidance": "Wrap API routes with rate-limiting logic (e.g., Express.js middleware). Extract user ID from headers, check Redis, and return 429 errors if rate exceeded."
    },
    {
      "id": "m2-s4",
      "title": "Burst Handling",
      "completed": false,
      "guidance": "Allow bursts by setting a max burst size. Refill tokens incrementally (e.g., 1 token every 100ms) to smooth traffic spikes without overwhelming the system."
    }
  ],
  "progress": 0,
  "attempts": 0,
  "languages": []
},
{
  "id": "m3",
  "title": "Create a News Feed System",
  "difficulty": "medium",
  "description": "Build a system for personalized content feeds.",
  "subtopics": [
    {
      "id": "m3-s1",
      "title": "Content Ranking",
      "completed": false,
      "guidance": "Score posts using weighted factors (e.g., likes: 0.3, shares: 0.5, age: decay function). Sort feed by scores."
    },
    {
      "id": "m3-s2",
      "title": "Post Storage",
      "completed": false,
      "guidance": "Schema: `posts(id, user_id, content, created_at)` and `user_follows(user_id, follower_id)`. Index on `user_id` and `created_at` for fast queries."
    },
    {
      "id": "m3-s3",
      "title": "Feed Generation",
      "completed": false,
      "guidance": "On user request, fetch recent posts from followed users via JOIN queries or denormalized feed tables. Apply ranking and limit results."
    },
    {
      "id": "m3-s4",
      "title": "WebSocket Updates",
      "completed": false,
      "guidance": "Open  WebSocket connections. Push new posts to clients in real-time using event streams (e.g., `new_post` events)."
    },
    {
      "id": "m3-s5",
      "title": "Pagination",
      "completed": false,
      "guidance": "Use cursor-based pagination (e.g., `min_id` or `max_id` in requests). Return next/previous cursors to fetch subsequent pages."
    }
  ],
  "progress": 0,
  "attempts": 0,
  "languages": []
},
{
  "id": "m4",
  "title": "Develop a Job Queue System",
  "difficulty": "medium",
  "description": "Create a system to process background tasks.",
  "subtopics": [
    {
      "id": "m4-s1",
      "title": "Queue Setup",
      "completed": false,
      "guidance": "Use Redis lists (e.g., `LPUSH` for enqueue, `BRPOP` for dequeue) with multiple priority levels (e.g., high/low queues)."
    },
    {
      "id": "m4-s2",
      "title": "Worker Process",
      "completed": false,
      "guidance": "Run worker processes that poll queues. Deserialize jobs and execute handler functions (e.g., retry on failure)."
    },
    {
      "id": "m4-s3",
      "title": "Job Scheduling",
      "completed": false,
      "guidance": "Use Redis ZSET to store delayed jobs with timestamps. Poll ZSET periodically (e.g., cron) to move due jobs to the queue."
    },
    {
      "id": "m4-s4",
      "title": "Error Handling",
      "completed": false,
      "guidance": "Implement retries with exponential backoff. Move failed jobs to a dead-letter queue after max retries for manual inspection."
    }
  ],
  "progress": 0,
  "attempts": 0,
  "languages": []
},
{
  "id": "m5",
  "title": "Build a Notification System",
  "difficulty": "medium",
  "description": "Create a system to send user notifications.",
  "subtopics": [
    {
      "id": "m5-s1",
      "title": "Notification Queue",
      "completed": false,
      "guidance": "Use Redis lists or RabbitMQ to queue notifications. Prioritize urgent notifications (e.g., using separate queues)."
    },
    {
      "id": "m5-s2",
      "title": "Email Delivery",
      "completed": false,
      "guidance": "Integrate SMTP (e.g., SendGrid/Nodemailer). Render email templates dynamically and handle delivery status via callbacks."
    },
    {
      "id": "m5-s3",
      "title": "Push Notifications",
      "completed": false,
      "guidance": "Use FCM (Android) or APNs (iOS). Store device tokens in a database and batch-send notifications via provider APIs."
    },
    {
      "id": "m5-s4",
      "title": "User Preferences",
      "completed": false,
      "guidance": "Store preferences (e.g., email/sms opted-in) in a `user_settings` table. Query preferences before sending notifications."
    },
    {
      "id": "m5-s5",
      "title": "Rate Limiting",
      "completed": false,
      "guidance": "Track notification counts per user (e.g., Redis sliding window). Delay or drop excess notifications beyond thresholds (e.g., 5/hr)."
    }
  ],
  "progress": 0,
  "attempts": 0,
  "languages": []
},
];

export const moreHardQuestions: Question[] = [
  {
  "id": "h2",
  "title": "Design a Search Engine",
  "difficulty": "hard",
  "description": "Build a system to index and search text data.",
  "subtopics": [
    {
      "id": "h2-s1",
      "title": "Text Tokenizer",
      "completed": false,
      "guidance": "Tokenize documents by: 1) Normalizing case (lowercase), 2) Removing stop words (e.g., 'the', 'and'), 3) Stemming/lemmatization (e.g., 'running' → 'run'), 4) Handling special characters (e.g., punctuation, emojis). Use libraries like NLTK or spaCy for advanced processing."
    },
    {
      "id": "h2-s2",
      "title": "Inverted Index",
      "completed": false,
      "guidance": "Build an inverted index using a hash map where keys are terms and values are postings lists (document IDs + term frequencies). Optimize with compression (e.g., delta encoding) and store document metadata (e.g., length for normalization)."
    },
    {
      "id": "h2-s3",
      "title": "TF-IDF Scoring",
      "completed": false,
      "guidance": "Calculate TF-IDF scores: 1) Term Frequency (TF) = term count in document / total terms, 2) Inverse Document Frequency (IDF) = log(total docs / docs containing term), 3) Multiply TF × IDF. Use libraries like scikit-learn for vectorization."
    },
    {
      "id": "h2-s4",
      "title": "Query Parser",
      "completed": false,
      "guidance": "Parse queries by: 1) Tokenizing input, 2) Handling boolean operators (AND/OR/NOT), 3) Expanding synonyms (e.g., 'car' ↔ 'automobile'), 4) Ranking results using cosine similarity between query vector and document vectors."
    },
    {
      "id": "h2-s5",
      "title": "Distributed Search",
      "completed": false,
      "guidance": "Partition the index across nodes (e.g., by term range or hash). Use a coordinator node to fan out queries, merge results (e.g., top-K retrieval), and apply global ranking. Replicate shards for fault tolerance."
    },
    {
      "id": "h2-s6",
      "title": "Index Updates",
      "completed": false,
      "guidance": "Support real-time updates via: 1) Delta indexing (track new/updated documents), 2) Merge incremental updates into the main index periodically, 3) Tombstone markers for deletions. Use a transaction log for crash recovery."
    },
    {
      "id": "h2-s7",
      "title": "Caching Layer",
      "completed": false,
      "guidance": "Cache frequent queries in Redis or Memcached. Use LRU/LFU eviction policies. Precompute popular results (e.g., trending topics) and shard caches for scalability."
    }
  ],
  "progress": 0,
  "attempts": 0,
  "languages": []
},
 {
  "id": "h3",
  "title": "Create a Stock Trading System",
  "difficulty": "hard",
  "description": "Build a real-time stock order matching system.",
  "subtopics": [
    {
      "id": "h3-s1",
      "title": "Order Book",
      "completed": false,
      "guidance": "Implement a double-sided order book using priority queues (e.g., min-heap for buy orders, max-heap for sell orders). Track price levels and quantities. Optimize for O(1) access to best bid/ask."
    },
    {
      "id": "h3-s2",
      "title": "Matching Engine",
      "completed": false,
      "guidance": "Match orders by: 1) Price-time priority (highest bid/lowest ask first), 2) Partial fills (split large orders), 3) Atomic execution (use mutexes for thread safety). Log matches in a trade ledger."
    },
    {
      "id": "h3-s3",
      "title": "Market Updates",
      "completed": false,
      "guidance": "Publish real-time updates via WebSocket or Kafka. Use delta encoding to minimize bandwidth (e.g., send only price changes). Implement throttling to avoid overwhelming clients."
    },
    {
      "id": "h3-s4",
      "title": "Transaction Log",
      "completed": false,
      "guidance": "Store trades in an append-only log (e.g., Apache BookKeeper). Use checksums for integrity and replicate logs across nodes for durability."
    },
    {
      "id": "h3-s5",
      "title": "Fault Tolerance",
      "completed": false,
      "guidance": "Use consensus protocols (e.g., Raft) for leader election. Maintain snapshots for recovery and synchronize state via heartbeat checks."
    },
    {
      "id": "h3-s6",
      "title": "Latency Optimization",
      "completed": false,
      "guidance": "Optimize with: 1) Zero-copy data structures, 2) Kernel bypass networking (e.g., DPDK), 3) Co-location of matching engines near exchanges."
    },
    {
      "id": "h3-s7",
      "title": "Audit Trail",
      "completed": false,
      "guidance": "Log all actions (orders, cancellations, trades) with timestamps and user IDs. Store in tamper-proof storage (e.g., blockchain-inspired hashing) for compliance."
    }
  ],
  "progress": 0,
  "attempts": 0,
  "languages": []
},
  {
  "id": "h4",
  "title": "Build a Video Streaming Service",
  "difficulty": "hard",
  "description": "Create a system to stream video content.",
  "subtopics": [
    {
      "id": "h4-s1",
      "title": "Video Encoding",
      "completed": false,
      "guidance": "Encode videos using H.264/H.265 codecs. Transcode to multiple resolutions (e.g., 480p, 720p, 1080p) and bitrates (e.g., 1 Mbps, 3 Mbps). Use FFmpeg for processing."
    },
    {
      "id": "h4-s2",
      "title": "Chunked Streaming",
      "completed": false,
      "guidance": "Split videos into 2-10 second chunks (e.g., MPEG-DASH or HLS). Serve .ts files with .m3u8 playlists. Implement adaptive bitrate switching based on network speed."
    },
    {
      "id": "h4-s3",
      "title": "CDN Integration",
      "completed": false,
      "guidance": "Cache popular content at edge nodes (e.g., Cloudflare, Akamai). Use anycast routing for low latency. Prefetch trending videos during off-peak hours."
    },
    {
      "id": "h4-s4",
      "title": "Buffering Logic",
      "completed": false,
      "guidance": "Implement client-side buffering: 1) Start playback after 2-3 chunks are preloaded, 2) Adjust buffer size based on network throughput, 3) Display low-buffer warnings."
    },
    {
      "id": "h4-s5",
      "title": "DRM Protection",
      "completed": false,
      "guidance": "Encrypt videos with AES-128. Use DRM systems (e.g., Widevine, FairPlay) for license management. Bind decryption keys to user devices."
    },
    {
      "id": "h4-s6",
      "title": "Analytics",
      "completed": false,
      "guidance": "Track metrics like watch time, drop-off points, and bitrate switches. Use Kafka for event streaming and Grafana for dashboards."
    },
    {
      "id": "h4-s7",
      "title": "Scalability",
      "completed": false,
      "guidance": "Scale with Kubernetes clusters for transcoding and load balancers for HTTP streaming. Use stateless API gateways for metadata requests."
    }
  ],
  "progress": 0,
  "attempts": 0,
  "languages": []
},
  {
  "id": "h5",
  "title": "Design a Ride-Sharing System",
  "difficulty": "hard",
  "description": "Build a system for ride matching and tracking.",
  "subtopics": [
    {
      "id": "h5-s1",
      "title": "Driver Matching",
      "completed": false,
      "guidance": "Match riders to drivers based on proximity (e.g., 1 km radius), driver availability, and ETA. Use k-d trees or spatial indexes for efficient location queries."
    },
    {
      "id": "h5-s2",
      "title": "Geolocation",
      "completed": false,
      "guidance": "Track real-time locations via GPS (latitude/longitude). Update positions every 5-10 seconds using WebSockets. Use geohashing for grid-based proximity checks."
    },
    {
      "id": "h5-s3",
      "title": "Pricing Engine",
      "completed": false,
      "guidance": "Calculate dynamic pricing using: base fare + (distance × rate) + (time × surge multiplier). Apply surge pricing during high demand using historical data."
    },
    {
      "id": "h5-s4",
      "title": "Route Optimization",
      "completed": false,
      "guidance": "Use Dijkstra's or A* algorithm for shortest path. Factor in traffic data (e.g., Google Maps API) and minimize detours for multi-passenger rides."
    },
    {
      "id": "h5-s5",
      "title": "Payment System",
      "completed": false,
      "guidance": "Integrate payment gateways (Stripe, PayPal). Tokenize credit card info. Handle post-ride charges and split payments for shared rides."
    },
    {
      "id": "h5-s6",
      "title": "Notification Service",
      "completed": false,
      "guidance": "Send SMS/push notifications via Twilio or Firebase Cloud Messaging. Prioritize critical updates (e.g., driver arrival time changes)."
    },
    {
      "id": "h5-s7",
      "title": "Scalability",
      "completed": false,
      "guidance": "Shard user data by region. Use Redis for real-time location caching and Kafka for event-driven updates."
    }
  ],
  "progress": 0,
  "attempts": 0,
  "languages": []
},
  {
  "id": "h6",
  "title": "Create a Distributed File System",
  "difficulty": "hard",
  "description": "Build a system to store and access files across nodes.",
  "subtopics": [
    {
      "id": "h6-s1",
      "title": "File Chunking",
      "completed": false,
      "guidance": "Split files into fixed-size chunks (e.g., 64 MB). Use Merkle trees to verify chunk integrity. Store chunks in a redundant format."
    },
    {
      "id": "h6-s2",
      "title": "Data Distribution",
      "completed": false,
      "guidance": "Distribute chunks using consistent hashing. Assign primary and secondary replicas. Balance load with rebalancing algorithms (e.g., CRUSH)."
    },
    {
      "id": "h6-s3",
      "title": "Replication",
      "completed": false,
      "guidance": "Replicate chunks across 3+ nodes. Use Paxos/Raft for consensus during writes. Prioritize rack-aware replication to avoid single points of failure."
    },
    {
      "id": "h6-s4",
      "title": "Metadata Store",
      "completed": false,
      "guidance": "Track chunk locations in a distributed key-value store (e.g., etcd, ZooKeeper). Cache metadata in memory for fast access."
    },
    {
      "id": "h6-s5",
      "title": "File Retrieval",
      "completed": false,
      "guidance": "Reassemble files by fetching chunks in parallel. Handle missing chunks via replicas. Use erasure coding for efficient repair."
    },
    {
      "id": "h6-s6",
      "title": "Consistency",
      "completed": false,
      "guidance": "Enforce strong consistency with two-phase commits. Use versioning (e.g., Lamport timestamps) for conflict resolution."
    },
    {
      "id": "h6-s7",
      "title": "Fault Tolerance",
      "completed": false,
      "guidance": "Detect node failures via heartbeats. Re-replicate lost chunks from healthy replicas. Use checksums to detect disk corruption."
    }
  ],
  "progress": 0,
  "attempts": 0,
  "languages": []
},
  {
  "id": "h7",
  "title": "Build a Recommendation Engine",
  "difficulty": "hard",
  "description": "Create a system to suggest personalized content.",
  "subtopics": [
    {
      "id": "h7-s1",
      "title": "Data Collection",
      "completed": false,
      "guidance": "Log user interactions (clicks, views, purchases) in a data lake (e.g., AWS S3). Use Kafka for real-time ingestion."
    },
    {
      "id": "h7-s2",
      "title": "Collaborative Filtering",
      "completed": false,
      "guidance": "Implement matrix factorization (e.g., SVD) to find latent factors. Use cosine similarity between user/item vectors."
    },
    {
      "id": "h7-s3",
      "title": "Content-Based Filtering",
      "completed": false,
      "guidance": "Extract features (e.g., keywords, categories) from items. Recommend similar items using TF-IDF + cosine similarity."
    },
    {
      "id": "h7-s4",
      "title": "Ranking Model",
      "completed": false,
      "guidance": "Combine signals (collaborative, content, popularity) with a gradient-boosted model (e.g., XGBoost). Use A/B testing for tuning."
    },
    {
      "id": "h7-s5",
      "title": "Real-Time Updates",
      "completed": false,
      "guidance": "Update embeddings incrementally with online learning. Use Redis to cache recent user behavior."
    },
    {
      "id": "h7-s6",
      "title": "Scalability",
      "completed": false,
      "guidance": "Shard user/item data. Use Apache Spark for distributed model training and TensorFlow Serving for inference."
    },
    {
      "id": "h7-s7",
      "title": "Evaluation Metrics",
      "completed": false,
      "guidance": "Measure precision@K, recall@K, and AUC-ROC. Use offline metrics (historical data) and online A/B tests."
    }
  ],
  "progress": 0,
  "attempts": 0,
  "languages": []
},
{
  "id": "h8",
  "title": "Design a Real-Time Analytics System",
  "difficulty": "hard",
  "description": "Build a system to process and visualize live data.",
  "subtopics": [
    {
      "id": "h8-s1",
      "title": "Data Ingestion",
      "completed": false,
      "guidance": "Stream data via Kafka or Kinesis. Use schema validation (e.g., Avro) and buffer events in a queue before processing."
    },
    {
      "id": "h8-s2",
      "title": "Aggregation Logic",
      "completed": false,
      "guidance": "Aggregate metrics (e.g., counts, averages) using windowed operations (e.g., tumbling/sliding windows). Use Apache Flink or Spark Streaming."
    },
    {
      "id": "h8-s3",
      "title": "Storage Layer",
      "completed": false,
      "guidance": "Store aggregated data in time-series databases (e.g., InfluxDB) or OLAP systems (e.g., ClickHouse). Optimize for fast reads."
    },
    {
      "id": "h8-s4",
      "title": "Visualization",
      "completed": false,
      "guidance": "Render dashboards with Grafana or Superset. Use WebSockets for live updates and drill-down capabilities."
    },
    {
      "id": "h8-s5",
      "title": "Scalability",
      "completed": false,
      "guidance": "Scale horizontally with Kubernetes. Partition data by key (e.g., user ID) and use load balancers for ingestion."
    },
    {
      "id": "h8-s6",
      "title": "Fault Tolerance",
      "completed": false,
      "guidance": "Ensure exactly-once processing with checkpointing (e.g., Flink savepoints). Replicate data across zones."
    },
    {
      "id": "h8-s7",
      "title": "Alerting",
      "completed": false,
      "guidance": "Define thresholds (e.g., error rate > 5%) and trigger alerts via Slack/Email. Use Prometheus for alert management."
    }
  ],
  "progress": 0,
  "attempts": 0,
  "languages": []
},
  {
  "id": "h9",
  "title": "Create a Distributed Lock Manager",
  "difficulty": "hard",
  "description": "Build a system to manage locks across nodes.",
  "subtopics": [
    {
      "id": "h9-s1",
      "title": "Lock Acquisition",
      "completed": false,
      "guidance": "Use Redis SET key NX PX commands for atomic lock acquisition. Assign unique token values to prevent race conditions."
    },
    {
      "id": "h9-s2",
      "title": "Lock Release",
      "completed": false,
      "guidance": "Release locks via Lua scripts to ensure atomicity (check token before deletion). Handle stale locks with TTL."
    },
    {
      "id": "h9-s3",
      "title": "Redis Backend",
      "completed": false,
      "guidance": "Store locks in Redis clusters. Use Redlock algorithm for cross-node coordination."
    },
    {
      "id": "h9-s4",
      "title": "Deadlock Detection",
      "completed": false,
      "guidance": "Track lock dependencies and run cycle detection (e.g., Banker's algorithm). Use timeouts as a fallback."
    },
    {
      "id": "h9-s5",
      "title": "Timeout Handling",
      "completed": false,
      "guidance": "Set lease durations for locks. Renew leases periodically via heartbeat threads."
    },
    {
      "id": "h9-s6",
      "title": "Scalability",
      "completed": false,
      "guidance": "Shard locks by resource type. Use proxy layers (e.g., Envoy) for load balancing."
    },
    {
      "id": "h9-s7",
      "title": "Monitoring",
      "completed": false,
      "guidance": "Track lock wait times and contention rates. Use Prometheus/Grafana for dashboards."
    }
  ],
  "progress": 0,
  "attempts": 0,
  "languages": []
}
];